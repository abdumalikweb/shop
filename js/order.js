const elListProd = document.querySelector(".order-list");

const productsLocal = JSON.parse(localStorage.getItem("products"));

function renderProducts(arr, node) {
  arr.forEach((item) => {
    node.innerHTML += `
      <div class="card_item">
           <div class="card_head"> <img src="${item.image}" alt="">
          <span class="discount">-${item.discount}%</span>
          <span class="like">&#10084</span>
        </div>
            <div class="card_body">
              <p class="price"> <del>${item.price}₽</del> <span> 20₽
  </span> </p>
              <p class="description">${item.description}</p>
              <p class="rating">${getRating(item.rating)}</p>
              <button " onclick = "addProductToCard(${
                item.id
              })"><p>В корзину</p></button>
            </div>
          </div>
  `;
  });
}

renderProducts(productsLocal, elListProd);

function getRating(rating) {
  let res = "";
  let star_count = 0;
  let full_star = parseInt(rating);
  let rest_star = rating - full_star;
  star_count = full_star;
  res = Array(full_star).fill("<img src='../images/card/full.svg'>").join("");
  if (0.25 <= rest_star && rest_star <= 0.5) {
    star_count++;
    res += "<img src='../images/card/half.svg'>";
  }
  if (0.5 < rest_star) {
    star_count++;
    res += "<img src='images/star-full.svg'>";
  }
  free_star = 5 - star_count;
  res += Array(free_star).fill("<img src='../images/card/empty.svg'>").join("");
  return res;
}

function addProductToCard(id) {
  let product = products.find((product) => product.id === id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  getCarts();
}
function addProductToCard(id) {
  let product = products.find((product) => product.id == id);
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
