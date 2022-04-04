

let 버튼 = $('.tab-button');

for (let i = 0; i < 3; i++){
  버튼.eq(i).on('click', function(){
    버튼.removeClass('orange');
    버튼.eq(i).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(i).addClass('show');
  });

}

let car = ['소나타', 50000, 'white'];
let car2 = {name : '소나타', price: 50000}




let pants = [28, 30, 32];
let shirts = [95, 100];
let a = document.querySelectorAll('.form-select');


// a[0].addEventListener('input', function() {
//   if (a[0].value == '셔츠') {
//     a[1].classList.remove('form-hide')
//   } else if (a[0].value == '바지') {
//     a[1].classList.remove('form-hide');
//     pants.forEach(function(b, i){
//      a[1].innerHTML = "<option>" + b + "</option>"
//      a[1].innerHTML = "<option>" + b + "</option>"
//      a[1].innerHTML = "<option>" + b + "</option>"
//   })
//   }
// });


a[0].addEventListener('input', function() {
   if (a[0].value == '바지') {
    a[1].classList.remove('form-hide');
    let str = '';
    for (let i = 0; i < pants.length; i++) {
      str = str + "<option>" + pants[i] + "</option>"}
      a[1].classList.remove('form-hide');}
    else if (a[0].value == '셔츠') {
     a[1].innerHTML = str;
    str = '';
    for (let i = 0; i < shirts.length; i++) {
      str = str + "<option>" + shirts[i] + "</option>"
    } a[1].innerHTML = str;}
    else if (a[0].value == '모자') {
      a[1].classList.add('form-hide');
    }
  }

);


