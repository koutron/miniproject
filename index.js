const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
    {
        type: "input",
        message: "What is your name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is your location?",
        name: "location"
    },
    {
        type: "input",
        message: "What is your bio?",
        name: "bio"
    },
    {
        type: "input",
        message: "What is your LinkedIn URL?",
        name: "linkedIn"
    },
    {
        type: "input",
        message: "What is your GitHub URL?",
        name: "github"
    },
]).then(({name, location, bio, linkedIn, github}) => {
    let html = `<html>
    <head>
    <title>Miniproject</title>
    </head>
    <body>
    `;

    html += addTag("h1", "color: red", name);
    html += addTag("h1", "color: blue", location);
    html += addTag("h1", "color: green", bio);
    html += addTag("h1", "color: yellow", linkedIn);
    html += addTag("h1", "color: brown", github);


    html += `</body>
    </html>`;

    fs.writeFile("index.html", html, err => {
        if(err) throw err;

        console.log("Success!");
    });


});

function addTag(tag, style, content){
    return `<${tag} style="${style}">${content}</${tag}>
    `
}