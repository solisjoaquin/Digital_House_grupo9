let userController = {
    // estoy mandando los archivos ejs con render
    // puedo llamarlos con o sin ".ejs"
    'register': function(req, res){
        res.render('register')
    },
    'login': function(req,res){
        res.render('login')
    },
    'list': function(req,res){
        let users = [
            {id:1, name:'Dario'},
            {id:2, name:'Jaier'},
            {id:3, name:'Maru'},
            {id:4, name:'Ale'},
            {id:5, name:'Alan'}
        ];
        // pasar la variable users me permite usarla en el ejs
        res.render('userList', {'users': users})
    },

    /*el metodo para el formulario*/
    search:function(req,res){
        /*req.query me ayuda a obtener datos del form*/
        let loqueBuscoElUsuario= req.query.search;

        let users = [
            {id:1, name:'Dario'},
            {id:2, name:'Javier'},
            {id:3, name:'Maru'},
            {id:4, name:'Ale'},
            {id:5, name:'Alan'}
        ];

        let userResults = [];

        for(let i=0; i<users.length;i++){
            //saber si contiene un elemento 
            if(users[i].name.includes(loqueBuscoElUsuario)){
                userResults.push(users[i]);
            }
        }
        // envio la variable userResults al ejs 'userResults'
        res.render('userResults', {userResults: userResults})
        //res.send(loqueBuscoElUsuario);
    },
    // metodo para crear usuarios
    create: function(req,res){
        // crear un array de usuario
        let usuario = {
            nombre: req.body.nombre,
            email: req.body.email,
            password: req.body.password
        }

        // redirigir al usuario
        res.redirect("/users/list")
    },
    edit:function(req,res){
        let idUser = req.params.idUser;

        let users = [
            {id:1, name:'Dario'},
            {id:2, name:'Javier'},
            {id:3, name:'Maru'},
            {id:4, name:'Ale'},
            {id:5, name:'Alan'}
        ];

        let userToEdit = users[idUser];

        res.render("userEdit",{userToEdit:userToEdit})


    }
};

module.exports = userController;