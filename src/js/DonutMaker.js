class DonutMaker {


constructor() {
  this._donutCount = 0; 
  this._autoClickerCount = 0;
  this._autoClickerCost = 100;
  this._donutMultiplierCount = 0;
  this._donutMultiplierCost = 10;
  }


stashDonutsForTesting() {
  this._donutCount += 1000;
}
recordClick() {
  this._donutCount = this._donutCount + Math.pow(1.2, this._donutMultiplierCount);
}
get donutCount() {
      return this._donutCount;
  }



buyAutoClicker() {
      if (this._donutCount >= this._autoClickerCost) {
          this._donutCount -= this._autoClickerCost;
          this._autoClickerCount++;
          this._autoClickerCost = this._autoClickerCost + (this._autoClickerCost * 0.1);
          this._autoClickerCost = Math.round(this._autoClickerCost);
      }
  }
  
get autoClickerCount() {
  return this._autoClickerCount;
}
get autoClickerCost() {
  return this._autoClickerCost;
}
activateAutoClickers() {
  if (this.donutMultiplierCount >= 1) {
      this._donutCount += Math.pow(1.2, this._donutMultiplierCount) * this._autoClickerCount;
  } else {
      this._donutCount += this._autoClickerCount;
  }
}



buyDonutMultiplier() {
  if (this.donutCount >= this._donutMultiplierCost) {
      this._donutMultiplierCount++;
      this._donutCount -= this._donutMultiplierCost;
      this._donutMultiplierCost = this._donutMultiplierCost + (this._donutMultiplierCost * 0.1);

  }
}
get donutMultiplierCount() {
  return this._donutMultiplierCount;
}
get donutMultiplierCost() {
  return this._donutMultiplierCost;
}


resetGame() {
  this._donutCount = 0;
  this._autoClickerCount = 0;
  this._autoClickerCost = 100;
  this._donutMultiplierCount = 0;
  this._donutMultiplierCost = 10;
}
}


export{DonutMaker};