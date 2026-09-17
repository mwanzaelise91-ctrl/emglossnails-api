const dns = require("dns");

// Use Google's DNS
dns.setServers(["8.8.8.8", "8.8.4.4"]);

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const bcrypt = require("bcrypt");

const app = express();

const PORT = process.env.PORT || 3001;

// ================= CORS =================

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

// ================= DATABASE =================

let db;
let client;

async function connectMongo() {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is missing from your .env file");
    }

    console.log("");
    console.log("=================================");
    console.log("Connecting to MongoDB...");
    console.log("=================================");

    client = new MongoClient(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 10000,
      connectTimeoutMS: 10000,
    });

    await client.connect();

    // Test MongoDB connection
    await client.db("EmglossNails").command({ ping: 1 });

    db = client.db("EmglossNails");

    console.log("=================================");
    console.log("MongoDB Connected Successfully");
    console.log("Database: EmglossNails");
    console.log("=================================");
    console.log("");

  } catch (error) {
    console.error("");
    console.error("=================================");
    console.error("MongoDB CONNECTION FAILED");
    console.error("=================================");
    console.error(error.message);
    console.error("=================================");
    console.error("");

    throw error;
  }
}

// ================= TEST ROUTE =================

app.get("/", (req, res) => {
  res.json({
    message: "EMGLOSS Nails backend is running",
    database: db ? "Connected" : "Not connected",
  });
});

// ================= AUTH MIDDLEWARE =================

async function auth(req, res, next) {
  try {
    if (!db) {
      return res.status(503).json({
        error: "Database is not connected",
      });
    }

    const header = req.headers.authorization;

    if (!header || !header.startsWith("Basic ")) {
      return res.status(401).json({
        error: "Authentication required",
      });
    }

    const encoded = header.split(" ")[1];

    const decoded = Buffer.from(encoded, "base64").toString("utf8");

    const separator = decoded.indexOf(":");

    if (separator === -1) {
      return res.status(401).json({
        error: "Invalid authentication format",
      });
    }

    const email = decoded.substring(0, separator);
    const password = decoded.substring(separator + 1);

    const user = await db
      .collection("signup")
      .findOne({ email });

    if (!user) {
      return res.status(401).json({
        error: "Invalid credentials",
      });
    }

    const valid = await bcrypt.compare(
      password,
      user.password
    );

    if (!valid) {
      return res.status(401).json({
        error: "Invalid credentials",
      });
    }

    req.user = user;

    next();

  } catch (error) {
    console.error("Authentication error:", error);

    res.status(401).json({
      error: "Unauthorized",
    });
  }
}

// ================= SIGNUP =================

app.post("/signup", async (req, res) => {
  try {
    console.log("========== SIGNUP REQUEST ==========");
    console.log(req.body);

    if (!db) {
      return res.status(503).json({
        error: "Database is not connected. Please check MongoDB.",
      });
    }

    const {
      firstName,
      lastName,
      email,
      password,
    } = req.body;

    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    const existing = await db
      .collection("signup")
      .findOne({ email });

    if (existing) {
      return res.status(409).json({
        error: "Email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = {
      firstName,
      lastName,
      email,
      password: hashedPassword,
      createdAt: new Date(),
    };

    const result = await db
      .collection("signup")
      .insertOne(user);

    await db.collection("user").insertOne({
      signupId: result.insertedId,
      firstName,
      lastName,
      email,
      createdAt: new Date(),
    });

    console.log("New user created:", email);

    res.status(201).json({
      message: "Account created successfully",
      id: result.insertedId,
    });

  } catch (error) {
    console.error("SIGNUP ERROR:", error);

    res.status(500).json({
      error: error.message || "Unable to create account",
    });
  }
});

// ================= LOGIN =================

app.post("/login", async (req, res) => {
  try {
    if (!db) {
      return res.status(503).json({
        error: "Database is not connected",
      });
    }

    const {
      email,
      password,
    } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        error: "Email and password are required",
      });
    }

    const user = await db
      .collection("signup")
      .findOne({ email });

    if (!user) {
      return res.status(401).json({
        error: "Invalid email or password",
      });
    }

    const valid = await bcrypt.compare(
      password,
      user.password
    );

    if (!valid) {
      return res.status(401).json({
        error: "Invalid email or password",
      });
    }

    await db.collection("login").insertOne({
      userId: user._id,
      email: user.email,
      loginDate: new Date(),
    });

    res.json({
      message: "Login successful",

      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone || "",
      },
    });

  } catch (error) {
    console.error("LOGIN ERROR:", error);

    res.status(500).json({
      error: error.message || "Unable to login",
    });
  }
});

// ================= START SERVER =================

async function startServer() {
  try {
    await connectMongo();

    app.listen(PORT, () => {
      console.log("=================================");
      console.log("EMGLOSS Backend running");
      console.log(`http://localhost:${PORT}`);
      console.log("=================================");
    });

  } catch (error) {
    console.error("");
    console.error("SERVER NOT STARTED");
    console.error("MongoDB must connect before the server starts.");
    console.error("");
  }
}

startServer();