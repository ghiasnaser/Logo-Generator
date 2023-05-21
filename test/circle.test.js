const circle=require('../lib/Circle');

describe('circle',()=>{
    describe('render function',()=>{
        it('should render the blue circle like the foloowing way',()=>{
            const shape=new circle();
            shape.color='blue';
            expect(shape.render()).toContain(`<circle cx="100" cy="100" r="80" fill="blue" />
            `)
        })
    })
});