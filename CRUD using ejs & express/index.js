let users = [];

const express = require('express');
const app = express();
const PORT = 9696;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index.ejs', { users, userToEdit: null });
});

app.post('/', (req, res) => {
    users.push({ ...req.body, id: Date.now() });
    res.redirect('/');
});

app.get('/user/delete/:id', (req, res) => {
    const id = Number(req.params.id);
    users = users.filter(user => user.id !== id);
    res.redirect('/');
});

app.get('/user/edit/:id', (req, res) => {
    const id = Number(req.params.id);
    const userToEdit = users.find(user => user.id === id);
    if (!userToEdit) return res.redirect('/');
    res.render('index.ejs', { users, userToEdit });
});

app.post('/user/edit/:id', (req, res) => {
    const id = Number(req.params.id);
    users = users.map(user =>
        user.id === id ? { ...req.body, id } : user
    );
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
