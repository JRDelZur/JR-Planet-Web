const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html', { title: 'JR-Planet' });
});

router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Inic' });
});




module.exports = router;