// let array = ["ap", "nt", "fg"];
// function getLength(array) {
//   let words = array.join("");
//   return words.length;
// }
// console.log(getLength(array));

// // -------------------------------------------------------------------

// function slugify(title) {
//   let slugify = title.toLowerCase().split(" ");
//   return slugify.join("-");
// }
// console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"


// let firstArray = ["Mango", "Poly", "Houston"];
// let secondArray = ["Ajax", "Chelsea", "Poly", "Houston"];

// function makeArray(firstArray, secondArray, maxLength) {
//   let newArr = firstArray.concat(secondArray); 
//   if (newArr.length > maxLength){
//     return newArr.slice(0, maxLength);
//   } else {
//     return newArr;
// }

// }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

// // -------------------------------------------------------------------

// function filterArray(numbers, value) {
//   let numbersArr = [];
//   let index = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > value) {
//       numbersArr[index] = numbers[i];
//       index++;
//     }
//   } 
//   return numbersArr;
  
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// // -------------------------------------------------------------------

// const a = 'JAVA is awesome!'
// console.log(a);

// let c = 1;
// let b = true;
// console.log(c = b);

// let value = null;
// console.log(value);

// let value1
// console.log(value1)

// const quantity = 20;
// console.log(typeof quantity);

// const message = 'JavaScriot is awesome';
// console.log(typeof message);

// const isSidebarOpen = false;
// console.log(typeof isSidebarOpen);

// let username1;
// console.log(typeof username1);

// let status = null;
// console.log(typeof status);
// // Зверни увагу на перевірку типу значення null. Важливо розуміти, що null насправді є примітивним значенням, а не об'єктом.

// // Коли ми використовуємо оператор typeof для перевірки типу значення null, він повертає рядок object. Це може здатися дивним, оскільки null — це фактично відсутність значення, а не об'єкт. Про це часто питають на співбесідах.

// // Причина цього полягає в тому, що в ранніх версіях JavaScript null було розглянуто як спеціальний випадок об’єкта. Це була помилка в реалізації мови, збережена для забезпечення зворотної сумісності з існуючим кодом. Тому коли typeof застосовується до null, він повертає object, щоб зберегти цю сумісність.

// const appartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   }
// }
// console.log(appartment);
// const ownerName = appartment.owner.name;
// console.log(ownerName);
// const ownerPhone = appartment.owner.phone;
// console.log(ownerPhone);
// const ownerEmail = appartment.owner.email;
// console.log(ownerEmail);
// const numberOfTags = appartment.tags.length;
// console.log(numberOfTags);
// const firstTag = appartment.tags[0];
// console.log(firstTag);
// const lastTag = appartment.tags[2];
// console.log(lastTag);

// // -------------------------------------------------------------------

// const book = {
//   title: 'The last Kingdom',
//   author: 'Bernard Cornwel',
//   genres: ['historical', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// }
// const bookTitle = book.title;
// console.log(bookTitle);
// console.log(book['title']);

// const bookGenres = book.genres;
// console.log(bookGenres);

// const bookPrice = book.price;
// console.log(bookPrice);

// //------------------------------------------------------------------------------------------------------
// // Перебери об'єкт apartment, використовуючи цикл for...in, і запиши в масив keys всі його ключі, а в масив values всі значення його властивостей.
// // const apartment = {
// //   descr: "Spacious apartment in the city center",
// //   rating: 4,
// //   price: 2153,
// // };

// // const keys = [];
// // const values = [];

// // for (const key in apartment){
// //   keys[keys.length] = key;
// //   values[values.length] = apartment[key];
// // }
// // console.log(values);


// // -----------------------------------
// // Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of. Запиши у змінну keys масив ключів властивостей об'єкта apartment, і додай в масив values всі значення його властивостей.

// // Оголошена змінна apartment.
// // Значення змінної apartment - це об'єкт.
// // Оголошена змінна keys.
// // Значення змінної keys - це масив ["descr", "rating", "price"].
// // Значення змінної keys отримане за допомогою методу Object.keys().
// // Оголошена змінна values.
// // Значення змінної values - це масив ["Spacious apartment in the city center", 4, 2153].
// // Значення змінної values отримане за допомогою циклу for...of.
// // const apartment = {
// //   descr: "Spacious apartment in the city center",
// //   rating: 4,
// //   price: 2153,
// // };
// // const values = [];
// // const keys = Object.keys(apartment);
// // for (const value of keys) {
// //   values[values.length] = apartment[value];
// // }


// // -------------------------------------------------------------------
// // Метод for in у функції
// // Виконай рефакторинг функції countProps(object), замінивши перебір ключів за допомогою циклу for…in на метод Object.keys() для отримання масиву властивостей. Функція має повернути кількість властивостей в об'єкті object.

// // Оголошена функція countProps(object)
// // Виклик countProps({}) повертає 0
// // Виклик countProps({ name: "Mango", age: 2 }) повертає 2
// // Виклик countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) повертає 3
// //Функція використовує метод Object.keys()

// // function countProps(object) {
// //   let propCount = 0;

// //   for (const key in object) {
// //     if (object.hasOwnProperty(key)) {
// //       propCount += 1;
// //     }
// //   }
// //   return propCount;
// // }

// // Змінено на метод Object.keys()

// // function countProps(object) {
// //   let propCount = 0;
// //   let keys = Object.keys(object);
// //   for (const key in keys) {
// //     propCount += 1;
// //   }
// //   return propCount;
// // }
// // console.log(countProps({ name: "Mango", age: 2 }));
// // console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// // --------------------------------------------------------------------------------


// // --------------------------------------------------------------------------------
// // Функція countTotalSalary(salaries) приймає об'єкт зарплат (salaries) в якості параметра. Кожна властивість об'єкта salaries — це ключ, що містить ім'я співробітника, та значення - його відповідна зарплатня.

// // Доповни код функції countTotalSalary(salaries) так, щоб вона повертала загальну суму зарплат всіх співробітників.

// // Поради:

// // Ініціалізуй змінну totalSalary зі значенням 0, яка буде відповідати за загальну суму зарплат усіх співробітників
// // Використай метод Object.values() для отримання значень (зарплат) з об'єкта salaries
// // Пройдись по отриманих значеннях за допомогою циклу та додай кожне значення до змінної totalSalary.
// // Поверни totalSalary як результат
// // Оголошена функція countTotalSalary(salaries)
// // Виклик countTotalSalary({}) повертає 0
// // Виклик countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) повертає 330
// // Виклик countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) повертає 400
// // function countTotalSalary(salaries) {
// //   let totalSalary = 0;
// //   let values = Object.values(salaries);
// //   for (let key of values) {
// //     totalSalary += key;}
// //     return totalSalary;
// //   }

// // console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// // --------------------------------------------------------------------------------
// // Масив colors містить колекцію кольорів. Кожен колір представлений об'єктом і має властивості hex і rgb з відповідними для цього формату і кольору значеннями.

// // Перебери масив об'єктів colors, використовуючи цикл for...of. Додай у масив hexColors значення властивостей hex, а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.

// // Оголошена змінна colors
// // Значення змінної colors - це масив
// // Оголошена змінна hexColors
// // Значення змінної hexColors - це масив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// // Оголошена змінна rgbColors
// // Значення змінної rgbColors - це масив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//   hexColors[hexColors.length] = color.hex;
//   rgbColors[rgbColors.length] = color.rgb;
// }
// console.log(hexColors);
// console.log(rgbColors);

// //----------------------------------------------------------------------
// // Функція getProductPrice(productName) приймає один параметр productName - назва продукту. Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість.

// // Доповни код функції так, щоб вона шукала об'єкт продукту з певним ім'ям (властивість name) в масиві products і повертала його ціну (властивість price). Якщо продукт з такою назвою не знайдений, функція повинна повертати null.

// // Оголошена функція getProductPrice(productName).
// // Виклик getProductPrice("Radar") повертає 1300.
// // Виклик getProductPrice("Grip") повертає 1200.
// // Виклик getProductPrice("Scanner") повертає 2700.
// // Виклик getProductPrice("Droid") повертає 400.
// // Виклик getProductPrice("Engine") повертає null.

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 }, // objProduct
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ]; 

//   for (let objProduct of products) {
//    if (productName === objProduct.name){
//     return objProduct.price;
//    }  
//   } 
//   return null
// };
// console.log(getProductPrice("Radar"));   // 1300
// console.log(getProductPrice("Grip"));    // 1200
// console.log(getProductPrice("Scanner")); // 2700
// console.log(getProductPrice("Droid"));   // 400
// console.log(getProductPrice("Engine"));
// //---------------------------------------------------------------------
// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
//   { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
//   { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", rating: 6.8 }
// ];

// const titles = [];

// for (const book of books) {
//   titles.push(book.title);
//   // або
// 	// titles[titles.length] = book.title;
  
// }

// console.log(titles); // ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man"]
// //-----------------------------------------------------------------------
// // Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості. Функція повинна повернути масив усіх значень властивості з таким ім'ям з кожного об'єкта в масиві products. Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.

// // Оголошена функція getAllPropValues(propName)
// // Виклик getAllPropValues("name") повертає ["Radar", "Scanner", "Droid", "Grip"]
// // Виклик getAllPropValues("quantity") повертає [4, 3, 7, 9]
// // Виклик getAllPropValues("price") повертає [1300, 2700, 400, 1200]
// // Виклик getAllPropValues("category") повертає []
// //  1 ВАРІАНТ рішення - 
// // function getAllPropValues(propName) {
// //   const products = [
// //     { name: "Radar", price: 1300, quantity: 4 },
// //     { name: "Scanner", price: 2700, quantity: 3 },
// //     { name: "Droid", price: 400, quantity: 7 },
// //     { name: "Grip", price: 1200, quantity: 9 },
// //   ];
// //   const arr = [];
// //   for (const product of products){
// //     if(product.hasOwnProperty(propName)){
// //       arr.push(product[propName]);
// //     }
// //   }
// //   return arr;
// // }
// // console.log(getAllPropValues("quantity"));
// // console.log(getAllPropValues("price"));

// // 2 ВАРІАНТ рішення -
// function getAllPropValues(propName) {
//     const products = [
//       { name: "Radar", price: 1300, quantity: 4 },
//       { name: "Scanner", price: 2700, quantity: 3 },
//       { name: "Droid", price: 400, quantity: 7 },
//       { name: "Grip", price: 1200, quantity: 9 },
//     ];
// const arr = [];
// for (const product of products){
//   if (product[propName] !== undefined) {
//     arr.push(product[propName]);
//   }
// }
// return arr;
// }
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// //---------------------------------------------------------------------
// // Функція calculateTotalPrice(productName) приймає один параметр productName- назва товару. Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість.

// // Доповни код функції так, щоб вона повертала загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products.

// // Якщо продукту з такою назвою немає, то функція повинна повертати рядок "Product <productName> not found!" , де <productName> — це ім'я товару.

// // Оголошена функція calculateTotalPrice(productName)
// // Виклик calculateTotalPrice("Blaster") повертає "Product Blaster not found!"
// // Виклик calculateTotalPrice("Radar") повертає 5200
// // Виклик calculateTotalPrice("Droid") повертає 2800
// // Виклик calculateTotalPrice("Grip") повертає 10800
// // Виклик calculateTotalPrice("Scanner") повертає 8100

// const products = [
  //     { name: "Radar", price: 1300, quantity: 4 },
  //     { name: "Scanner", price: 2700, quantity: 3 },
  //     { name: "Droid", price: 400, quantity: 7 },
  //     { name: "Grip", price: 1200, quantity: 9 },
  //   ];

// function calculateTotalPrice(productName) {
//   let totalPrice = 0;
//   for (const product of products){
//     if(product.name === productName){
//       totalPrice = product.price * product.quantity;
//       return totalPrice;
//     }
//   } return `Product ${productName} not found!`;
// }
// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));


// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [...arr1];
// console.log(arr1 === arr2);


// function foo(...args) {
// 	console.log(args);
// }
// foo("a", "b");





// const a11 = {};
// const b11 = {};

// const c11 = {
//   d: 21,
//   e: 34,
// };
// c11[a11] = "Hello world";
// c11[b11] = 21;

// console.log(c11);

//---------------------------------------------------------------

// Напиши функцію isEnoughCapacity(products, containerSize), яка обчислює, чи помістяться всі товари в контейнер при пакуванні.

// Функція оголошує два параметри:

// products — об’єкт, у якому ключі містять назви товарів, а їхні значення — кількість цих товарів. Наприклад, { apples: 2, grapes: 4 }.
// containerSize — число, максимальна кількість одиниць товарів, яку в себе може вмістити контейнер.
// Функція має повернути результат перевірки, чи помістяться всі товари в контейнер. Тобто порахувати загальну кількість товарів в об’єкті products і повернути true, якщо вона менше або дорівнює containerSize, і false, якщо ні.

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її викликів.

function isEnoughCapacity(products, containerSize) {
  const itemQuantities = Object.values(products);
  let totalQuantity = 0;
  for (const itemQuantity of itemQuantities){
    totalQuantity += itemQuantity;
    if (totalQuantity >= containerSize){
      return false;
    }  
  } return true;
}


console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
); // false

//-------------------------------------------------------------

// Напиши функцію calcAverageCalories(days), яка повертає середньодобове значення кількості калорій, які спортсмен споживав протягом тижня. Функція очікує один параметр: days — масив об’єктів. Кожен об’єкт описує день тижня та кількість калорій calories, спожитих спортсменом, у цей день. Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її викликів.

function calcAverageCalories(days) {
  let totalCalories = 0;
  for (const day of days){
    totalCalories += day.calories;
    }
    if (days.length === 0) {
      return 0;}
    return totalCalories / days.length;

}

console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
  ])
); // 2270

console.log(
  calcAverageCalories([])
); // 0
//-----------------------------------------------------------
// Доповни об’єкт profile методами для роботи з його властивостями.

// Метод changeUsername(newName) повинен приймати рядок (нове ім’я) в параметр newName та змінювати значення властивості username на нове. Нічого не повертає.
// Метод updatePlayTime(hours) повинен приймати число (кількість годин) у параметр hours та збільшити на нього значення властивості playTime. Нічого не повертає.
// Метод getInfo() має повертати рядок формату <Username> has <amount> active hours!, де <Username> — це ім’я профілю, а <amount> — кількість ігрових годин.
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

const profile = {
  username: "Jacob",
  playTime: 300,
  changeUsername(newName){
    this.username = newName;
  },
  updatePlayTime(hours){
    this.playTime += hours; 
  },
  getInfo (){
    return `${this.username} has ${this.playTime} active hours!`;
  } 
};



console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"

//-----------------------------------------------------------------------------
const getUserNames = (users) =>
  users.map(user => user.name);

console.log(
  getUserNames([
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    balance: 3793
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    balance: 2278
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    balance: 2764
  },
])
); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]

//-----------------------------------------------------------------------------

const getUsersWithFriend = (users, friendName) => {
return users.filter(user => user.friends.includes(friendName));
}

const allUsers = [
  {
    name: "Moore Hensley",
    friends: ["Sharron Pace"]
  },
  {
    name: "Sharlene Bush",
    friends: ["Briana Decker", "Sharron Pace"]
  },
  {
    name: "Ross Vazquez",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
  },
  {
    name: "Elma Head",
    friends: ["Goldie Gentry", "Aisha Tran"]
  },
  {
    name: "Carey Barr",
    friends: ["Jordan Sampson", "Eddie Strong"]
  },
  {
    name: "Blackburn Dotson",
    friends: ["Jacklyn Lucas", "Linda Chapman"]
  },
  {
    name: "Sheree Anthony",
    friends: ["Goldie Gentry", "Briana Decker"]
  }
];

console.log(getUsersWithFriend(allUsers, "Briana Decker")); 
// [
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// [
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, "Adrian Cross" )); // []
//--------------------------------------------------------------------------
const sortByDescendingFriendCount = (users) => {
  return users.toSorted((a, b) => b.friends.length - a.friends.length);
}

console.log(
  sortByDescendingFriendCount([
    {
      name: "Moore Hensley",
      friends: ["Sharron Pace"],
      gender: "male"
    },
    {
      name: "Sharlene Bush",
      friends: ["Briana Decker", "Sharron Pace"],
      gender: "female"
    },
    {
      name: "Ross Vazquez",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      gender: "male"
    },
    {
      name: "Elma Head",
      friends: ["Goldie Gentry", "Aisha Tran"],
      gender: "female"
    },
    {
      name: "Carey Barr",
      friends: ["Jordan Sampson", "Eddie Strong"],
      gender: "male"
    },
    {
      name: "Blackburn Dotson",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      gender: "male"
    },
    {
      name: "Sheree Anthony",
      friends: ["Goldie Gentry", "Briana Decker"],
      gender: "female"
    }
  ])
);
// [
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"],
//     gender: "female"
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     gender: "female"
//   },
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"],
//     gender: "male"
//   }
// ]
//----------------------------------------------------------------
// Напиши стрілочну функцію getTotalBalanceByGender(users, gender), яка прийматиме два параметра:

// перший параметр users — масив об’єктів користувачів,
// другий параметр gender — рядок, що зберігає стать.
// Функція має використовувати ланцюжок виклику методів та повертати загальний баланс користувачів (властивість balance), стать яких (властивість gender) збігається зі значенням параметра gender.

const getTotalBalanceByGender = (users, gender) => {
  const filteredArr = users.filter(user => user.gender === gender);  
  const totalBalance = filteredArr.reduce((total, user) => {
    return total + user.balance;
  }, 0);
  return totalBalance;
}

const clients = [
	{
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log(getTotalBalanceByGender(clients, "male")); // 12053

console.log(getTotalBalanceByGender(clients, "female")); // 8863

