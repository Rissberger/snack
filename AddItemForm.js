// AddItemForm.jsx
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SnackOrBoozeApi from "./Api";

function AddItemForm() {
  const initialFormData = { name: "", description: "", itemType: "snack" };
  const [formData, setFormData] = useState(initialFormData);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Assuming SnackOrBoozeApi has a method to add items
    if (formData.itemType === "snack") {
      await SnackOrBoozeApi.addSnack(formData);
    } else {
      await SnackOrBoozeApi.addDrink(formData);
    }
    setFormData(initialFormData);
    history.push(`/${formData.itemType}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Item</h2>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description: </label>
        <input
          id="description"
          name="description"
          type="text"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="itemType">Type: </label>
        <select
          id="itemType"
          name="itemType"
          value={formData.itemType}
          onChange={handleChange}
          required
        >
          <option value="snack">Snack</option>
          <option value="drink">Drink</option>
        </select>
      </div>
      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddItemForm;
