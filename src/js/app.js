import {
    DonutMaker
} from "/src/js/DonutMaker.js ";

const userDonut = new DonutMaker();

setInterval(function(){
    newDonutMaker.activateAutoClickers();
    updatePlayerInfo(userDonut)
    },1000);

    const updateDonutCount = function(donut) {
        const donutCount = document.querySelector(".donut-count");
        donutCount.innerText = "Count: " + Math.round(donut.clickCount);
    };

    const donutButton = document.querySelector(".donut-button");
donutButton.addEventListener("click", () => {
    console.log('Donut Button Clicked')
    userDonut.recordClick();
    updateDonutCount(userDonut);

});

const displayClickValue = function(donut) {
    const clickValue = document.querySelector(".click-value");
    clickValue.innerText = "Donuts Per Click: " + Math.round(donut.multiplierValue * 10) / 10;

}

const displayNumberOfAutoClickers = function(donut) {
    const numberOfAutoClickersText = document.querySelector(".auto-clicker-count");
    numberOfAutoClickersText.innerText = donut.autoClickCount;
}

const buyAutoClicker = document.querySelector(".auto-button");
buyAutoClicker.addEventListener("click", () => {
    userDonut.buyAutoClicker();
    updateDonutCount(userDonut);
    displayNumberOfAutoClickers(userDonut)
    displayAutoClickerCost(userDonut);
});

const displayAutoClickerCost = function(donut) {
    const autoClickerCostText = document.querySelector(".auto-clicker-cost");
    autoClickerCostText.innerText = "Cost: " + donut.autoClickerCost + " Donuts";
}

const displayDonutMultiplierCount = function(donut) {
    const DonutMultiplierCountText = document.querySelector(".multiplier-count");
    DonutMultiplierCountText.innerText = donut.DonutMultiplierCount;
}

const buyDonutMultiplier = document.querySelector(".multiplier-button");
buyDonutMultiplier.addEventListener("click", () => {
    userDonut.buyDonutMultiplier();
    updateDonutCount(userDonut);
    displayDonutMultiplierCount(userDonut);
    displayMultiplierCost(userDonut);
    displayClickValue(userDonut);
});

const displayMultiplierCost = function(donut) {
    const MultiplierCostText = document.querySelector(".multiplier-cost");
    MultiplierCostText.innerText = "Cost: " + Math.round(donut.multiplierCost) + " Donuts";
}

