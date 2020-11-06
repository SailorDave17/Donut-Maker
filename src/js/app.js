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

const purchaseAutoClicker = document.querySelector(".auto-button");
purchaseAutoClicker.addEventListener("click", () => {
    userDonut.purchaseAutoClicker();
    updateDonutCount(userDonut);
    displayNumberOfAutoClickers(userDonut)
    displayAutoClickerCost(userDonut);
});

const displayAutoClickerCost = function(donut) {
    const autoClickerCostText = document.querySelector(".auto-clicker-cost");
    autoClickerCostText.innerText = "Cost: " + donut.autoClickerCost + " Donuts";
}

const displayMultiplierCount = function(donut) {
    const multiplierCountText = document.querySelector(".multiplier-count");
    multiplierCountText.innerText = donut.multiplierCount;
}

const purchaseMultiplier = document.querySelector(".multiplier-button");
purchaseMultiplier.addEventListener("click", () => {
    userDonut.purchaseMultiplier();
    updateDonutCount(userDonut);
    displayMultiplierCount(userDonut);
    displayMultiplierCost(userDonut);
    displayClickValue(userDonut);
});

const displayMultiplierCost = function(donut) {
    const MultiplierCostText = document.querySelector(".multiplier-cost");
    MultiplierCostText.innerText = "Cost: " + Math.round(donut.multiplierCost) + " Donuts";
}

