class DonutMaker {
    constructor(){
        this._clickCount = 0;
        this._autoClickCount = 0;
        this._totalDonutCount = 0;
    }
    recordClick(){
        this._clickCount++;
    }
    get clickCount(){
        return this._clickCount;
    }
    recordAutoClick(){
        this._autoClickCount++;
    }
    get autoClickCount() {
        return this._autoClickCount
    }
    get totalDonutCount(){
        this._totalDonutCount = this._clickCount + this._autoClickCount;
        return this._totalDonutCount;
    }
    buyAutoClicker(){
        this._donutCount -=100
    }
}