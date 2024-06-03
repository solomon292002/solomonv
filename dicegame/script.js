function startgame(){
    var player1=(Math.floor(Math.random() * 6 + 1))
    var player2=(Math.floor(Math.random() * 6 + 1))

    var elem = document.querySelectorAll('img')
    elem[0].setAttribute("src",`/assets/dice${player1}.jpg`)
    elem[1].setAttribute("src", `/assets/dice${player2}.jpg`)

    var result=document.getElementById("result")

    if(player1>player2){
        result.innerHTML="player 1 won"
    }
    else if(player1<player2){
        result.innerHTML="player 2 won"
    }
    else{
        result.innerHTML="draw"

    }
}