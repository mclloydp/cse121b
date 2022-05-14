/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let myNameElement = 'McLloyd';

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').textContent = myNameElement;

// Step 3: declare and instantiate a variable to hold the current year
let thisYear = '2022';

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').textContent = thisYear;

// Step 5: declare and instantiate a variable to hold the name of your picture
let myPicture = 'images/mclloyd.jpg';

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('img').setAttribute('src', myPicture);



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let favoriteFood = ['Spaggetti', 'Sour Milk', 'Beans', 'Beef'];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').textContent = favoriteFood;

// Step 3: declare and instantiate a variable to hold another favorite food
let anotherFavoriteFood = 'Yoghut';

// Step 4: add the variable holding another favorite food to the favorite food array
favoriteFood.push(anotherFavoriteFood);

// Step 5: repeat Step 2
document.querySelector('#food').textContent = favoriteFood;

// Step 6: remove the first element in the favorite foods array
favoriteFood.shift();

// Step 7: repeat Step 2
document.querySelector('#food').textContent = favoriteFood;

// Step 8: remove the last element in the favorite foods array
favoriteFood.pop();

// Step 7: repeat Step 2
document.querySelector('#food').textContent = favoriteFood;


