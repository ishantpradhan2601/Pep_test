const express = require("express")
const app = express();
app.use(express.json())

let students = [
  { id: 1, name: "Alice", age: 21, course: "Math" },
  { id: 2, name: "Bob", age: 22, course: "Physics" }
];

let nextId = students.length + 1;

const logger = (req, res, next) => {
  console.log(`${req.method} request received at ${req.url}`);
  next(); 
};

app.use(logger);

const validateStudent = (req, res, next) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).json({
      message: "Name and Age are required"
    });
  }

  if (typeof age !== "number") {
    return res.status(400).json({
      message: "Age must be a number"
    });
  }

  next(); 
};

app.get("/students", (req, res) => {
  res.json(students);
});

app.post("/students", validateStudent, (req, res) => {
  const { name, age } = req.body;

  const newStudent = {
    id: nextId++,
    name,
    age
  };

  students.push(newStudent);

  res.status(201).json({
    message: "Student added successfully",
    student: newStudent
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});