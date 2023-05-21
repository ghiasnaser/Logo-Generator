const square=require('../lib/square');

describe('square',()=>{
    describe('render function',()=>{
        it('should render the blue square like the foloowing way',()=>{
            const shape=new square();
            shape.color='blue';
            expect(shape.render()).toContain(`<rect x="50" y="50" width="150" height="150" fill="blue" />`)
        })
    })
});