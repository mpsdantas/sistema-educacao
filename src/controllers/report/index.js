exports.realizarReport = async (application, req, res) => {
    if(req.body.anonimo){
        req.body.nome = "Anonimo";
    }

}