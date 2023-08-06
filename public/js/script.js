let items = document.getElementById("items");

let details = document.querySelectorAll("input");

document.getElementById("submit").addEventListener("click", async (e) => {
  e.preventDefault();

  let obj = {
    name: details[0].value,
    description: details[1].value,
    price: details[2].value,
    quantity: details[3].value,
  };

  console.log(obj);

  try {
    const res = await axios.post("http://localhost:4000/add-item", obj);

    console.log(res.data.item);

    newItem(res.data.item);

    details[0].value = "";
    details[1].value = "";
    details[2].value = "";
    details[3].value = "";
  } catch (err) {
    console.log(err);
  }
});

window.addEventListener("DOMContentLoaded", async () => {
  try {
    const res = await axios.get("http://localhost:4000/get-items");
    for (var i = 0; i < res.data.items.length; i++) {
      newItem(res.data.items[i]);
    }
  } catch (err) {
    console.log(err);
  }
});

function newItem(obj) {
  let newItem = document.createElement("li");

  newItem.className = "list-group-item m-1";

  let text = document.createTextNode(
    "Name: " +
      obj.name +
      " Des: " +
      obj.description +
      " Price: " +
      obj.price + "₹"+
      " Quantity: " +
      obj.quantity
  );

  newItem.appendChild(text);

  let buyOne = document.createElement("button");
  let buyTwo = document.createElement("button");
  let buyThree = document.createElement("button");

  buyOne.className = "btn btn-dark btn-sm float-right";
  buyTwo.className = "btn btn-dark btn-sm mx-1 float-right";
  buyThree.className = "btn btn-dark btn-sm mx-1 float-right";

  buyOne.appendChild(document.createTextNode("Buy 1"));
  buyTwo.appendChild(document.createTextNode("Buy 2"));
  buyThree.appendChild(document.createTextNode("Buy 3"));

  newItem.appendChild(buyThree);
  newItem.appendChild(buyTwo);
  newItem.appendChild(buyOne);

  buyOne.onclick = async (e) => {
    let li = e.target.parentElement;

    let text = e.target.parentElement.firstChild;

    let obj2 = {
      id: obj.id,
      buy: 1,
    };
    try {
      const res = await axios.post("http://localhost:4000/buy-item", obj2);

      if (res.data.buy < 0) {
        window.location.assign("http://localhost:4000/not-available");
      }

      obj.quantity = obj.quantity - res.data.buy;

      let text2 = document.createTextNode(
        "Name: " +
          obj.name +
          " Des: " +
          obj.description +
          " Price: " +
          obj.price + "₹"+
          " Quantity: " +
          obj.quantity
      );

      li.removeChild(text);
      li.prepend(text2);
    } catch (err) {
      console.log(err);
    }
  };

  buyTwo.onclick = async (e) => {
    let li = e.target.parentElement;

    let text = e.target.parentElement.firstChild;

    let obj2 = {
      id: obj.id,
      buy: 2,
    };
    try {
      const res = await axios.post("http://localhost:4000/buy-item", obj2);

      if (res.data.buy < 0) {
        window.location.assign("http://localhost:4000/not-available");
      }

      obj.quantity = obj.quantity - res.data.buy;

      let text2 = document.createTextNode(
        "Name: " +
          obj.name +
          " Des: " +
          obj.description +
          " Price: " +
          obj.price + "₹"+
          " Quantity: " +
          obj.quantity
      );

      li.removeChild(text);
      li.prepend(text2);
    } catch (err) {
      console.log(err);
    }
  };

  buyThree.onclick = async (e) => {
    let li = e.target.parentElement;

    let text = e.target.parentElement.firstChild;

    let obj2 = {
      id: obj.id,
      buy: 3,
    };
    try {
      const res = await axios.post("http://localhost:4000/buy-item", obj2);

      if (res.data.buy < 0) {
        window.location.assign("http://localhost:4000/not-available");
      }

      obj.quantity = obj.quantity - res.data.buy;

      let text2 = document.createTextNode(
        "Name: " +
          obj.name +
          " Des: " +
          obj.description +
          " Price: " +
          obj.price + "₹"+
          " Quantity: " +
          obj.quantity
      );

      li.removeChild(text);
      li.prepend(text2);
    } catch (err) {
      console.log(err);
    }
  };

  items.appendChild(newItem);
}
