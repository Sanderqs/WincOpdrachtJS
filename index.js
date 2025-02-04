"use strict";

const prompt = require("prompt-sync");
const cakeRecipes = require("./cake-recipes.json");
const test = require("./test.json");

// Your functions here

//Unique Authors (gebruik .forEach)
const showUniqueAuthors = (arr) => {
  const result = new Set();

  arr.forEach((recipe) => {
    result.add(recipe.Author);
  });
  return [...result];
};

//Recipe name in array (object destructuring)
const showEachRecipeName = (arr) => {
  const recipeNames = [];

  arr.length === 0
    ? console.log("Helaas Pindakaas geen data")
    : arr.forEach(({ Name }) => {
        recipeNames.push(Name);
      });
  return recipeNames;
};

//Get recipe by Author (gebruik .filter)
const getRecipesByAuthor = (arr, author) => {
  return arr.filter((recipe) => recipe.Author === author);
};

//Display recipelist by Author
const recipesByAuthor = getRecipesByAuthor(cakeRecipes, "Good Food");
showEachRecipeName(recipesByAuthor);

//Get recipe by ingredient (gebruik filter() en .some())
const getRecipeByIngredient = (arr, ingredient) => {
  return arr.filter((recipe) => recipe.Ingredients === ingredient);
};
console.log(getRecipeByIngredient(cakeRecipes, "140g caster sugar"));

// Part 2
const displayMenu = () => {
  console.log("\nRecipe Management System Menu:");
  console.log("1. Show All Authors");
  console.log(showUniqueAuthors(cakeRecipes));
  console.log("2. Show Recipe names by Author");
  console.log(showEachRecipeName(recipesByAuthor));
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
