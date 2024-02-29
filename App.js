import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import ItemList from "./ItemList"; // Renamed from Menu
import ItemDetail from "./ItemDetail"; // Renamed from Snack
import AddItemForm from './AddItemForm'; // Import AddItemForm component

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getItems() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      let drinks = await SnackOrBoozeApi.getDrinks(); // Implement this method in your API
      setSnacks(snacks);
      setDrinks(drinks);
      setIsLoading(false);
    }
    getItems();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks.length} drinks={drinks.length} />
            </Route>
            <Route exact path="/snacks">
              <ItemList items={snacks} title="Snacks" />
            </Route>
            <Route exact path="/drinks">
              <ItemList items={drinks} title="Drinks" />
            </Route>
            <Route path="/snacks/:id">
              <ItemDetail items={snacks} cantFind="/snacks" />
            </Route>
            <Route path="/drinks/:id">
              <ItemDetail items={drinks} cantFind="/drinks" />
            </Route>
            <Route exact path="/add"> {/* New route for adding items */}
              <AddItemForm />
            </Route>
            <Route> {/* Fallback route for unmatched paths */}
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
