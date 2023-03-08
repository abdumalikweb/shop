const elList = document.querySelector(".catalog_items");

function renderCategories(arr, node) {
  arr.forEach((item) => {
    node.innerHTML += `
   <button >
    <a href="./order.html">
      <img src="${item.image}" alt=${item.name} data-id=${item.name}></a>
     
    </button>



        `;
  });
}

renderCategories(categories, elList);

elList.addEventListener("click", (evt) => {
  const productName = evt.target.getAttribute("data-id");
  const filtered = products.filter((item) => item.category === productName);
  localStorage.setItem("products", JSON.stringify(filtered));
  // console.log(filtered);
});
