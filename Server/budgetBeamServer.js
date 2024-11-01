const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let items = [
  { id: 1, name: "Item 1", description: "This is item 1" },
  { id: 2, name: "Item 2", description: "This is item 2" },
];

app.get('/', (_, res) => {
  res.send('Welcome to Budget Beam!');
});

// GET all items
app.get('/items', (_, res) => {
  res.json(items);
});

// GET a specific item by ID
app.get('/items/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const item = items.find(item => item.id === id);
  if (!item) {
    return res.status(404).json({ error: "Item not found" });
  }
  res.json(item);
});

app.listen(port, () => {
  console.log(`budget beam server listening on port ${port}`)
});