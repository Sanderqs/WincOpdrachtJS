"use strict";

const prompt = require("prompt-sync")();
const cakeRecipes = require("./cake-recipes.json");
const test = require("./test.json");

// Your functions here

//Global Variable
const SAVED_RECIPES = [];

//Function to Get Unique Authors (.forEach)
const showUniqueAuthors = (arr) => {
  const result = new Set();

  arr.forEach((recipe) => {
    result.add(recipe.Author);
  });
  return [...result];
};

//Function to Log Recipe Names (object destructuring)
const showEachRecipeName = (arr) => {
  const recipeNames = [];

  arr.length === 0
    ? console.log("Helaas Pindakaas geen data")
    : arr.forEach(({ Name }) => {
        recipeNames.push(Name);
      });
  return recipeNames;
};

//Function to Get Recipes by Author (.filter)
const getRecipesByAuthor = (arr, author) => {
  return arr.filter((recipe) => recipe.Author === author);
};

//Function to Get Recipes by Ingredient(gebruik filter() en .some())
const getRecipeByIngredient = (arr, ingredient) => {
  return arr.filter((recipe) =>
    recipe.Ingredients.some((item) =>
      item.toLowerCase().includes(ingredient.toLowerCase())
    )
  );
};

//Function to Get Recipe by Name ( .find() & .includes())
const getRecipesByName = (arr, recipeName) => {
  return arr.find((recipe) => recipe.Name.includes(recipeName));
};

const getIngredientsInArray = (recipes) => {
  return recipes.reduce((acc, recipe) => {
    return [...acc, ...recipe.Ingredients];
  }, []);
};
// Part 2
const displayMenu = () => {
  console.log("\nRecipe Management System Menu:");
  console.log("1. Show All Authors");
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
      console.log(showUniqueAuthors(cakeRecipes));
      break;
    case 2:
      const author = prompt(
        "From which author do you want to see cupcake recipes? "
      );
      const recipesByAuthor = getRecipesByAuthor(cakeRecipes, author);
      console.log(showEachRecipeName(recipesByAuthor));
      break;
    case 3:
      const ingredient = prompt("what ingredient would you like to use? ");
      const recipesByIngredient = getRecipeByIngredient(
        cakeRecipes,
        ingredient
      );
      console.log(showEachRecipeName(recipesByIngredient));
      break;
    case 4:
      const recipeName = prompt("What is the name of the recipe? ");
      const recipeByName = getRecipesByName(cakeRecipes, recipeName);
      console.log(recipeByName);
      const anwser = prompt("Would you like to save this recipe? type Y/N");
      if (anwser.toLowerCase() === "y") {
        SAVED_RECIPES.push(recipeByName);
      }

      break;
    case 5:
      console.log(getIngredientsInArray(SAVED_RECIPES));
      break;
    case 0:
      console.log("Exiting...");
      break;
    default:
      console.log("Invalid input. Please enter a number between 0 and 5.");
  }
} while (choice !== 0);
