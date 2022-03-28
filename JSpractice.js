
// var counts = 5;

// setInterval(function(){
//   counts -= 1;
//   if (counts >= 0) {
//     document.querySelector('.second').innerHTML = counts;
//   } else if (counts < 0) {
//     $('.alert').hide();
//   }
// }, 1000);

$('#send-answer').on('click', function(){
  let right = document.getElementById('answer').value;
  if (right == 1335) {
    alert('성공')
  } else if (right == ''){
    alert('뭐라도 입력해봐')
  } else {
    alert('멍청아!')
  }
});



let count = 0;

$('.badge').on('click', function(){
  count++
  if (count % 2 == 1){
    document.getElementsByClassName('badge')[0].innerHTML = 'Light 🔄'
    $('.background').addClass('dark')
  } else {
    document.getElementsByClassName('badge')[0].innerHTML = 'Dark 🔄'
        $('.background').removeClass('dark')
  }
})


document.getElementById('email').addEventListener('input', function(){
  
})

let id = 'fbgus333@naver.com'
let pw = '123456'
$('form').on('submit', function(e){
  let email = document.getElementById('email').value;
  let password = document.getElementById('e-password').value;
    console.log(email)
    console.log(password)
    if (id === email && pw === password) {
      console.log('success')
      return true 
    }else {
      console.log('fail')
      if (email == ''){
      alert('아이디를 입력해주세요')}
      if (/\S+@\S+\.\S+/.test(email) ){
        alert('이메일형식아님')
        e.preventDefault()}
      else if (password == ''){
      alert('비밀번호를 입력해주세요')}
      else if (password.length < 6){
      alert('비밀번호를 6자 이상으로 입력해주세요')}
      else if (password != pw){
      alert('비밀번호가 정확하지 않습니다.');
      }      
    return false;
      }
    }
    
      );

      $('#login').on('click', function(){
        $('.black-bg').addClass('show-modal')
      });

      $('#close').on('click', function(){
        $('.black-bg').removeClass('show-modal')
      });

  $('.navbar-toggler').on('click',
   function() {
   document.querySelectorAll('.list-group')[0].classList.toggle('show');
 })
