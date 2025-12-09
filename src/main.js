/*
* A pagina nuova, tutto vuoto a parte l'intestazione della tabella
* Counter dei TR per eliminare tutte le righe, mi prendo l'id di quelli che devo eliminare in caso
*
*
* */

const products = [];
const valdationInsert = 'insert';
const validationUpdate = 'update';
let AUTO_INCREMENT = 0;
let temporaryROWINDEX;


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

  for(let element of form.elements) {
    console.log(element.value);
  }

  if (validateForm(form, valdationInsert) === true) {
    console.log("User Insert Values, Insert ROW");

    AUTO_INCREMENT += 1
    product = new Product(form.elements['fnameInsert'].value,
      form.elements['quantityInsert'].value,
      form.elements['categoryInsert'].value,
      form.elements['priceInsert'].value);

    let idProduct = product.idProduct;

    //add the row to the table
    document.getElementById("tbody").innerHTML +=
      "<tr id='rowNumber" + idProduct + "'>" +
        "<td>" + product['name'] + "</td>" +
        "<td>" + product['quantity'] + "</td>" +
        "<td>" + product['category'] + "</td>" +
        "<td>" + product['price'] + "</td>" +
        "<td>" + product['date'] + "</td>" +
        "<td><button id='updateRow"+ idProduct + "' onclick='updateProductForm(\"" + idProduct + "\")'>UPDATE ROW</button></td>" +
        "<td><button id='deleteRow"+ idProduct + "' onclick='deleteProduct(\"" + idProduct + "\")'>DELETE ROW</button></td>" +
      "</tr>";

      products.push(product); // add the product, keeps track for deleting
      //console.log(products);
      form.reset();

  } else {
    alert("Errore nell'inserimento dati");
    form.reset();
  }
}

function updateProductForm(rowIndex) {
  console.log("User choose to update value: " + rowIndex);

  // find product to update
  let indexObject = findIndex(rowIndex);

  //save to temporarily the id of the line to get rid of
  temporaryROWINDEX = rowIndex;

  //show update form
  document.getElementById("update").innerHTML =
    "<form id=\"updateForm\" onsubmit=\"updateValues(event)\">" +
    "<label for=\"update\" id=\"update\">Modifica Elemento:</label><br>" +
    "<label for=\"fnameUpdate\">Nome</label>" +
    "<input type=\"text\" id=\"fnameUpdate\" name=\"fnameUpdate\" placeholder=" + products[indexObject]['name'] + " required>" +

    "<label for=\"quantityUpdate\">Quantit&aacute;</label>" +
    "<input type=\"number\" id=\"quantityUpdate\" name=\"quantityUpdate\" placeholder=" + products[indexObject]['quantity'] + " required><br>" +

    "<label for=\"categoryUpdate\">Categoria</label>" +
    "<input type=\"text\" id=\"categoryUpdate\" name=\"categoryUpdate\" placeholder=" + products[indexObject]['category'] + " required>" +

    "<label for=\"priceUpdate\">Prezzo Unitario</label>" +
    "<input type=\"number\" id=\"priceUpdate\" name=\"priceUpdate\" placeholder=" + products[indexObject]['price'] + " required><br>" +
    "<input type=\"submit\" value=\"Modifica\">" +
    "</form>";
}

function updateValues(event){
  event.preventDefault(); //don't reload page

  let rowIndex = String(temporaryROWINDEX);
  let indexObject = findIndex(rowIndex);
  let rowNewIndex = String(AUTO_INCREMENT + 1);
  let fullName = "rowNumber" + rowIndex;
  console.log(fullName);
  let rowToDelete = document.getElementById(fullName);
  let form = document.forms['updateForm']; // get the data from the form

  //delete old row and form
  rowToDelete.remove();
  form.remove();


  for(let element of form.elements) {
    console.log(element.value);
  }

  console.log("Validation");
  if (validateForm(form, validationUpdate) === true) {
    console.log("User Insert New Values, Update ROW");

    //changing the values in the new ones
    products[indexObject]['name'] = form.elements['fnameUpdate'].value;
    products[indexObject]['quantity'] = form.elements['quantityUpdate'].value;
    products[indexObject]['price'] = form.elements['priceUpdate'].value;
    products[indexObject]['category'] = form.elements['categoryUpdate'].value;
    products[indexObject]['date'] = new Date();


    //add the row to the table
    document.getElementById("tbody").innerHTML +=
        "<tr id='rowNumber" + rowNewIndex + "'>" +
          "<td>" + products[indexObject]['name'] + "</td>" +
          "<td>" + products[indexObject]['quantity'] + "</td>" +
          "<td>" + products[indexObject]['category'] + "</td>" +
          "<td>" + products[indexObject]['price'] + "</td>" +
          "<td>" + products[indexObject]['date'] + "</td>" +
          "<td><button id='updateRow"+ rowNewIndex + "' onclick='updateProductForm(\"" + rowNewIndex + "\")'>UPDATE ROW</button></td>" +
          "<td><button id='deleteRow"+ rowNewIndex + "' onclick='deleteProduct(\"" + rowNewIndex + "\")'>DELETE ROW</button></td>" +
        "</tr>";

  } else {
    alert("Errore nell'inserimento dati");
    form.reset();
  }
}


function deleteProduct(idProduct) {
  console.log("User choose to delete value: " + idProduct);

  let rowId = "rowNumber" + idProduct;
  let row = document.getElementById(rowId);
  row.remove() //remove line

  // find product to delete
  let indexObject = findIndex(idProduct);
  products.splice(indexObject, 1);

  console.log(products);
}


function validateForm(formElements, typeValidation) {
  let fname, quantity, price;
  switch (typeValidation) {
    case 'insert':
      fname = formElements.elements['fnameInsert'].value;
      quantity = Number(formElements.elements['quantityInsert'].value);
      price = Number(formElements.elements['priceInsert'].value);
      break;
    case 'update':
      fname = formElements.elements['fnameUpdate'].value;
      quantity = Number(formElements.elements['quantityUpdate'].value);
      price = Number(formElements.elements['priceUpdate'].value);
      break;
    default:
      console.log("Errore nell'inserimento dati");
      return false;
  }


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

// find the index of the object
function findIndex(rowIndex){
  for(let i=0; i<products.length; i++){
    if(products[i]['idProduct'] === Number(rowIndex)){
      return i;
    }
  }
}
