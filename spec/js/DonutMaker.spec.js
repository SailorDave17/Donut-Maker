let underTest;

describe('FEATURE 1: Can Count Donuts.', () => {
    describe('Can add to donut count (1) and retrieve count (2)', () => {
        beforeEach(() => {
            underTest = new DonutMaker;
        });

        it('0. Start with a click count of 0.', () => {
            expect(underTest._donutCount).toBe(0);
        });
        it('1. Add to click count.', () => {
            underTest.recordClick();
            expect(underTest._donutCount).toBe(1);
        });
        it('2. Add one click to the click count when it records a click.', () => {
            underTest.recordClick();
            underTest.recordClick();
            expect(underTest._donutCount).toBe(2);
        });
    });
});



describe('FEATURE 2: Be able to purchase Auto Clicker with 100 donuts.', () => {
    beforeEach(() => {
        underTest = new DonutMaker;
    })
    it('1. Can retrieve an and add to Auto Clicker Count', () => {
        underTest.recordAutoClick();
        expect(underTest._donutCount).toBe(1);
    })
    it('2. Can compile total number of donuts', () => {
        underTest.recordClick();
        underTest.recordAutoClick();
        expect(underTest._donutCount).toBe(2);
    })
    it('3. Subtract the Auto Clicker cost from your donut count.', () => {
        underTest.stashDonutsforTesting();
        underTest.buyAutoClicker();
        expect(underTest._donutCount).toBe(900);
    })
});


describe('Feature 3: The cost of each Auto Clicker will go up with each purchase.', () => {
    beforeEach(() => {
        underTest = new DonutMaker;
        underTest.stashDonutsforTesting();
    })
    it('1. Can count the number of Auto-Clickers purchased', () => {
        underTest.buyAutoClicker();
        underTest.buyAutoClicker();
        underTest.buyAutoClicker();
        underTest.buyAutoClicker();
        expect(underTest.autoClickersPurchased).toBe(4);
    })
    it('2. Increase the cost of the second Auto Clicker by an additional ten percent.', () => {
        underTest.buyAutoClicker();
        underTest.buyAutoClicker();
        expect(underTest.autoClickerCost).toBe(110);
    })
    it('3. Increase the cost of every additional Auto Clicker by an additional ten percent.', () => {
        underTest.buyAutoClicker();
        underTest.buyAutoClicker();
        underTest.buyAutoClicker();
        expect(underTest.autoClickerCost).toBe(121);
    })
    describe('The Correct amount of donuts are subtracted per Auto-Clicker Purchase', () => {
        it('3. Subtract the Auto Clicker cost from your donut count.', () => {
            underTest.buyAutoClicker(); // ------> Subtracting 100
            underTest.buyAutoClicker(); // ------->Subtracting 100
            expect(underTest._donutCount).toBe(790);
        })
        it('3. Subtract the Auto Clicker cost from your donut count.', () => {
            underTest.buyAutoClicker(); // ------> Subtracting 100
            underTest.buyAutoClicker(); // -------> Subtracting 100
            underTest.buyAutoClicker(); // -------->Subtracting 110
            expect(underTest._donutCount).toBe(669); //690
        })

    })
});

describe('Feature 4: Ensure that there are enough clicks to buy a Auto Clicker.', () => {
    beforeEach(() => {
        underTest = new DonutMaker;
    })
    it('Prevent purchase of Auto Clicker counter if there are not enough donuts to purchase.', () => {
        underTest.buyAutoClicker();
        expect(underTest.autoClickersPurchased).toBe(0);
    })
});

describe('Feature 5: Ensure that there are enough clicks to buy a Auto Clicker.', () => {
    beforeEach(() => {
        underTest = new DonutMaker;
    })
    it('The amount of Auto Clickers affect the amount of donuts added when an * Activate Auto Clickers * event is called.', () => {
        underTest.stashDonutsforTesting();
        underTest.buyAutoClicker();
        underTest.activateAutoClickers();
        expect(underTest._donutCount).toBe(901)
    })
});