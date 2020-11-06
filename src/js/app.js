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

const displayAutoClickerCount = function(donut) {
    const autoClickerCountText = document.querySelector(".auto-clicker-count");
    autoClickerCountText.innerText = donut.autoClickCount;
}

const purchaseAutoClicker = document.querySelector(".auto-button");
purchaseAutoClicker.addEventListener("click", () => {
    userDonut.purchaseAutoClicker();
    updateDonutCount(userDonut);
    displayAutoClickerCount(userDonut)
    displayAutoClickerCost(userDonut);
});