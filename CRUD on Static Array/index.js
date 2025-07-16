const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let items = [
    {id:1, name: 'Item 1'},
    {id:2, name: 'Item 2'},
];

app.get('/items',(req,res)=>{
    res.json(items);
})

app.get('/items/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const item = items.find(i => i.id === id);
    if(!item){
        return res.status(404).json({message: 'Item not found'});
    }else{
        res.json(item);
    }
});


app.post('/items', (req, res) => {
  const { name } = req.body;
  const newItem = {
    id: items.length + 1,
    name
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// ✅ PUT (update) item
app.put('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find(i => i.id === id);
  if (!item) return res.status(404).json({ message: 'Item not found' });

  item.name = req.body.name;
  res.json(item);
});

// ✅ DELETE item
app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex(i => i.id === id);
  if (index === -1) return res.status(404).json({ message: 'Item not found' });

  items.splice(index, 1);
  res.status(204).send(); // No content
});


// 🚀 Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));