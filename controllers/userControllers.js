// importar libreria fs para manejar archivos para la base de datos
let fs = require("fs");

let userController = {
    index: function(req, res){
        res.send("lista de usuarios")
    },
    login: function(req,res){
        res.render('login')
    },
    
    // estoy mandando los archivos ejs con render
    // puedo llamarlos con o sin ".ejs"
    register: function(req, res){
        res.render('register')
    }
};

module.exports = userController;