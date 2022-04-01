var products = [
  { id : 0, price : '가격 : 70000', title : 'Blossom Dress' },
  { id : 1, price : 50000, title : 'Springfield Shirt' },
  { id : 2, price : 60000, title : 'Black Monastery' }
];

for (let i = 0; i < 3; i++) {
  document.querySelectorAll('.card-body h5')[i].innerHTML = products[i]['title']
  document.querySelectorAll('.card-body p')[i].innerHTML = products[i].price
}

$.get('https://codingapple1.github.io/price.json').done(function(data){
  console.log(data.price)
}).fail(function(){
  console.log('실패함')
})
