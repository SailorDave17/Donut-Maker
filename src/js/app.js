import {
    DonutMaker
} from "/src/js/DonutMaker.js ";

const donutMaker = new DonutMaker();



//     const updateDonutCount = function(donutMaker) {
//         const donutCount = document.querySelector(".donut-count");
//         donutCount.innerText =  Math.round(donutMaker.donutCount * 10)/10
//         updateDonutMultiplierButton(donutMaker);
//         updateAutoClickerButton(donutMaker);

//     };

//     const donutButton = document.querySelector(".donut-button");
// donutButton.addEventListener("click", () => {
//     // console.log('Donut Button Clicked')
//     donutMaker.recordClick();
//     updateDonutCount(donutMaker);

// });

// const updateAutoClickerCount = function(donutMaker) {
//     const autoClikcerCount = document.querySelector(".auto-clicker-count");
//     autoCLickerCount.innerText = donutMaker.autoCLickerCount;

// };

// const purchaseAutoClickerButton = document.querySelector(".purchase-auto-clicker-button");
//     purchaseAutoClickerButton.addEventListener("click", () => {
//     donutMaker.buyAutoClicker();
//     updateNumberOfAutoClickers(donutMaker);
//     updateDonutCount(donutMaker);
//     // displayNumberOfAutoClickers(userDonut)
//     displayAutoClickerCost(donutMaker);
// });

// const displayAutoClickerCost = function(donutMaker) {
//     const autoClickerCost = document.querySelector(".auto-clicker-cost");
//     autoClickerCost.innerText = "Cost: " + donutMaker.autoClickerCost + " Donuts";
// }

// function updateAutoClickerButton(donutMaker){
//     const lightUpPurchaseAutoClickerButton = document.querySelector(".buy-auto-button"); //.purchase-auto-clicker-button
//     lightUpPurchaseAutoClickerButton.classList.add('grey-out-auto-clicker-button');
//     if(donutMaker.donutCount < donutMaker.autoClickerCost){
//         lightUpPurchaseAutoClickerButton.classList.toggle('grey-out-auto-clicker-button');
//     }
// };

// const updateDonutMultiplierCount = function(donutMaker) {
//     const donutMultiplierCount = document.querySelector(".multiplier-count"); //.donut-multiplier-count
//     donutMultiplierCount.innerText = donutMaker.donutMultiplierCount;
// }

// const purchaseDonutMultiplierButton = document.querySelector(".multiplier-button"); //.purchase-donut-multiplier-button
// purchaseDonutMultiplierButton.addEventListener("click", () => {
//     donutMaker.buyDonutMultiplier();
//     updateDonutCount(donutMaker);
//     updateDonutMultiplierCount(donutMaker);
//     displayDonutMultiplierCost(donutMaker);
//     // displayClickValue(donutMaker);
// });

// const displayDonutMultiplierCost = function(donutMaker) {
//     const displayDonutMultiplierCost = document.querySelector(".multiplier-cost"); //.donut-multiplier-cost
//     donutMultiplierCost.innerText = "Cost: " + Math.round(donutMaker.donutMultiplierCost * 10) / 10 + " Donuts";
// }

// function updateDonutMultiplierButton(donutMaker) {
//     const lightUpPurchaseDonutMultiplierButton = document.querySelector(".purchase-donut-multiplier-button")//semicolon
//     lightUpPurchaseDonutMultiplierButton.classList.add('gray-out-donut-multiplier-button');
//     if (donutMaker.donutCount < donutMaker.donutMultiplierCost) {
//         lightUpPurchaseDonutMultiplierButton.classList.toggle('gray-out-donut-multiplier-button');
//     }
// }
// //Modal
// const developerInfoButton = document.querySelector('.developer-button');
// const modal = document.querySelector('.modal');
// const backdrop = document.querySelector('.backdrop');

// function closeModal() {
//     modal.style.display = 'none';
//     backdrop.style.display = 'none';
// }

// developerInfoButton.addEventListener("click", function () {
//     modal.style.display = 'block';
//     backdrop.style.display = 'block';
// });

// const exitButton = document.querySelector(".exit-button");
// exitButton.addEventListener('click', closeModal);
// backdrop.addEventListener('click', closeModal);

// //Modal2
// const aboutUsButton = document.querySelector('.about-us-button');
// const modal2 = document.querySelector('.modal2');
// const backdrop2 = document.querySelector('.backdrop2');


// function closeModal2() {
//     modal2.style.display = 'none';
//     backdrop2.style.display = 'none';
// }

// aboutUsButton.addEventListener("click", function () {
//     modal2.style.display = 'block';
//     backdrop2.style.display = 'block';
// });

// const exitButton2 = document.querySelector(".exit-button2");
// exitButton2.addEventListener('click', closeModal2);
// backdrop2.addEventListener('click', closeModal2);


// //Reset Button
// const activateResetGame = document.querySelector(".reset-game");
// activateResetGame.addEventListener("click", () => {
//     donutMaker.resetGame();
//     updateAutoClickerCount(donutMaker);
//     updateDonutCount(donutMaker);
//     displayAutoClickerCost(donutMaker);
//     updateDonutMultiplierCount(donutMaker);
//     updateDonutCount(donutMaker);
//     displayDonutMultiplierCost(donutMaker);
// });

const updateDonutCount = function (donutMaker) {
    const donutCount = document.querySelector(".donut-count");
    donutCount.innerText = Math.round(donutMaker.donutCount * 10) / 10
    updateDonutMultiplierButton(donutMaker);
    updateAutoClickerButton(donutMaker);
};

const donutButton = document.querySelector(".donut-button");
donutButton.addEventListener("click", () => {
    donutMaker.recordClick();
    updateDonutCount(donutMaker);
});


//Auto Clickers
const updateAutoClickerCount = function (donutMaker) {
    const autoClickerCount = document.querySelector(".auto-clicker-count");
    autoClickerCount.innerText = donutMaker.autoClickerCount;
};

const purchaseAutoClickerButton = document.querySelector(".purchase-auto-clicker-button");
purchaseAutoClickerButton.addEventListener("click", () => {
    donutMaker.buyAutoClicker();
    updateAutoClickerCount(donutMaker);
    updateDonutCount(donutMaker);
    displayAutoClickerCost(donutMaker);

});
const displayAutoClickerCost = function (donutMaker) {
    const autoClickerCost = document.querySelector(".auto-clicker-cost");
    autoClickerCost.innerText = "Current Auto Clicker Cost:" + donutMaker.autoClickerCost;
};

function updateAutoClickerButton(donutMaker) {
    const lightUpPurchaseAutoClickerButton = document.querySelector(".purchase-auto-clicker-button") //semicolon
    lightUpPurchaseAutoClickerButton.classList.add('gray-out-auto-clicker-button');
    if (donutMaker.donutCount < donutMaker.autoClickerCost) {
        lightUpPurchaseAutoClickerButton.classList.toggle('gray-out-auto-clicker-button');
    }
};


//Donut Multipliers
const updateDonutMultiplierCount = function (donutMaker) {
    const donutMultiplierCount = document.querySelector(".donut-multiplier-count");
    donutMultiplierCount.innerText = donutMaker.donutMultiplierCount;
};

const purchaseDonutMultiplierButton = document.querySelector(".purchase-donut-multiplier-button");
purchaseDonutMultiplierButton.addEventListener("click", () => {

    donutMaker.buyDonutMultiplier();
    updateDonutMultiplierCount(donutMaker);
    updateDonutCount(donutMaker);
    displayDonutMultiplierCost(donutMaker);
});

const displayDonutMultiplierCost = function (donutMaker) {
    const donutMultiplierCost = document.querySelector(".donut-multiplier-cost");
    donutMultiplierCost.innerText = "Current Donut Multiplier Cost:" + Math.round(donutMaker.donutMultiplierCost * 10) / 10;
};

function updateDonutMultiplierButton(donutMaker) {
    const lightUpPurchaseDonutMultiplierButton = document.querySelector(".purchase-donut-multiplier-button")//semicolon
    lightUpPurchaseDonutMultiplierButton.classList.add('gray-out-donut-multiplier-button');
    if (donutMaker.donutCount < donutMaker.donutMultiplierCost) {
        lightUpPurchaseDonutMultiplierButton.classList.toggle('gray-out-donut-multiplier-button');
    }
}
//Modal
const developerInfoButton = document.querySelector('.developer-button');
const modal = document.querySelector('.modal');
const backdrop = document.querySelector('.backdrop');

function closeModal() {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
}

developerInfoButton.addEventListener("click", function () {
    modal.style.display = 'block';
    backdrop.style.display = 'block';
});

const exitButton = document.querySelector(".exit-button");
exitButton.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);

//Modal2
const aboutUsButton = document.querySelector('.about-us-button');
const modal2 = document.querySelector('.modal2');
const backdrop2 = document.querySelector('.backdrop2');


function closeModal2() {
    modal2.style.display = 'none';
    backdrop2.style.display = 'none';
}

aboutUsButton.addEventListener("click", function () {
    modal2.style.display = 'block';
    backdrop2.style.display = 'block';
});

const exitButton2 = document.querySelector(".exit-button2");
exitButton2.addEventListener('click', closeModal2);
backdrop2.addEventListener('click', closeModal2);


//Reset Button
const activateResetGame = document.querySelector(".reset-game");
activateResetGame.addEventListener("click", () => {
    donutMaker.resetGame();
    updateAutoClickerCount(donutMaker);
    updateDonutCount(donutMaker);
    displayAutoClickerCost(donutMaker);
    updateDonutMultiplierCount(donutMaker);
    updateDonutCount(donutMaker);
    displayDonutMultiplierCost(donutMaker);
});













