

let array = ["ap", "nt", "fg"];
function getLength(array) {
  let words = array.join("");
  return words.length;
}
console.log(getLength(array));


function slugify(title) {
  let slugify = title.toLowerCase().split(" ");
  return slugify.join("-");
}
console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"


let firstArray = ["Mango", "Poly", "Houston"];
let secondArray = ["Ajax", "Chelsea", "Poly", "Houston"];

function makeArray(firstArray, secondArray, maxLength) {
  let newArr = firstArray.concat(secondArray); 
  if (newArr.length > maxLength){
    return newArr.slice(0, maxLength);
  } else {
    return newArr;
}

}
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []


function filterArray(numbers, value) {
  let numbersArr = [];
  let index = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > value) {
      numbersArr[index] = numbers[i];
      index++;
    }
  } 
  return numbersArr;
  
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]



const a = 'JAVA is awesome!'
console.log(a);

let c = 1;
let b = true;
console.log(c = b);

let value = null;
console.log(value);

let value1
console.log(value1)

const quantity = 20;
console.log(typeof quantity);

const message = 'JavaScriot is awesome';
console.log(typeof message);

const isSidebarOpen = false;
console.log(typeof isSidebarOpen);

let username1;
console.log(typeof username1);

let status = null;
console.log(typeof status);
// Зверни увагу на перевірку типу значення null. Важливо розуміти, що null насправді є примітивним значенням, а не об'єктом.

// Коли ми використовуємо оператор typeof для перевірки типу значення null, він повертає рядок object. Це може здатися дивним, оскільки null — це фактично відсутність значення, а не об'єкт. Про це часто питають на співбесідах.

// Причина цього полягає в тому, що в ранніх версіях JavaScript null було розглянуто як спеціальний випадок об’єкта. Це була помилка в реалізації мови, збережена для забезпечення зворотної сумісності з існуючим кодом. Тому коли typeof застосовується до null, він повертає object, щоб зберегти цю сумісність.

const appartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Henry',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  }
}
console.log(appartment);
const ownerName = appartment.owner.name;
console.log(ownerName);
const ownerPhone = appartment.owner.phone;
console.log(ownerPhone);
const ownerEmail = appartment.owner.email;
console.log(ownerEmail);
const numberOfTags = appartment.tags.length;
console.log(numberOfTags);
const firstTag = appartment.tags[0];
console.log(firstTag);
const lastTag = appartment.tags[2];
console.log(lastTag);







const book = {
  title: 'The last Kingdom',
  author: 'Bernard Cornwel',
  genres: ['historical', 'adventure'],
  isPublic: true,
  rating: 8.38,
}
const bookTitle = book.title;
console.log(bookTitle);
console.log(book['title']);


const bookGenres = book.genres;
console.log(bookGenres);

const bookPrice = book.price;
console.log(bookPrice);



