let underTest;
describe('FEATURE : Have a way to count donuts.', () => {
    describe('Can add to donut count:', () => {
        let underTest;
        beforeEach(() => {
            underTest = new DonutMaker;
        });
        it(' Should start with a click count of 0.', () => {
            expect(underTest.clickCount).toBe(0);
        });
        it('Should add one click to the click count when it records a click', () => {
            underTest.recordClick();
            // expect(underTest.clickCount).toBe(1);
        });
        it('Should have a click count of 2 when it records 2 clicks', () => {
            underTest.recordClick();
            underTest.recordClick();
            expect(underTest.clickCount).toBe(2);
        });
    });
});
describe('FEATURE : Be able to purchase the first Auto Clicker with 100 donuts from your donut count.', () => {
    beforeEach(() =>{
        underTest = new DonutMaker;
    });
    it('Can retrieve an and add to Auto Click Count', () =>{
        underTest.recordAutoClick();
        expect(underTest.autoClickCount).toBe(1);
    });
    it('Can compile total number of donuts', () =>{
        underTest.recordClick();
        underTest.recordAutoClick();
        expect(underTest.totalDonutCount).toBe(2);
    })
});
describe('FEATURE : The cost of each auto clicker will go up with each purches', () => {
    beforeEach(() =>{
        underTest = new DonutMaker;
    })
})


