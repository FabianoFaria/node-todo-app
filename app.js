const express = require('express');
const app = express();

app.use(express.json());

let todos = [];

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const todo = req.body;
  todos.push(todo);
  res.status(201).json(todo);
});

app.delete('/todos/:id', (req, res) => {
  const id = req.params.id;
  todos = todos.filter(todo => todo.id !== id);
  res.status(204).end();
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});