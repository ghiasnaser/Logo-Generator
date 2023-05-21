class shapes{
    constructor(color,text,textColor){
        this.color=color;
        this.text=text;
        this.textColor=textColor;
    }
    render(){
        const svgContent=`
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        </svg>
        `
        return svgContent;
    }

}
module.exports=shapes;