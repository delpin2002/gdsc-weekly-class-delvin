var express = require('express');
const { getAllMovies, getMoviesById, getRecommendation } = require('../controllers/movies');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Weekly Web Movie API' });
});

router.get('/movies', getAllMovies);
router.get('/movies/:id', getMoviesById);
router.get('/recommendation/:userId', getRecommendation);

module.exports = router;
