class Game{
    constructor(){
        
    }

    // read the gameState from database
    getState(){
        database.ref("gameState").on("value", function(data){
            gameState = data.val()
        })  
    }

    // write the gameState in database
    setState(state){
        database.ref("/").update({
            gameState: state
        })
    }

    start(){
        if(gameState === 0){
            player = new Player()
            player.getCount()
            form = new Form()
            form.display()
        }
    }

    play(){
        form.removeForm()
        text("PLAYER SCREEN", 135,50)
        
    }
    
}