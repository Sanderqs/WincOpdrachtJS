"use strict";

const prompt = require("prompt-sync");
const cakeRecipes = require("./cake-recipes.json");
const test = require("./test.json");

// Your functions here

const showUniqueAuthors = (arr) => {
  const result = new Set();

  arr.forEach((element) => {
    if (!result.has(element.Author)) {
      result.add(element.Author);
    }
  });
  return result;
};

const showEachRecipeName = (arr) => {
  if (arr.length === 0) {
    console.log("helaas Pindakaas");
  }
  arr.forEach(({ Name }) => {
    console.log(Name);
  });
};
showEachRecipeName(cakeRecipes);
// Part 2

const displayMenu = () => {
  console.log("\nRecipe Management System Menu:");
  console.log("1. Show All Authors");
  console.log(showUniqueAuthors(cakeRecipes));
  console.log("2. Show Recipe names by Author");
  console.log("3. Show Recipe names by Ingredient");
  console.log("4. Get Recipe by Name");
  console.log("5. Get All Ingredients of Saved Recipes");
  console.log("0. Exit");
  const choice = prompt("Enter a number (1-5) or 0 to exit: ");
  return parseInt(choice);
};

let choice;

do {
  choice = displayMenu();

  switch (choice) {
    case 1:
      break;
    case 2:
      break;
    case 3:
      break;
    case 4:
      break;
    case 5:
      break;
    case 0:
      console.log("Exiting...");
      break;
    default:
      console.log("Invalid input. Please enter a number between 0 and 5.");
  }
} while (choice !== 0);
