const shapes=require('./shapes');
class square  extends shapes{
    constructor(color,text,textColor){
        super(color,text,textColor);

    }
    render(){
        const svgContent=`
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            <rect x="50" y="50" width="150" height="150" fill="${this.color}" />
            <text x="125" y="125" text-anchor="middle" dominant-baseline="middle" fill="${this.textColor}" font-size="50px" font-weight="bold">${this.text}</text>
        </svg>
        `
        return svgContent;
    }
}
module.exports=square;