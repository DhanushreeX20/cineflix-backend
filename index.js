const express = require("express");
const cors = require("cors");
const app = express();

// ✅ CORS for Vercel frontend
app.use(cors({
  origin: "https://your-frontend.vercel.app", // change this
  methods: ["GET", "POST"],
}));

app.use(express.json());

// Dummy user
const USER = {
  email: "click@here.com",
  password: "1010",
};

// Login route
app.post("/Login", (req, res) => {
  const { email, password } = req.body;

  if (email === USER.email && password === USER.password) {
    return res.json({ success: true });
  }

  res.status(401).json({ success: false });
});

// ✅ IMPORTANT: PORT for Render
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
