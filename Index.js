let startButton = document.getElementById("btnStart")

startButton.addEventListener("click", function() {
    startRace(); // Chama a função startRace() quando o botão é clicado
});

function startRace(){
    console.log("Deu")
    let position = 0; 
    const speed = Math.random() * 5 + 1;
    const interval = setInterval(() => {
        position += speed;
        car1.style.left
    }
    )
    

}