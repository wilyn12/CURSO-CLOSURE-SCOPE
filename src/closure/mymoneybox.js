/* function moneyBox(coins){
    let savecoins = 0;
    savecoins += coins;
    console.log(`MoneyBox: ${savecoins}`)
}

moneyBox(5);
moneyBox(3); */


function myMoneyBox(){
    let saveCoins = 0;

    function countCoins(coins){
        saveCoins += coins
        console.log(`MoneyBox : ${saveCoins}`)
    }
    return countCoins;
}

const MoneyBox = myMoneyBox();

MoneyBox(5);
MoneyBox(3);
MoneyBox(15);

const moneyBoxAna = myMoneyBox();

moneyBoxAna(10);
moneyBoxAna(15);
moneyBoxAna(20);



export function createPetList(){
    const pets = [];

    function newPets(animals){
        if(arguments.length === 0){
            return pets;
        }
        pets.push(animals);
        
    }
    return newPets;
}

const myPetlist = petData();

myPetlist('rabbit');
myPetlist('bird');
myPetlist('snake');
console.log(myPetlist());