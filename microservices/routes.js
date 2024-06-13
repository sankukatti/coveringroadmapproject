const routes = (app) => {
    app.get('/users', (req, res) => {
        res.send(Users);
    });

    app.get('/users/:id', (req, res, next) => {
        if (
            Number(req.params.id) > 0 &&
            Number(req.params.id) < Users.length
        ) {
            res.send(Users[req.params.id - 1]);
        } else {
            next({id: 'USER_NOT_FOUND'});
        }
        
    });
}

module.exports = routes;
