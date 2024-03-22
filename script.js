document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("btnStart");
    const cars = document.querySelectorAll('.cars img');
    const trackWidth = document.querySelector('.track').offsetWidth;
    let winnerDeclared = false; 
    let saldo = 100;


    function atualizarSaldo() {
        document.getElementById("saldo").textContent = saldo.toFixed(2);
    }

    function reset() {
        cars.forEach(car => {
            car.style.transform = 'translateX(0)';
        });
    }

    startButton.addEventListener("click", function() {
        if (winnerDeclared) {
            winnerDeclared = false;
            return; 
        }

        const aposta = parseFloat(document.getElementById("aposta").value);
        const carroSelecionado = document.getElementById("carro").value;
        
      
        if (isNaN(aposta) || aposta <= 0 || aposta > saldo) {
            alert('Aposta inválida!');
            return;
        }

        cars.forEach(car => {
            let position = 0; 
            const interval = setInterval(() => {
                if (winnerDeclared) { 
                    clearInterval(interval);
                    return;
                }

                let speed = Math.random() * 5 + 1;
                position += speed;
                car.style.transform = `translateX(${position}px)`;
                
        
                if (position >= trackWidth - 290) {
                    clearInterval(interval);
                    const vencedor = car.id;
                    alert(`O vencedor é o ${vencedor}`);
                    winnerDeclared = true;
                    
            
                    if (vencedor === carroSelecionado) {
                        saldo += aposta;
                    } else {
                        saldo -= aposta;
                    }
                    atualizarSaldo();
                    reset();
                }
            }, 20);
        });
    });

    atualizarSaldo();
});
