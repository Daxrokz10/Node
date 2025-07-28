const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const db = require('./db'); // Import the database connection

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const Employee = require('./models/Employee');

// Create
app.post('/add', async (req, res) => {
  const emp = new Employee(req.body);
  await emp.save();
  res.redirect('/');
});

// Read
app.get('/', async (req, res) => {
  const all = await Employee.find();
  res.render('index', { employees: all });
});

// Delete
app.post('/delete/:id', async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.redirect('/');
});
