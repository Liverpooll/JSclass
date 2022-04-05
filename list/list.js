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
  <button class="buy">구매</button>
  </div>`;
  document.querySelector('.row').innerHTML = inner + 탬플릿;
})

document.querySelector('#price').addEventListener('click', function(){
  products.sort(function(a, b){
    return a.price - b.price 
  });
  document.querySelector('.row').innerHTML = ''
  products.forEach((a, i)=>{
    let inner = document.querySelector('.row').innerHTML
    let 탬플릿 = 
    `<div class="col-sm-4">
    <img style="width : 200px;" src="https://via.placeholder.com/600" class="w-100">
    <h5>${products[i].title}</h5>
    <p>${products[i].price}</p>
    <button class="buy">구매</button>
    </div>`;
    document.querySelector('.row').innerHTML = inner + 탬플릿;
  })
});

document.querySelector('#more').addEventListener('click', function(){
$.get('https://codingapple1.github.io/js/more1.json').done((data)=>{
  console.log(data);

  products.forEach((a, i)=>{
    let inner = document.querySelector('.row').innerHTML
    let 탬플릿 = 
    `<div class="col-sm-4">
    <img style="width : 200px;" src="https://via.placeholder.com/600" class="w-100">
    <h5>${data[i].title}</h5>
    <p>${data[i].price}</p>
    </div>`;
    document.querySelector('.row').innerHTML = inner + 탬플릿;
  })
})
})


document.querySelector('#danaga').addEventListener('click', function(){
  products.sort(function(a, b){
    if (a.title > b.title) return -1
  });
  document.querySelector('.row').innerHTML = ''
  products.forEach((a, i)=>{
    let inner = document.querySelector('.row').innerHTML
    let 탬플릿 = 
    `<div class="col-sm-4">
    <img style="width : 200px;" src="https://via.placeholder.com/600" class="w-100">
    <h5>${products[i].title}</h5>
    <p>${products[i].price}</p>
    <button class="buy">구매</button>
    </div>`;
    document.querySelector('.row').innerHTML = inner + 탬플릿;
  })
});

document.querySelector('#at-most').addEventListener('click', function(){
  let pproducts = products.filter(a => a.price <= 60000 
  );
  document.querySelector('.row').innerHTML = ''
  pproducts.forEach((a, i)=>{
    let inner = document.querySelector('.row').innerHTML
    let 탬플릿 = 
    `<div class="col-sm-4">
    <img style="width : 200px;" src="https://via.placeholder.com/600" class="w-100">
    <h5>${pproducts[i].title}</h5>
    <p>${pproducts[i].price}</p>
    <button class="buy">구매</button>
    </div>`;
    document.querySelector('.row').innerHTML = inner + 탬플릿;
  })
});


// let arr = [1,2,3];
// let new_arr = JSON.stringify(arr);
// localStorage.setItem('류', new_arr);

// var 꺼낸거 = localStorage.getItem('류');
// 꺼낸거 = JSON.parse(꺼낸거);
// console.log(꺼낸거);

for (let i = 0; i < 3; i++){
document.querySelectorAll('.buy')[i].addEventListener('click', function(e){
  var title = e.target.previousElementSibling.previousElementSibling.innerHTML;
  if (localStorage.getItem('cart') != null) {
    let out =JSON.parse(localStorage.cart)
    out.push(title);
    localStorage.setItem('cart', JSON.stringify(out));
  } 
  else {
  localStorage.setItem('cart', JSON.stringify([title]))
}})
};

// $('.buy').click(function(e){
//   var title = $(e.target).siblings('h5').text();

//   if (localStorage.getItem('cart') != null) {
//     let 꺼낸거 = JSON.parse(localStorage.cart)
//     꺼낸거.push(title);
//     localStorage.setItem('cart', JSON.stringify(꺼낸거));

//   }
//   else {
//   localStorage.setItem('cart', JSON.stringify([title]))
//   }
// });