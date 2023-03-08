const maxsulotlar = document.querySelector(".maxsulotlar");

function getCartProduct({ image, description, price, discount, id, quantity }) {
  return `
   <div class="max_item">
        <div class="card_img"><img src="${image}" alt=""></div>
        <div class="card_information">
          <p class="inf">${description}</p>
          <p class="inf_p"><b>${price}₽</b>за шт. <span>-${discount}%</span> </p>
        </div>
        <div class="card_price">
          <div class="btn_shop">
            <button onclick="changeQuantity('-', ${id})">-</button>
            <span>${quantity}</span>
            <button onclick="changeQuantity('+', ${id})">+</button>
          </div>
          <h3>${(sum = quantity * (price - discount * (price / 100)))}₽</h3>
        </div>
      </div>
  `;
}

cart.forEach((el) => {
  maxsulotlar.innerHTML += getCartProduct(el);
});

/////table

////////////////////////

function changeQuantity(status, id) {
  let product = cart.find((el) => el.id == id);
  if (status == "-") {
    if (product.quantity == 1) {
      cart = cart.filter((el) => el.id != id);
    }
  }
  cart = cart.map((el) => {
    if (el.id === id) {
      status == "+" ? el.quantity++ : el.quantity--;
    }
    return el;
  });
  localStorage.setItem("cart", JSON.stringify(cart));
  // window.location.reload();
  window.location.reload();
}

function addProductToCard(id) {
  let product = products.find((product) => product.id === id);
  if (cart.find((el) => el.id == id)) {
    cart = cart.map((el) => {
      if (el.id == id) {
        el.quantity++;
      }
      return el;
    });
  } else {
    product.quantity = 1;
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  getCart();
}
