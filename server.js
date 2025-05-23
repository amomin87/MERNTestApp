const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://mongo:27017/merncrud', { useNewUrlParser: true });

const Item = mongoose.model('Item', { name: String });

app.get('/api/items', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

app.post('/api/items', async (req, res) => {
  const newItem = new Item({ name: req.body.name });
  await newItem.save();
  res.json(newItem);
});

app.delete('/api/items/:id', async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

app.listen(5000, () => console.log('Backend running on port 5000'));
