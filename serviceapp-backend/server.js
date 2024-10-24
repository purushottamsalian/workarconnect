const mongoose = require("mongoose");
const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");
const jwt = require("jsonwebtoken");

require('dotenv').config();

const app = express();
app.use(cors({
  origin: ["https://workarconnect-g1t2f2tcf-purushottamsalians-projects.vercel.app/"],
  methods: ["POST","GET"],
  credentials: true
}));

const { Schema } = mongoose;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Error", err);
  });

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const userModel = mongoose.model("User", userSchema);

const JWT_SECRET = process.env.JWT_TOKEN;

app.use(express.json());

app.post("/signup", async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;
    console.log(req.body); // Check what data is coming in

    // Check if user already exists
    const existingUser = await userModel.findOne({
      $or: [{ username }, { email }],
    });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Username or email already exists" });
    }

    // Ensure passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new userModel({
      username,
      email,
      password: hashedPassword, // Save hashed password
    });

    // Save user to database
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Error signing up" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    // Compare provided password with hashed password in database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Optional: If using JWT, generate a token
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });

    // Send success response with token (if using JWT) or just success message
    return res.json({
      message: "Login successful",
      token, // If using JWT
    });
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: "Server error" });
  }
});

const authenticateJWT = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1]; // Get token from Authorization header

  if (token) {
    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403); // Forbidden
      }
      req.user = user; // Save user info for use in next middleware
      next();
    });
  } else {
    res.sendStatus(401); // Unauthorized
  }
};

// Protected route example
app.get("/protected", authenticateJWT, (req, res) => {
  res.send("This is a protected route. You are authenticated!");
});

// app.post("/login", (req, res) => {
//   const { email, password } = req.body;

//   const userM = user.find((u) => u.email === email);

//   if (!userM) {
//     return res.status(401).json({ message: "Invalid credentials" });
//   }

//   // Verify password
//   const isMatch = bcrypt.compareSync(password, user.password);

//   if (!isMatch) {
//     return res.status(401).json({ message: "Invalid credentials" });
//   }

//   // Create a JWT token
//   const token = jwt.sign({ id: user.id }, "your_jwt_secret", {
//     expiresIn: "1h",
//   });

//   return res.json({ token });
// });

// mongoose
//   .connect("mongodb://127.0.0.1:27017/JobEnq")
//   .then(() => {
//     console.log("Database connected");
//   })
//   .catch((err) => {
//     console.log("Error", err);
//   });

const jobSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: Number, required: true, unique: true },
  category: { type: String, required: true },
  jobProfile: { type: String, required: true },
});

const jobModel = mongoose.model("Job", jobSchema);

app.post("/job", async (req, res) => {
  try {
   
    const { name, email, mobile,category,jobProfile  } = req.body;
    console.log(req.body); // Check what data is coming in

    // Check if user already exists
    const existingUser = await jobModel.findOne({
      $or: [{ name }, { email }],
    });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "name or email already exists" });
    }

    // Ensure passwords match
    // if (password !== confirmPassword) {
    //   return res.status(400).json({ message: "Passwords do not match" });
    // }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(password, salt);

    // // Create new user
    const newUser = new jobModel({
      name,
      email,
      // password: hashedPassword, // Save hashed password
      mobile,
      category,
      jobProfile
    });

    // Save user to database
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Error signing up" });
  }
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(3000, () => {
  console.log("Server started at http://localhost:3000/");
});
