//import the controller folder (automatically calls the index.js file)
var controllers = require('./controllers'); 

var router = function(app) {

    app.get("/login", controllers.Account.loginPage); 
    app.post("/login", controllers.Account.login); 

    app.get("/logout", controllers.Account.logout);

    app.get("/signup", controllers.Account.signupPage);
    app.post("/signup", controllers.Account.signup);

    app.get("/maker", controllers.Tile.makerPage);
    app.post("/maker", controllers.Tile.make);

   // app.get("/search", controllers.Tile.searhPage);

    app.get("/", controllers.Account.loginPage);

    app.get("/myTiles", controllers.Tile.myTilesPage);  
};

module.exports = router; 