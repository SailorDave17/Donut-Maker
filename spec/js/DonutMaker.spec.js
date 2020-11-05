let underTest;

describe("FEATURE 1.1 - Have a way to count donuts.", () => {
    describe("Can add to donut count (1) and retrieve count (2)", () => {
        beforeEach(() => {
            underTest = new DonutMaker();
        });

        it("1. Start with a click count of 0.", () => {
            expect(underTest._donutCount).toBe(0);
        });
        it("2. Add to click count.", () => {
            underTest.recordClick();
            expect(underTest._donutCount).toBe(1);
        });
        it("3. Add one click to the click count when it records a click.", () => {
            underTest.recordClick();
            underTest.recordClick();
            expect(underTest._donutCount).toBe(2);
        });
    });
});

describe("FEATURE 1.2 - Be able to purchase the first Auto Clicker with 100 donuts from your donut count.", () => {
    beforeEach(() => {
        underTest = new DonutMaker();
        underTest.oneAutoClickerToTest();
    });
    it("1. Can retrieve an and add to Auto Clicker Count", () => {

        underTest.recordAutoClick();
        expect(underTest._donutCount).toBe(1);
    });
    it("2. Can compile total number of donuts", () => {
        underTest.recordClick();
        underTest.recordAutoClick();
        expect(underTest._donutCount).toBe(2);
    });
    it("3. Subtract the Auto Clicker cost from your donut count.", () => {
        underTest = new DonutMaker();
        underTest.stashDonutsforTesting();
        underTest.buyAutoClicker();
        expect(underTest._donutCount).toBe(900);
    });
});

describe("Feature 1.3 - The cost of each Auto Clicker will go up with each purchase.", () => {
    beforeEach(() => {
        underTest = new DonutMaker();
        underTest.stashDonutsforTesting();
    });
    it("1. Can count the number of Auto-Clickers purchased", () => {
        underTest.buyAutoClicker();
        underTest.buyAutoClicker();
        underTest.buyAutoClicker();
        underTest.buyAutoClicker();
        expect(underTest.autoClickersPurchased).toBe(4);
    });
    it("2. Increase the cost of the second Auto Clicker by an additional ten percent.", () => {
        underTest.buyAutoClicker();
        underTest.buyAutoClicker();
        expect(underTest.autoClickerCost).toBe(110);
    });
    it("3. Increase the cost of every additional Auto Clicker by an additional ten percent.", () => {
        underTest.buyAutoClicker();
        underTest.buyAutoClicker();
        underTest.buyAutoClicker();
        expect(underTest.autoClickerCost).toBe(121);
    });
    describe("The Correct amount of donuts are subtracted per Auto-Clicker Purchase", () => {
        it("4. Subtract the Auto Clicker cost from your donut count.", () => {
            underTest.buyAutoClicker(); // ------> Subtracting 100
            underTest.buyAutoClicker(); // ------->Subtracting 100
            expect(underTest._donutCount).toBe(790);
        });
        it("4. Subtract the Auto Clicker cost from your donut count.", () => {
            underTest.buyAutoClicker(); // ------> Subtracting 100
            underTest.buyAutoClicker(); // -------> Subtracting 100
            underTest.buyAutoClicker(); // -------->Subtracting 110
            expect(underTest._donutCount).toBe(669); //690
        });
    });
});

describe("Feature 1.4 - Ensure that there are enough clicks to buy a Auto Clicker.", () => {
    beforeEach(() => {
        underTest = new DonutMaker();
    });
    it("1. Prevent purchase of Auto Clicker counter if there are not enough donuts to purchase.", () => {
        underTest.buyAutoClicker();
        expect(underTest.autoClickersPurchased).toBe(0);
    });
});

describe("Feature 1.5 - Ensure that there are enough clicks to buy a Auto Clicker.", () => {
    beforeEach(() => {
        underTest = new DonutMaker();
        underTest.stashDonutsforTesting();
    });
    it("1. The amount of Auto Clickers affect the amount of donuts added when an * Activate Auto Clickers * event is called.", () => {
        underTest.buyAutoClicker();
        underTest.activateAutoClickers();
        expect(underTest._donutCount).toBe(901);
    });
});

// Iteration II ----------------------------------------------------------------------------------------------------

describe("Feature 2.1 - Be able to purchase the first Donut Multiplier with 10 clicks from your click count.", () => {
    beforeEach(() => {
        underTest = new DonutMaker();
        underTest.stashDonutsforTesting();
    });
    it("1. Can add to the Donut Multiplier count, Can retrieve a Donut Multiplier count.", () => {
        underTest.buyDonutMultiplier();
        expect(underTest._donutMultiplierCount).toBe(1);
    });

    it("2. Subtract the amount of the Donut Multiplier cost from the donut count.", () => {
        underTest.buyDonutMultiplier();
        expect(underTest._donutCount).toBe(990);
    });
});
describe("Feature 2.2 - The cost of each Donut Multiplier will go up with each purchase.", () => {
    beforeEach(() => {
        underTest = new DonutMaker();
        underTest.stashDonutsforTesting();
    });
    it("1. Increase the cost of the second Donut Multiplier by an additional ten percent. ", () => {
        underTest.buyDonutMultiplier();
        underTest.buyDonutMultiplier();
        expect(underTest._donutMultiplierCost).toBeCloseTo(12.1)
    });
    it("2. Increase the cost of every additional Donut Multiplier by an additional ten percent.", () => {
        underTest.buyDonutMultiplier();
        underTest.buyDonutMultiplier();
        underTest.buyDonutMultiplier();
        expect(underTest._donutMultiplierCost).toBeCloseTo(13.31)
    })
    it("3. Increase the cost of every additional Donut Multiplier by an additional ten percent.", () => {
        underTest.buyDonutMultiplier();
        underTest.buyDonutMultiplier();
        underTest.buyDonutMultiplier();
        underTest.buyDonutMultiplier();
        underTest.buyDonutMultiplier();
        underTest.buyDonutMultiplier();
        expect(underTest._donutMultiplierCost).toBeCloseTo(17.71561)
    });
});

describe("FEATURE 2.3 - Ensure that there are enough donuts to buy a Donut Multiplier", () => {
    beforeEach(() => {
        underTest = new DonutMaker();
    });
    it("Prevent the Donut Multiplier count from going up if there are not enough donuts to purchase a Donut Multiplier", () => {
        underTest.buyDonutMultiplier();
        expect(underTest._donutMultiplierCount).toBe(0);
    });
});

describe("FEATURE 2.4 - The first Donut Multiplier should increase the value of a click 1.2x", () => {
    beforeEach(() => {
        underTest = new DonutMaker();
        underTest.stashDonutsforTesting();

    });
    it("1. Increases the amount of donuts added to the donut count by multiplying by 1.2 after the first Donut Multiplier is purchased", () => {
        underTest.buyDonutMultiplier();
        underTest.recordClick();
        expect(underTest._donutMultiplierCount).toBe(1);
        expect(underTest._donutCount).toBe(991.2);
    });
});

describe("FEATURE 2.5 - The amount the subsequent Donut Multipliers click bonus will go up exponentially", () => {
    beforeEach(() => {
        underTest = new DonutMaker();
        underTest.stashDonutsforTesting();
    });
    it("1. Increase the click value multiplier to 1.2 to the xth power, where _x_ is the amount of the Donut Multipliers count", () => {
        underTest.buyDonutMultiplier();
        underTest.buyDonutMultiplier();
        underTest.recordClick();
        expect(underTest._donutCount).toBe(980.44);
    });
    it("2. Increase the click value multiplier to 1.2 to the xth power, where _x_ is the amount of the Donut Multipliers count", () => {
        underTest.buyDonutMultiplier();
        underTest.buyDonutMultiplier();
        underTest.buyDonutMultiplier();
        underTest.recordClick();
        expect(underTest._donutCount).toBeCloseTo(968.625)
    });
});
describe("FEATURE 2.6 - The Donut Multipliers click bonus will apply to clicks from the Auto Clicker", () => {
    beforeEach(() => {
        underTest = new DonutMaker();
        underTest.stashDonutsforTesting();
    });
    it("1. When an 'Add Auto Clickers' event is executed, increase the value of each Auto Clicker by the amount of the Donut Multiplier", () => {
        underTest.buyDonutMultiplier();
        underTest.buyDonutMultiplier();
        underTest.recordAutoClick();
        expect(underTest._donutCount).toBeCloseTo(979)
    });


});