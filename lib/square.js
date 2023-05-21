const shapes=require('./shapes');
class square  extends shapes{
    constructor(color,text,textColor){
        super(color,text,textColor);

    }
    render(){
        const svgContent=`
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            <rect x="50" y="50" width="100" height="100" fill="${this.color}" />
            <text x="100" y="150" text-anchor="middle" dominant-baseline="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
        return svgContent;
    }
}
module.exports=square;