const questions = [
  
];

function writeToFile(fileName, data) {
 
}

function init() {

init();

const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
    .prompt({
        message: "Enter your GitHub username:",
        name: "username"
    })
    .then(function ({ username }) {
        const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

        axios.get(queryUrl).then(function (res) {
            console.log(Object.keys(res.data[0]));
            const repoNames = res.data.map(function (repo) {
                return repo.name;
            const userName = res.data.map(function (repo) {
                return repo.name;
            const location = res.data.map(function (repo) {
                return repo.name;
            const profile = res.data.map(function (repo) {
                return repo.name;
            const blog = res.data.map(function (repo) {
                return repo.name;
            const bio = res.data.map(function (repo) {
                return repo.name;
            const pulicRepo = res.data.map(function (repo) {
                return repo.name;
            const followersNumber = res.data.map(function (repo) {
                return repo.name;
            const stars = res.data.map(function (repo) {
                return repo.name;
            const usersFollowing = res.data.map(function (repo) {
                return repo.name;
            
            });

            const repoNamesStr = repoNames.join("\n");

            fs.writeFile("repos.txt", repoNamesStr, function (err) {
                if (err) {
                    throw err;
                }

                console.log(`Saved ${repoNames.length} repos`);
            });
        });
    });
