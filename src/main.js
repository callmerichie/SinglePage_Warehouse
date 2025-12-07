/*
* A pagina nuova, tutto vuoto a parte l'intestazione della tabella
* Counter dei TR per eliminare tutte le righe, mi prendo l'id di quelli che devo eliminare in caso
*
*
* */

const products = [];
let AUTO_INCREMENT = 0;


class Product {
      constructor(name, quantity, category, price) {
        this.idProduct = AUTO_INCREMENT
        this.name = name;
        this.quantity = quantity;
        this.category = category;
        this.price = price;
        this.date = new Date();
      }
}

//showing which form the user will use
/*
function onchangeOption(){
  const value = document.getElementById("options").value;
  switch(value){
    case "insert":
      console.log("User choose to insert value, show insertForm");
      break;
    case "update":
      console.log("User choose to update value, show updateForm");
      break;
    case "delete":
      console.log("User choose to delete value");
      break;
  }
}
 */

function insertProduct(event) {
  event.preventDefault(); //don't reload page

  console.log("Validation");
  let form = document.forms['insertForm']; // get the data from the form
  console.log(form);

  if (validateForm(form) === true) {
    console.log("User Insert Values, Insert ROW");

    AUTO_INCREMENT += 1
    product = new Product(form.elements['fnameInsert'].value,
      form.elements['quantityInsert'].value,
      form.elements['categoryInsert'].value,
      form.elements['priceInsert'].value);

    let idProduct = product.idProduct;

    //add the row to the table
    document.getElementById("tbody").innerHTML +=
      "<tr id='rowNumber" + idProduct + "'><td>" + product['name'] + "</td>" +
      "<td>" + product['quantity'] + "</td>" +
      "<td>" + product['category'] + "</td>" +
      "<td>" + product['price'] + "</td>" +
      "<td>" + product['date'] + "</td>" +
      "<td><button id='updateRow"+ idProduct +"' onclick='updateProduct(\"" + idProduct + "\")'>UPDATE ROW</button></td>" +
      "<td><button id='deleteRow"+ idProduct +"' onclick='deleteProduct(\"" + idProduct + "\")'>DELETE ROW</button></tr>";

      products.push(product); // add the product, keeps track for deleting
      //console.log(products);
      form.reset();

  } else {
    alert("Errore nell'inserimento dati");
    form.reset();
  }
}

function updateProduct(idProduct) {
  console.log("User choose to update value: " + idProduct);
}

function deleteProduct(idProduct) {
  console.log("User choose to delete value: " + idProduct);

  let rowId = "rowNumber" + idProduct;
  let row = document.getElementById(rowId);
  row.remove() //remove line

  // find product to delete
  for(let i=0; i<products.length; i++) {

    console.log(products[i]);

    if (products[i]['idProduct'] === Number(idProduct)) {
      products.splice(i, 1);
      break;
    }
  }

  console.log(products);
}

function validateForm(formElements) {
  let fname = formElements.elements['fnameInsert'].value;
  let quantity = Number(formElements.elements['quantityInsert'].value);
  let price = Number(formElements.elements['priceInsert'].value);

  if(validateFname(fname)===true && validateQuantity(quantity)===true && validatePrice(price)===true){
    return true;
  }else{
    return false;
  }
}

function validateFname(nameProduct){
  if(nameProduct === ''){
    return false;
  }
  return true;
}

function validateQuantity(quantity){
  if(quantity < 1){
    return false;
  }
  return true;
}

function validatePrice(price){
  if(price < 1){
    return false;
  }
  return true;
}

