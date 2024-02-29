import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

async function getSnacks() {
  const response = await fetch(`${BASE_URL}/snacks`);
  if (!response.ok) throw new Error("Failed to fetch snacks");
  const snacks = await response.json();
  return snacks;
}

/** Fetch all drinks */
async function getDrinks() {
  const response = await fetch(`${BASE_URL}/drinks`);
  if (!response.ok) throw new Error("Failed to fetch drinks");
  const drinks = await response.json();
  return drinks;
}

/** Add a new snack */
async function addSnack(snackData) {
  const response = await fetch(`${BASE_URL}/snacks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(snackData),
  });
  if (!response.ok) throw new Error("Failed to add snack");
  const snack = await response.json();
  return snack;
}

/** Add a new drink */
async function addDrink(drinkData) {
  const response = await fetch(`${BASE_URL}/drinks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(drinkData),
  });
  if (!response.ok) throw new Error("Failed to add drink");
  const drink = await response.json();
  return drink;
}

/** Update a snack - assuming you have this feature */
async function updateSnack(id, snackData) {
  const response = await fetch(`${BASE_URL}/snacks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(snackData),
  });
  if (!response.ok) throw new Error("Failed to update snack");
  return await response.json();
}

/** Update a drink - assuming you have this feature */
async function updateDrink(id, drinkData) {
  const response = await fetch(`${BASE_URL}/drinks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(drinkData),
  });
  if (!response.ok) throw new Error("Failed to update drink");
  return await response.json();
}

export default {
  getSnacks,
  getDrinks,
  addSnack,
  addDrink,
  updateSnack, 
  updateDrink, 
};