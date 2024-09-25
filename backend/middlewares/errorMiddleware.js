// backend/middlewares/errorMiddleware.js

const errorMiddleware = (err, req, res, next) => {
    console.error(err.stack); // Log error stack trace
    res.status(500).json({ message: 'Something went wrong!', error: err.message });
};

module.exports = errorMiddleware;
