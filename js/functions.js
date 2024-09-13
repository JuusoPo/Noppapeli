const dice_image = document.getElementById("dice") //hakee img-elementin

const RollDice = (min, max) => {
    return Math.floor(Math.random() * max) + min
}; // Funktio arpoo nopan noppaluvun

const changeImage = (dice_number) => { // Funktio joka muuttaa kuvan noppaluvun perusteella
    switch(dice_number) {
        case 1:
            dice_image.src = "./pics/dice1.png"
            break
        case 2:
            dice_image.src = "./pics/dice2.png"
            break
        case 3:
            dice_image.src = "./pics/dice3.png"
            break
        case 4:
            dice_image.src = "./pics/dice4.png"
            break
        case 5:
            dice_image.src = "./pics/dice5.png"
            break
        case 6:
            dice_image.src = "./pics/dice6.png"
            break
    }
};// vaihtaa halutun kuvan

dice_image.addEventListener('click', () => {
    const dice_number = RollDice(1, 6); // Arpoo nopan noppaluvun 1-6 välille
    changeImage(dice_number); // Vaihtaa kuvan noppaluvun perusteella
})
