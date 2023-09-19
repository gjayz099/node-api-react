const ErrorMiddlerware = (err, req, res, next) => {
    const node = 'development'
    console.log('here is an error middleware');
    res.status(500).send('Something broke!')
    res.json({message: err.message, stack: node === "development" ? err.stack : null});
}

module.exports = ErrorMiddlerware