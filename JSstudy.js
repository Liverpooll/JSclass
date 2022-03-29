
// menu-bar 없애기

var counts = 5;

setInterval(function(){
  counts -= 1;
  if (counts >= 0) {
    document.querySelector('.second').innerHTML = counts;
  } else if (counts < 0) {
    $('.alert').hide();
  }
}, 1000);
// menu-bar 없애기

// 내가 태어난 년도  맞추기

  $('#send-answer').on('click', function(){
    let right = document.getElementById('answer').value;
    if (right == 1994) {
      alert('성공')
    } else if (right == ''){
      alert('뭐라도 입력해봐')
    } else {
      alert('멍청아!')
    }
  });

// 내가 태어난 년도  맞추기

// 다크모드 

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
// 다크모드 

  
//로그인 
  let id = 'fbgus333@naver.com'
  let pw = '123456'
  $('form').on('submit', function(){
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
        else if (/\S+@\S+\.\S+/.test(email) == false){
        alert('이메일형식이 아님')}
        else if (password == ''){
        alert('비밀번호를 입력해주세요')}
        else if (password.length < 6){
          alert('비밀번호를 6자 이상으로 입력해주세요')}
          else if (/[A-Z]/.test(password)){
            alert('대문자 입력 ㄴㄴ')}      
        else if (password != pw){
        alert('비밀번호가 정확하지 않습니다.');}
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

//로그인 

 // 슬라이드 버튼


 
 $('.slide-1').on('click', function(){
  $('.slide-container').css('transform', 'translateX(0vw)');
})

 $('.slide-2').on('click', function(){
   $('.slide-container').css('transform', 'translateX(-100vw)');
 })
   


$('.slide-3').on('click', function(){
  $('.slide-container').css('transform', 'translateX(-200vw)');
})

// 슬라이드 버튼

// 캐러셀

var currentShowing = 1;

$('.next').on('click', function(){
  if(currentShowing == 1) {
    $('.slide-container').css('transform', 'translateX(-100vw)');
  currentShowing += 1;}
    else if (currentShowing == 2) {
      $('.slide-container').css('transform', 'translateX(-200vw)');
      currentShowing += 1;}
  });

 currentShowing = 3;

$('.before').on('click', function(){
  if(currentShowing == 3) {
    $('.slide-container').css('transform', 'translateX(-100vw)')
  currentShowing -= 1;}
    else if (currentShowing == 2) {
      $('.slide-container').css('transform', 'translateX(0vw)')
      currentShowing -= 1;}
  });

  // 캐러셀
  // 헤더 사이즈 변경

  $(window).on('scroll', function(){
    if (window.scrollY > 100) {
     $('.navbar-brand').css('font-size', '20px');
   }
    });

    $(window).on('scroll', function(){
      if (window.scrollY < 100) {
       $('.navbar-brand').css('font-size', '30px');
     }
      });

//  window.addEventListener('scroll', function(){
//   console.log( window.scrollY )
// });

  // 헤더 사이즈 변경
  // Lorem 스크롤이벤트
$('.Lorem').on('scroll', function(){
  var 스크롤양 = document.querySelector('.Lorem').scrollTop;
  var 실제높이 = document.querySelector('.Lorem').scrollHeight;
  var 현재높이 = document.querySelector('.Lorem').clientHeight;
  if (스크롤양 + 현재높이 > 실제높이 - 1) {
    alert('다 읽음');
  }
});
  // Lorem 스크롤이벤트
  // window 스크롤이벤트


  $(window).on('scroll', function(){
  var 바디양 = document.querySelector('html').scrollTop;  
  var 바디실높이 = document.querySelector('html').scrollHeight;
  var 바디현재높이 = document.querySelector('html').clientHeight; 
  if (바디양 + 바디현재높이 > 바디실높이 - 1) {
    alert('바디 다읽음');
  }
});


  // window 스크롤이벤트