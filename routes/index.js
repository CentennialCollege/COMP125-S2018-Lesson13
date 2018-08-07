let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express Demo' 
  });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { 
    title: 'About Express',
    author: 'Tom Tsiliopoulos'
 });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { 
    title: 'Contact Me',
    authors: ['Tom', 'Mark', 'Luke', 'Jaden', 'John']
 });
});

module.exports = router;
