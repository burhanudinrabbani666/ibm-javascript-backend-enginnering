# JavaScript Fundamental

table of content:

- [javascipt variable](#javascript-variables)
- [Function and typeof functions](#function-and-typeof-functions)
- [Function and prototype](#function-and-prototype)
- [Interactive Web Development with JavaScript and the DOM](#interactive-web-development-with-javascript-and-the-dom)

## JavaScript Basics and Role

- JavaScript is a versatile programming language that makes websites interactive and dynamic by manipulating the DOM and handling user events.
- It runs in web browsers and allows web pages to update content and respond to user actions without full page reloads.

---

JavaScript Evolution and Uses

- ES6 (ECMAScript 2015) brought significant improvements to JavaScript, making it more powerful and developer-friendly.
- JavaScript is used for form validation, dynamic content loading, animations, visual effects, and building responsive web applications.

---

Incorporating and Outputting JavaScript

- JavaScript can be included inline within HTML files or linked externally via separate JS files for better organization.
- Common output methods include console.log for debugging, DOM manipulation to change page content, and pop-up dialogs like alert, confirm, and prompt to interact with users.

---

## JavaScript Variables

- Variables act as named containers for storing data and can be declared using var, let, or const.
- Var has function-level scope, let and const have block-level scope; const variables cannot be reassigned after initialization.

---

Variable Naming and Usage

- Variable names must start with a letter, underscore, or dollar sign and are case sensitive.
- Let variables can be reassigned but not redeclared in the same block; const variables are constant and cannot be reassigned or redeclared.

---

JavaScript Data Types

- Primitive data types include strings (text), numbers (integers and floats), booleans (true/false), undefined (declared but unassigned), and null (empty value).
- Composite data types include arrays (lists of values) and objects (key-value pairs for structured data).

---

Dynamic Typing in JavaScript

- JavaScript is dynamically typed, meaning variable data types are determined at runtime and can change during execution.
- Understanding these data types is essential for effective programming and data manipulation in JavaScript.

## Function and typeof functions

Definition and Purpose of Functions

- Functions are reusable blocks of code that help organize and manage code for better structure, readability, and maintainability.
- They are essential for building complex applications by encapsulating code into manageable units.

---

Types of Functions Based on Parameters

- Non-parameterized functions do not require input parameters and operate solely on internal logic or external factors.
- Parameterized functions accept one or more parameters (arguments) to work with different input values, making them more flexible.

---

Ways to Define Functions

- Function declaration uses the function keyword followed by a name and parameters, then the function code in curly braces.
- Function expression defines a function using a variable to store the function, allowing more dynamic usage.

---

Various Types of Functions in JavaScript

- Named functions have specific names and are useful for debugging.
- Immediately Invoked Function Expressions (IIFE) are defined and executed immediately to create private scopes.
- Arrow functions provide a concise syntax for short functions.
- Anonymous functions have no name and are often used as arguments or assigned to variables.

## Function and prototype

JavaScript Functions

- Functions are blocks of code defined with the keyword "function," a name, optional parameters, and a body containing logic.
- Functions can take arguments of any data type and return results without specifying a return type; they execute when called.

---

Creating Custom Objects and Using "this"

- Custom objects can be created using constructor functions, where "this" refers to the current instance of the object.
- Properties and methods can be assigned to the object instance, and functions like getName can return object details.

---

Prototypes and Self-Executing Functions

- Prototypes allow defining properties and methods shared by all instances of an object, enabling easy updates to all instances by modifying the prototype.
- Self-executing (auto-invoking) functions run immediately after declaration and help isolate variables and functions from the global scope, often used for initialization tasks.

---

Understanding JavaScript Arrays

- Arrays are data structures used to store collections of values of various data types, including numbers, strings, objects, and other arrays.
- Arrays are ordered and zero-indexed, meaning elements are accessed by their position starting at index 0.

---

Creating and Manipulating Arrays

- Arrays can be created using square brackets with elements separated by commas.
- Arrays are mutable; elements can be changed, added, or removed using properties like length and methods such as push and pop.

---

Common Array Methods and Use Cases

- JavaScript provides built-in methods like push, pop, shift, unshift, splice, slice, concat, map, and filter for array manipulation.
- Arrays can contain other arrays, enabling multidimensional structures useful for handling complex data like matrices.

---

Practical Applications and Iteration

- Arrays are widely used for storing lists, iterating through data, and implementing data structures like stacks and queues.
- Iteration over arrays can be done using loops or higher-order methods like forEach, map, filter, and reduce, facilitating data processing and manipulation.

---

forEach and map methods

- forEach iterates over each element in an array to perform an action without creating a new array, useful for side effects like sending emails.
- map creates a new array by applying a function to each element, ideal for transforming data such as extracting product prices.

---

filter and reduce methods

- filter produces a new array containing elements that meet a specified condition, useful for selecting items like products within a price range.
- reduce aggregates array elements into a single value by applying a function, commonly used for calculations like summing order prices.

---

find method and summary

- find returns the first element that satisfies a condition, helpful for searching specific data like finding an employee by ID.
- Together, these methods simplify common array operations such as iteration, transformation, filtering, aggregation, and searching in JavaScript.

## Interactive Web Development with JavaScript and the DOM

Working with DOM Elements

- Use document.getElementById(id) to get a specific element by its unique id.
- Use document.getElementsByTagName(tagName) to get a list of elements by their tag name.
- Create new elements with document.createElement(tagName) and insert them using insertBefore, appendChild, or replaceChild.
- Modify element content with element.innerHTML and change inline styles with element.style.propertyName.
- Use element.setAttribute(attrName, attrValue) to change attributes and element.removeAttribute(attrName) to remove them.

---

Managing the Browser Window

- Open new windows with window.open(url, name, features) and close them with the returned reference's close() method.
- Use window.onload to run code after the page loads.
- Use window.dump("message") to write messages to the browser console.
- Scroll the window to specific coordinates with window.scrollTo(x, y).

These APIs provide essential functions for dynamically interacting with web pages and controlling browser behavior.

---

Definition and Purpose of Client-Side Scripts

- Client-side scripts are programs embedded in or linked to HTML documents that run on the user's device to enhance interactivity.
- They can validate forms, process input dynamically, create elements, and respond to user actions like clicks.

Including Scripts in HTML

- Scripts can be included directly within HTML using the ` tag for short scripts.
- For longer or reusable scripts, the `<script>` tag with the SRC attribute links to external JavaScript files.

---

Handling Browsers Without Scripting Support

- The `<noscript>` tag provides alternative content for users whose browsers do not support or have disabled JavaScript.
- This ensures the website remains functional or informative even without scripting.

---

Event Binding in Client-Side Scripts

- Scripts can be triggered by events such as page load (onload) or user interactions like clicking a button (onclick).
- Event handlers define the functions executed when these events occur, enabling dynamic responses to user actions.

---

DOM Overview

- The DOM is a browser-based interface that allows scripts to dynamically access and update the content, structure, and style of web documents.
- The World Wide Web Consortium (W3C) has released multiple DOM specification levels, with Level 1 being widely supported by browsers.

---

DOM Hierarchy and Key Objects

- The window object sits at the top of the DOM hierarchy, controlling the environment containing the document.
- Other important objects include history (browser navigation), location (URL info), navigator (browser info), screen (user's display info), and document (access to all HTML elements).

---

DOM Structure and Nodes

- The DOM represents the HTML document as a tree structure with nodes.
- Nodes include element nodes (HTML tags) and text nodes (text content between tags).
- Different DOM levels define how detailed the tree is, with Level 2 including whitespace text nodes like line feeds and tabs.

This knowledge helps in understanding how JavaScript interacts with web pages to create dynamic and interactive user experiences.
