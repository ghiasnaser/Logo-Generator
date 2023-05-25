const inquirer = require('inquirer');
const triangle=require('./lib/Triangle');
const circle = require('./lib/Circle');
const square = require('./lib/square');
const fs = require('fs');

// function to check the length of the logo to make sure it is exactly 3 letters not more than that
const logoNameValidate= (data)=>{
    if(data.length >3 || data.length==0){
        console.log('');
        console.log('invalid Logo name please enter up to 3 letters');
    }
    else{
        return true;
    }
};

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter 3 lettrs for your logo:',
            name: 'text',
            validate:logoNameValidate,
        },
        {
            type: 'input',
            message: 'Enter the color for the logo letters:',
            name: 'textColor',
            default: 'black',
        },
        {
            type: 'list',
            message: 'Choose the shape you want for the logo:',
            name: 'shape', 
            choices: [
                'Triangle',
                'Circle',
                'Square',
              ],
        },
        {
            type: 'input',
            message: 'Enter the color of the shpae:',
            name: 'shapeColor',
            default: 'gray',
        }

    ])
    .then((Response)=>{
        switch (Response.shape){
            case 'Triangle':
                var logo = new triangle(Response.shapeColor,Response.text.toUpperCase(),Response.textColor);
                var content=logo.render();
                fs.writeFile(`./logos/logo(${Response.shape}-${Response.text}).svg`,content,(error) =>
                    error ? console.log(error) : console.log(`logo(${Response.shape}-${Response.text}).svg has been successfully created`));
                break;
            case 'Circle':
                var logo = new circle(Response.shapeColor,Response.text.toUpperCase(),Response.textColor);
                var content=logo.render();
                fs.writeFile(`./logos/logo(${Response.shape}-${Response.text}).svg`,content,(error) =>
                    error ? console.log(error) : console.log(`logo(${Response.shape}-${Response.text}).svg has been successfully created`));
                break;
            case 'Square':
                var logo = new square(Response.shapeColor,Response.text.toUpperCase(),Response.textColor);
                var content=logo.render();
                fs.writeFile(`./logos/logo(${Response.shape}-${Response.text}).svg`,content,(error) =>
                    error ? console.log(error) : console.log(`logo(${Response.shape}-${Response.text}).svg has been successfully created`));
                break;
        }
    });