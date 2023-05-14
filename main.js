const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const button = document.querySelector('.button');
const scoreElement = document.querySelector('.score');
const info = document.querySelector('.info');

const jump = () => {
    mario.classList.add('jump');
    info.classList.add('hidden');
    setTimeout(()=>{
        mario.classList.remove('jump');
    }, 500);
}
let pontos = 0 

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    const cloudsPotition = clouds.offsetLeft;
    
     if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './assets/img/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clouds.style.animation = 'none'
        clouds.style.left = `${cloudsPotition}px`

        button.classList.remove('hidden')

        clearInterval(loop);
    } else if (pipePosition <= 0) {
        // Atualiza a pontuação quando o Mario passa por um cano
        pontos++;
        scoreElement.textContent = `Pontos: ${pontos}`;
      }

}, 10);

document.addEventListener('keydown', jump);