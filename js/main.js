let product = document.querySelector(".products");
const search = document.querySelector(".search");

////////card

function getCard(description, price, rating, discount, image, id) {
  return `
      <div class="card_item">
           <div class="card_head"> <img src="${image}" alt="">
          <span class="discount">-${discount}%</span>
          <span class="like">&#10084</span>
        </div>
            <div class="card_body">
              <p class="price"> <del>${price}₽</del> <span> ${
    price - discount * (price / 100)
  }₽</}
  </span> </p>
              <p class="description">${description}</p>
              <p class="rating">${getRating(rating)}</p>
              <button " onclick = "addProductToCard(${id})"><p>В корзину</p></button>
            </div>
          </div>
  `;
}

function getProducts(products) {
  product.innerHTML = "";
  for (el of products) {
    product.innerHTML += getCard(
      el.description,
      el.price,
      el.rating,
      el.discount,
      el.image,
      el.id
    );
  }
}
getProducts(products);
//////////////////////////////////////////////////////////////////////////

//////  reyting
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
/////////////////////////////////////////////////////////////////////////

////////////////////getcart

/////////////////////////////////////////////////////////////////////////

function addProductToCard(id) {
  let product = products.find((product) => product.id === id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  getCarts();
}

///
search.addEventListener("input", function () {
  let res = [];
  for (el of products) {
    let title = el.description.toLowerCase();
    let search = this.value.toLowerCase().trim();
    if (title.includes(search)) {
      res.push(el);
    }
  }
  getProducts(res);
});

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
