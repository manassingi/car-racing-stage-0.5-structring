class Form{

constructor(){



}

display(){

    var title= createElement("h2")
    title.html("Car Racing Game")
    title.position(130,0)
    var input= createInput("name")
    var button= createButton("summit")
    var greeting=createElement("h4")
    input.position(130,60)
    button.position(130,90)
button.mousePressed(function(){
    input.hide()
    button.hide()
    var name = input.value()
    playerCount+=1;
    player.update(name)
    player.update(playerCount)
    greeting.html("Hello "+ name)
    greeting.position(200,200)
}

)
}

}