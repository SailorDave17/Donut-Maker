class DonutMaker {
  constructor() {
    this._donutCount = 0;
    this._numberOfAutoClickers = 0;
    this._autoClickerCost = 100;
    this._donutMultiplierCount = 0;
    this._donutMultiplierCost = 10;
  }

  stashDonutsForTesting() {
    //Abbys Idea for Tests
    this._donutCount += 1000;
  }

  oneAutoClickerToTest() {
    this._numberOfAutoClickers += 1;
  }

  recordClick() {
    if (this.donutMultiplierCount > 0) {
      this._donutCount += Math.pow(1.2, this._donutMultiplierCount);
    } else {
      this._donutCount++;
    }
  }
  get clickCount() {
    return this._donutCount;
  }
  recordAutoClick() {
    var i = 0;
    while (i < this._numberOfAutoClickers) {
      this._donutCount += Math.pow(1.2, this._donutMultiplierCount);
      i++;
    }
  }
  get autoClickCount() {
    return this._donutCount;
  }

  get autoClickerCost() {
    let unRoundedCost = 100 * Math.pow(1.1, this._numberOfAutoClickers - 1);
    this._autoClickerCost = Math.round(unRoundedCost);
    return this._autoClickerCost;
  }

  buyAutoClicker() {
    if (this.autoClickersPurchased == 0) {
      if (this._donutCount >= 100) {
        this._numberOfAutoClickers++;
        this._donutCount -= 100;
      } else {
      }
    } else {
      if (this._donutCount >= this.autoClickerCost) {
        this._numberOfAutoClickers++;
        this._donutCount -= this.autoClickerCost;
      } else {
      }
    }
  }

  get autoClickersPurchased() {
    return this._numberOfAutoClickers;
  }

  activateAutoClickers() {
    var i = 0;
    while (i < this._numberOfAutoClickers) {
      this._donutCount++;
      i++;
    }
  }

  buyDonutMultiplier() {
    if (this._donutCount >= this._donutMultiplierCost) {
      this._donutMultiplierCount++;
      this._donutCount -= this._donutMultiplierCost;
      this._donutMultiplierCost =
        this._donutMultiplierCost + this._donutMultiplierCost * 0.1;
    }
  }
  get donutMultiplierCount() {
    return this._donutMultiplierCount;
  }
  get donutMultiplierCost() {
    return this._donutMultiplierCost;
  }
}
