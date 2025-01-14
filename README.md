# React Native FlatList Null/Undefined Item Handling

This repository demonstrates a common issue encountered when using `FlatList` in React Native: rendering null or undefined items. The problem arises when trying to access properties of items that are not fully defined before they are rendered.

## Problem

The `bug.js` file shows an example where an array of objects might contain some objects with missing properties.  Attempting to render these objects directly in `FlatList` results in a `TypeError: null is not an object` error or simply skips rendering that item which makes the UI unstable.

## Solution

The `bugSolution.js` file offers two solutions:  Conditional rendering and optional chaining.

* **Conditional Rendering:** Checks for the existence of necessary properties before trying to render the item. This prevents errors but can make the component more complex if you have many potential null or undefined values.

* **Optional Chaining:** Uses the `?.` operator to safely access properties, preventing errors by returning `undefined` if a property is null or undefined.  This is a more concise solution for simple properties and also makes code simpler to read.

Choose the method best suited to your data structure and complexity. Using optional chaining is often simpler and easier to maintain for simpler scenarios.