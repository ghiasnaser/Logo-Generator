const shapes=require('./shapes');
class triangle extends shapes{
    constructor(color,text,textColor){
        super(color,text,textColor);

    }
    render(){
        const svgContent=`
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            <polygon points="100,20 180,180 20,180" style="fill: ${this.color};"/>
            <text x="100" y="110" text-anchor="middle" dominant-baseline="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
        return svgContent;
    }
}
module.exports=triangle;