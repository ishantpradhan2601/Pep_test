const express = require("express");
const app = express();

app.use(express.json());

let students = [
  { id: 1, name: "Alice", age: 21, course: "Math" },
  { id: 2, name: "Bob", age: 22, course: "Physics" }
];

let nextId = students.length + 1;

app.post("/students", (req, res) => {
  const { name, age, course } = req.body;

  const newStudent = {
    id: nextId++,
    name,
    age,
    course
  };

  students.push(newStudent);

  res.status(201).json({
    message: "Student created successfully",
    student: newStudent
  });
});

app.get("/students", (req, res) => {
  res.json(students);
});

app.get("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json(student);
});


app.put("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, age, course } = req.body;

  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

 
  if (name) student.name = name;
  if (age) student.age = age;
  if (course) student.course = course;

  res.json({
    message: "Student updated successfully",
    student
  });
});

app.delete("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = students.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  const deletedStudent = students.splice(index, 1);

  res.json({
    message: "Student deleted successfully",
    student: deletedStudent[0]
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});