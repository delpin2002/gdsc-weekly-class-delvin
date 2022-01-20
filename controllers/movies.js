const Movie = require('../models/movie');
const model = require('../model');

exports.getAllMovies = async(req, res, next) => {
    try {
        const movie = await Movie.find().limit(20);

        if(!movie) {
            res.status(404).json({message: 'Data movie not found!'})
        }else{
            res.status(201).json({message: 'Data movie founded!', movie: movie});
        }
        
    } catch (error) {
        throw error;
    };
};

exports.getMoviesById = async(req, res, next) => {
    try {
        const {id} = req.params;

        const movie = await Movie.findOne({movie_id: id});

        if(!movie){
            res.status(404).json({message: 'Data movie not found!'})
        }else{
            res.status(200).json({message: 'Found one movie!', movie: movie});
        }

    } catch (error) {
        throw error;
    }
}

exports.getRecommendation = async(req, res, next) => {
    try {
        const {userId} = req.params;

        if(Number(userId) > 943 || Number(userId) < 0){
            res.status(500).json({message: 'User Id tidak boleh lebih dari 943 atau kurang dari 0'});
        
        }

        const recommendation = model.recommend(userId);

        if(!recommendation){
            res.status(404).json({message: 'Recommendation tidak ketemu!'});
        }else{
            res.status(200).json({message: 'Recommendation ketemu!', recommendation: recommendation})
        }
    } catch (error) {
        throw error;
    }
}