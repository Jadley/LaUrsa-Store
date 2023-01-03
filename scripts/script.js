// CARROSSEL
const controls = document.querySelectorAll('.control');

let currentItem = 0;

const itens = document.querySelectorAll('.item');

const maxItens = itens.length;

controls.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft =
        control.classList.contains('arrow-left');

        if(isLeft){
            currentItem -= 1;
        } else {
            currentItem += 1;
        }

        if(currentItem >= maxItens) {
            currentItem = 0
        }
        if(currentItem < 0) {
            currentItem = maxItens - 1
        }

        itens[currentItem].scrollIntoView({
            block:"nearest",
        behavior: "smooth",
        })
        console.log('control', isLeft, currentItem)
    })
})