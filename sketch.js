var database;
var gameState = 0;
var player, playerCount, form, game;
var allPlayers
function setup(){
    createCanvas(500,500);
    // creating database
    database = firebase.database()
    game = new Game()
    game.getState()
    game.start()
    }

function draw(){
    if(playerCount === 4){
        game.setState(1)
    }
    if(gameState === 1){
        game.play()
    }
    }