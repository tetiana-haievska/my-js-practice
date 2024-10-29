// OOП. Класи.

// const user = {
//   username: "Victor",
//   showName() {

//     console.log(user.username);
//   },
// };

// user.showName();

// const user = {
//   username: "Victor",
//   showName() {

//     console.log(this.username);
//   },
// };

// user.showName();
//----------------------------------------------------------------------
// Виконай рефакторинг методів об'єкта pizzaPalace, розставивши відсутні this в місцях звернення до властивостей і методів об'єкта.

// Метод checkPizza об'єкта pizzaPalace використовує this
// Метод order об'єкта pizzaPalace використовує this
// Виклик pizzaPalace.order("Smoked") повертає рядок "Order accepted, preparing «Smoked» pizza"
// Виклик pizzaPalace.order("Four meats") повертає рядок "Order accepted, preparing «Four meats» pizza"
// Виклик pizzaPalace.order("Big Mike") повертає рядок "Sorry, there is no pizza named «Big Mike»"
// Виклик pizzaPalace.order("Viennese") повертає рядок "Sorry, there is no pizza named «Viennese»"
// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };
// console.log(pizzaPalace.order("Smoked"));
//-----------------------------------------------------------------------
// function foo() {
//   console.log(this);
// }

// foo(); // window
//--------------------------------------------------------------------
// "use strict";

// function foo() {
//   console.log(this);
// }

// foo(); // undefined
//---------------------------------------------------------------------
// "use strict";

// function showThis() {
//   console.log("this in showThis: ", this);
// }

// // Викликаємо у глобальному контексті
// showThis(); // "this in showThis: undefined"

// "use strict";

// function showThis() {
//   console.log("this in showThis: ", this);
// }

// const user = {
//   username: "Poly",
// };

// user.showContext = showThis;

// // Викликаємо в контексті об'єкта
// user.showContext(); // this in showThis: {username: "Poly", showContext: ƒ}

// // Викликаємо в глобальному контексті
// showThis(); // "this in showThis: undefined"
//-----------------------------------------------------------------
// "use strict";

// const book = {
// 	updateAuthor(newAuthor) {
// 		// ...
// 	}
// };
// console.log(book.updateAuthor("Jacob"));
// Значенням this в book.updateAuthor("Jacob") буде book (значення зліва від функції(updateAuthor("Jacob"))!
//------------------------------------------------------------------
// const book = {
// 	updateTitle(newTitle) {
// 		// ...
// 	}
// };

// const update = book.updateTitle;

// console.log(update("Lord Of The Rings"));
// // Значенням this в update("Lord Of The Rings") буде window, бо У прикладі функція update викликається як окрема функція, а не як метод об'єкта book. Оскільки функція update була витягнута з контексту об'єкта book і збережена в окремій змінній, контекст (this) вже не вказуватиме на об'єкт book. Отже, у цьому випадку this у функції updateTitle буде визначатися згідно зі звичайними правилами, що стосуються глобального об'єкта (такий як window у браузері).!
// //------------------------------------------------------------------
// // Метод call
// function greet(str) {
//     console.log(`${str}, ${this.username}, your room is ${this.room}!`);
//   }

//   const mango = {
//     username: "Mango",
//       room: 27
//   };

//   const poly = {
//     username: "Poly",
//       room: 191
//   };
//   greet.call(mango, "Welcome"); // "Welcome, Mango, your room is 27!"
//   greet.call(poly, "Aloha"); // "Aloha, Poly, your room is 191!"
// //-----------------------------------------------
// function showName() {
// 	console.log(this.name);
// }

// const user = {
//   name: "Alice",
// };

// showName.call(user);
// //-------------------------------------------------------------------
// function greet(name) {
//     console.log(`Hello, ${name}! I am ${this.person}`);
//   }

//   const person = "John";
//   const context = {
//     person: "Alice"
//   };

//   greet.call(context, "Bob");
//   //-------------------------------------------------------------------
// //   Перед звільненням розробник зламав вихідний код управління акаунтами користувачів нашого сервісу доставки їжі. Виконай рефакторинг методів об'єкта customer, розставивши відсутні this під час звернення до властивостей об'єкта.

// // Використай цей стартовий код і виконай рефакторинг. Після оголошення об'єкта ми додали виклики методів. У консоль будуть виведені результати їх роботи. Будь ласка, нічого там не змінюй.

//   const customer = {
//     username: "Mango",
//     balance: 24000,
//     discount: 0.1,
//     orders: ["Burger", "Pizza", "Salad"],
//     // Change code below this line
//     getBalance() {
//       return this.balance;
//     },
//     getDiscount() {
//       return this.discount;
//     },
//     setDiscount(value) {
//       this.discount = value;
//     },
//     getOrders() {
//       return this.orders;
//     },
//     addOrder(cost, order) {
//       this.balance -= cost - cost * this.discount;
//       this.orders.push(order);
//     },
//     // Change code above this line
//   };

//   customer.setDiscount(0.15);
//   console.log(customer.getDiscount()); // 0.15

//   customer.addOrder(5000, "Steak");
//   console.log(customer.getBalance()); // 19750

//   console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
//--------------------------------------------------------------------
//   Створи клас Storage, який створюватиме об'єкти для управління складом товарів. Клас очікує лише один аргумент — початковий масив товарів, який записується до створеного об'єкта в приватну властивість items.

//   Оголоси наступні методи класу:

//   getItems() — повертає масив поточних товарів у приватній властивості items.
//   addItem(newItem) — приймає новий товар newItem і додає його до масиву товарів у приватну властивість items об'єкта.
//   removeItem(itemToRemove) — приймає рядок з назвою товару itemToRemove і видаляє його з масиву товарів у приватній властивості items об'єкта.

//   Візьми код нижче з ініціалізацією екземпляра й викликами методів і встав його після оголошення класу для перевірки коректності роботи. У консоль будуть виведені результати їх роботи. Будь ласка, нічого там не змінюй.

// class Storage {
//     #items;
//     constructor(items) {
//         this.#items = items; 
//     }
//     getItems() {
//         return this.#items;
//     }
//     addItem(newItem) {
//         this.#items.push(newItem);
//     }
//     removeItem(itemToRemove){
//         this.#items = this.#items.filter(item => item !== itemToRemove);
//     }
// }

//   const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// storage.removeItem("Scaner");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
// //---------------------------------------------------------------------
// function sayHello(greeting) {
//     console.log(`${greeting}, ${this.name}!`);
//   }

//   const user = {
//     name: "Alice"
//   };

//   const greet = sayHello.bind(user);

//   greet("Hello"); // Hello, Alice!
//--------------------------------------------------------------------
//   const library = {
// 	books: 1923,
// 	logBookCount() {
// 		console.log(this.books);
// 	}
// };

// const showBooks = library.logBookCount.bind({ books: 724 });

// showBooks();
//------------------------------------------------------------------
// "use strict";

// const library = {
// 	books: 1923,
// 	logBookCount() {
// 		console.log(this.books);
// 	}
// };

// function showBooks(callback) {
// 	callback()
// }

// showBooks(library.logBookCount);
//------------------------------------------
// "use strict";

// const library = {
// 	books: 1923,
// 	logBookCount() {
// 		console.log(this.books);
// 	}
// };

// function showBooks(callback) {
// 	callback()
// }

// showBooks(library.logBookCount.bind(library));
//----------------------------------------------------------------
                                       // Класи

// class User {
//   constructor() {
//     console.log('constructor call');
//   }
// }

// const mango = new User(); // "constructor call"
// console.log(mango); // {}
//---------------------------------------------------------------------
// class User {
//     constructor(name, email) {
//           console.log(name, email);
//     }
//   }
  
//   const mango = new User("Mango", "mango@mail.com"); // "Mango mango@mail.com"
//   console.log(mango); // {}
//-----------------------------------------------------------------------  
// Напиши клас StringBuilder, який приймає один параметр initialValue — довільний рядок, який записується у приватну властивість value об'єкта, що створюється.

// Оголоси наступні методи класу:

// getValue() — повертає поточне значення приватної властивості value.
// padEnd(str) — отримує параметр str (рядок) і додає його в кінець значення приватної властивості value об'єкта, який викликає цей метод.
// padStart(str) — отримує параметр str (рядок) і додає його на початок значення приватної властивості value об'єкта, який викликає цей метод.
// padBoth(str) — отримує параметр str (рядок) і додає його на початок і в кінець значення приватної властивості value об'єкта, який викликає цей метод.
// // Візьми код нижче з ініціалізацією екземпляра й викликами методів і встав його після оголошення класу для перевірки коректності роботи. У консоль будуть виведені результати їх роботи. Будь ласка, нічого там не змінюй.

// class StringBuilder {
//     #value;
//     constructor(initialValue){
//         this.#value = initialValue;
//     }
//     getValue(){
//         return this.#value;
//     }
//     padEnd(str){
//         this.#value += str;
//     }
//     padStart(str){
//         this.#value = str + this.#value;
//     }
//     padBoth(str){
//         this.#value = str + this.#value + str;
//     }
// }

// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="
// // // //--------------------------------------------------------------------
// class MyClass {
// 	static b = 5;

// 	constructor(value) {
// 		this.a = value;
// 	}
// }

// const instance = new MyClass(10);
// console.log(instance.b); // underfined
//--------------------------------------------------------------------
// Уявімо, що вище є оголошення класу User

// class User {
//     #email;
  
//     constructor(email) {
//       this.#email = email;
//     }
  
//     get email() {
//       return this.#email;
//     }
  
//     set email(newEmail) {
//       this.#email = newEmail;
//     }
//   }

// class ContentEditor extends User {
//     constructor(params) {
//       super(params.email);
//       this.posts = params.posts;
//     }
  
//     addPost(post) {
//       this.posts.push(post);
//     }
//   }
  
//   const editor = new ContentEditor({ 
//       email: "mango@mail.com", 
//       posts: [] 
//   });
  
//   console.log(editor); // { #email: "mango@mail.com", posts: [], addPost: f }
  
//   editor.addPost("post-1");
//   editor.addPost("post-2");
//   console.log(editor.posts); // ['post-1', 'post-2']
//   //-----------------------------------------------------------------------
  