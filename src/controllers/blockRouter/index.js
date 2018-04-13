exports.statusAdmin = (req, res, next) => {
    if(!req.session.statusAdmin){
        res.redirect('/');
        return;
    }
    return next();
}
exports.statusUser = (req, res, next) => {
    if (!req.session.statusUser) {
        res.redirect('/');
        return;
    }
    return next();
}
exports.status = (req,res, next) =>{
    if (!req.session.statusUser || !req.session.statusAdmin) {
        res.redirect('/');
        return;
    }
    return next();
}