const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieParser());



app.post("/login", (req, res) => {
  const { role } = req.body;

  if (!role || (role !== "admin" && role !== "client")) {
    return res.status(400).json({
      message: "Role must be admin or client"
    });
  }

  
  res.cookie("userRole", role, { maxAge: 24 * 60 * 60 * 1000 });

  if (role === "admin") {
    return res.json({ message: "Admin LoggedIn" });
  }

  res.json({ message: "Client LoggedIn" });
});


const checkLogin = (req, res, next) => {
  const role = req.cookies.userRole;

  if (!role) {
    return res.status(401).json({
      message: "Unauthorized. Please login first"
    });
  }

  req.role = role; 
  next();
};


app.get("/dashboard", checkLogin, (req, res) => {
  if (req.role === "admin") {
    return res.json({ message: "Welcome Admin" });
  }

  res.json({ message: "Welcome Client" });
});


app.get("/logout", (req, res) => {
  res.clearCookie("userRole");

  res.json({
    message: "Logged out successfully"
  });
});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});