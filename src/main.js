/*
* A pagina nuova, tutto vuoto a parte l'intestazione della tabella
* Counter dei TR per eliminare tutte le righe, mi prendo l'id di quelli che devo eliminare in caso
*
*
* */


class Product {
      constructor(name, quantity, category, price) {
        this.name = name;
        this.quantity = quantity;
        this.category = category;
        this.price = price;
        this.date = new Date();
      }
}

function onchangeOption(){
  const value = document.getElementById("options").value;

  if (value === "insert"){
    console.log("Lorenzo is a transgender")
  }else if(value === "modify"){
    console.log("Stiz is a transgender")
  }else if (value === "delete"){
    console.log("Richie loves womens")
  }
}


function insertProduct() {
  return null;
}

function updateProduct() {
  return null;
}

function deletePr() {
  return null;
}

function validateForm() {
  let form = document.forms['insertForm'];
  product = new Product(form['fname'], form['quantity'], form['category'], form['price']);
}