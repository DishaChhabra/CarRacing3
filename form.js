class Form{
    constructor(){
        this.title = createElement("h1")
        this.input = createInput("Enter your name here")
        this.button = createButton("PLAY")
        this.greeting = createElement("h2")  
    }

    display(){
        //DOM library
        this.title.html("CAR RACING")
        this.title.position(135,0)
        this.input.position(145,160)
        this.button.position(200,190)
        this.button.mousePressed(() => {
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            playerCount++
            player.index = playerCount;
            player.setInfo()   
            player.setCount(playerCount)  
        this.greeting.html("Welcome " + player.name)
        this.greeting.position(145,160)
        })
    }
    removeForm(){
        this.input.hide()
        this.button.hide()
        this.title.hide()
        this.greeting.hide()
    }
}