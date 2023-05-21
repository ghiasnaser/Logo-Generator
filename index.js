const inquirer = require('inquirer');
const triangle=require('./lib/Triangle');
const circle = require('./lib/Circle');
const square = require('./lib/square');
const fs = require('fs');
const { log } = require('console');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter 3 lettrs for your logo:',
            name: 'text',
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
                fs.writeFile(`./examples/logo(${Response.shape}-${Response.text}).svg`,content,(error) =>
                    error ? console.log(error) : console.log('Generated logo.svg'));
                break;
            case 'Circle':
                var logo = new circle(Response.shapeColor,Response.text.toUpperCase(),Response.textColor);
                var content=logo.render();
                fs.writeFile(`./examples/logo(${Response.shape}-${Response.text}).svg`,content,(error) =>
                    error ? console.log(error) : console.log('Generated logo.svg'));
                break;
            case 'Square':
                var logo = new square(Response.shapeColor,Response.text.toUpperCase(),Response.textColor);
                var content=logo.render();
                fs.writeFile(`./examples/logo(${Response.shape}-${Response.text}).svg`,content,(error) =>
                    error ? console.log(error) : console.log('Generated logo.svg'));
                break;
        }
    });