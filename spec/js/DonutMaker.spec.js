let underTest;
describe("FEATURE 1 - 1 : Have a way to count donuts.", () => {
  describe("Can add to donut count:", () => {
    let underTest;
    beforeEach(() => {
      underTest = new DonutMaker();
    });
    it(" 1. Should start with a click count of 0.", () => {
      expect(underTest._donutCount).toBe(0);
    });
    it("2. Should add one click to the click count when it records a click", () => {
      underTest.recordClick();
      
    });
    it("3. Should have a click count of 2 when it records 2 clicks", () => {
      underTest.recordClick();
      underTest.recordClick();
      expect(underTest._donutCount).toBe(2);
    });
  });
});
describe("FEATURE 2 - 2 : Be able to purchase the first Auto Clicker with 100 donuts from your donut count.", () => {
  beforeEach(() => {
    underTest = new DonutMaker();
  });
  it("1. Can retrieve an and add to Auto Click Count", () => {
    underTest.recordAutoClick();
    expect(underTest.autoClickCount).toBe(1);
  });
  it("2. Can compile total number of donuts", () => {
    underTest.recordClick();
    underTest.recordAutoClick();
    expect(underTest._donutCount).toBe(2);
  });
});
describe("3 - 3 FEATURE : The cost of each auto clicker will go up with each purchase", () => {
  beforeEach(() => {
    underTest = new DonutMaker();
    underTest.stashDonutsForTesting();
  });

  it(" 1.Feature : can count how many auto clickers purchased", () => {
    underTest.buyAutoClicker();
    underTest.buyAutoClicker();
    underTest.buyAutoClicker();
    underTest.buyAutoClicker();
    underTest.buyAutoClicker();
    underTest.buyAutoClicker();
    expect(underTest.autoClickersPurchased).toBe(6);
  });

  it("2. Increase the cost of the second Auto Clicker by 10 percent.", () => {
    underTest.buyAutoClicker();
    underTest.buyAutoClicker();
    expect(underTest.autoClickerCost).toBe(110);
  });
  it("3. Increase the cost of every extra Auto Clicker by 10 percent each.", () => {
    underTest.buyAutoClicker();
    underTest.buyAutoClicker();
    underTest.buyAutoClicker();
    expect(underTest.autoClickerCost).toBe(121);
  });

  });
});
