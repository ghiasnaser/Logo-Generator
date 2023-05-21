const triangle=require('../lib/Triangle');

describe('triangle',()=>{
    describe('render function',()=>{
        it('should render the blue triangle like the foloowing way',()=>{
            const shape=new triangle();
            shape.color='blue';
            expect(shape.render()).toContain(`<polygon points="100,20 180,180 20,180" style="fill: blue;"/>`)
        })
    })
});