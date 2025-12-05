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

      //modify

      //delete
}

function insert() {
  document.getElementById("firstRow").innerHTML =
    '<tr>' +
      '<form name="insertForm" onsubmit="return validateForm()"' +
        '<td>' +
          '<label for="fname">Inserire Nome Prodotto:</label><br>' +
          '<input type="text" id="fname" name="fname" required/><br>' +
        '</td>' +
        '<td>' +
          '<label for="quantity">Inserire Quantit&aacute;:</label><br>' +
          '<input type="text" id="quantity" name="quantity"/><br>' +
        '</td>' +
        '<td>' +
          '<label for="category">Inserire Categoria:</label><br>' +
          '<input type="text" id="category" name="category"/><br>' +
        '</td>' +
        '<td>' +
          '<label for="price">Inserire Prezzo:</label><br>' +
          '<input type="number" id="price" name="price"/><br>' +
        '</td>' +
        '<td>' +
          '<input type="submit" value="Submit">' +
        '</td>' +
      '</form>' +
  '</tr>';
}

function validateForm() {
  let form = document.forms['insertForm'];
  product = new Product(form['fname'], form['quantity'], form['category'], form['price']);
}