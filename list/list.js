var products = [
  { id : 0, price : 70000, title : 'Blossom Dress' },
  { id : 1, price : 50000, title : 'Springfield Shirt' },
  { id : 2, price : 60000, title : 'Black Monastery' }
];

products.forEach((a, i)=>{
  let inner = document.querySelector('.row').innerHTML
  let 탬플릿 = 
  `<div class="col-sm-4">
  <img style="width : 200px;" src="https://via.placeholder.com/600" class="w-100">
  <h5>${products[i].title}</h5>
  <p>${products[i].price}</p>
  </div>`;
  document.querySelector('.row').innerHTML = inner + 탬플릿;
})




