const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req, res) => {
    res.render('site/index');
});

router.get('/about', (req, res) => {
    res.render('site/about');
});

router.get('/contact', (req, res) => {
    res.render('site/contact');
});

router.get('/blog', (req, res) => {
    Post.find({}).then(posts => {
        res.render('site/blog', {
            posts: posts.map(item => item.toJSON())
        });
    });
});

router.get('/login', (req, res) => {
    res.render('site/login');
});

router.get('/register', (req, res) => {
    res.render('site/register');
});

router.get('/register', (req, res) => {
    res.render('site/register');
});


module.exports = router;