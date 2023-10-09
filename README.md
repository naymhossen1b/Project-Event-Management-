
## EventLab Intaresting 5 Features

- Event Listings: Event management websites provide customers with a comprehensive list of upcoming entertainment events in their area or of interest. Users can browse through concerts, festivals, sports events, theater shows, and more to find events they want to attend.
- Ticket Booking and Purchasing: These websites often offer a seamless ticket booking and purchasing system. Customers can select their preferred seats, purchase tickets securely online, and receive e-tickets or mobile tickets for easy access to the event.
- Event Information: Customers can access detailed information about each event, including the date, time, venue location, performers or teams involved, and a brief description. Event management websites may also provide maps and seating charts to help customers plan their visit.
- Reviews and Ratings: Many event management websites incorporate user-generated content, such as reviews and ratings, to help customers make informed decisions about which events to attend. Customers can read feedback from others who have attended the same event.
- Personalization and Recommendations: To enhance the customer experience, these websites often use algorithms to offer personalized event recommendations based on a user's preferences, previous attendance history, or location. This helps customers discover new events that align with their interests.




<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>The correct answer is:
B: ReferenceError: greetign is not defined

Explain: The variable "greeting" is declared but not used, and a typo occurs when you try to assign an empty object to "greetign" JavaScript is case-sensitive, so "greetign" is treated as a different variable from "greeting."
</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>
The code provided attempts to add two values, but one of them is a string. JavaScript performs type coercion when using the + operator, which means it will try to convert the operands to a common data type for the operation. In this case, it will attempt to convert the number 1 to a string and then concatenate it with the string "2"

So, the correct answer is:
C: "12"
</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>
The code initially create an array food with four elements and an object info with a property favoriteFood that references the first element of the food array. Then change the value of info.favoriteFood to "🍝". However, this change does not affect the food array in any way. Arrays and objects are reference types in JavaScript, but when assign a value to info.favoriteFood are changing the value of the property in the info object, not modifying the food array.

So, the correct answer is:
A: ['🍕', '🍫', '🥑', '🍔']
</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>
The sayHi function will return "Hi there, undefined" because the name parameter is not provided with a value when calling the function.

So, the correct answer is:
B: Hi there, undefined
</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>
The if (num) condition checks whether num is truthy. In JavaScript, numbers are truthy unless they are 0, which is considered falsy.

0 is a falsy value, so it does not increment count.
1, 2, and 3 are truthy values, so they each increment count by 1.

So, the correct answer is:
C: 3
</i>

</p>
</details>

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
