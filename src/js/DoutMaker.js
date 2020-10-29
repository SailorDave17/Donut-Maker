describe('FEATURE : Have a way to count donuts. ' , () =>{
    describe('Can add to donut count', () => 
    let underTest;

    beforeEach(() => {
        underTest = new DonutMaker;
    });

    it('SHould start with a click count of 0.' , () => {
        expect(underTest._clickCount).toBe(0);

    });

    

}