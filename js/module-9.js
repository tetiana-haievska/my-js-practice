sessionStorage.setItem('user-id', '123');
sessionStorage.setItem(
  'tickets',
  JSON.stringify({ from: 'Lviv', to: 'Kyiv', quantity: 2 })
);
console.log(sessionStorage); // Storage{user-id: '123', tickets: '{"from":"Lviv","to":"Kyiv","quantity":2}', length: 2}

//-----------------------------------------------------------------------------------------
const userId = sessionStorage.getItem("user-id");
console.log(userId); // "123"

const tickets = JSON.parse(sessionStorage.getItem("tickets"));
console.log(tickets); // { from: "Lviv", to: "Kyiv", quantity: 2 }
//-----------------------------------------------------
sessionStorage.removeItem("tickets");
console.log(sessionStorage);

sessionStorage.clear();
console.log(sessionStorage);
//------------------------------------------------------------
