let userController = {
    // estoy mandando los archivos ejs con render
    // puedo llamarlos con o sin ".ejs"
    'register': function(req, res){
        res.render('register')
    },
    'list': function(req,res){

        let users = [
            'prod1',
            'prod2',
            'prod3'
        ]
        // pasar la variable users me permite usarla en el ejs
        res.render('userList', {'users': users})
    }
}

module.exports = userController;