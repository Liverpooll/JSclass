// var 출석부 = ['흥민', '영희', '철수', '재석'];

// function 이름찾기(ab){
//   for (let i = 0; i < 출석부.length; i++) {
//     if (출석부[i] == ab) {
//       return '있어요'
//   } 
// }
// }

// console.log(이름찾기('류현'));


//  for(let i = 2; i < 10; i++) {
//    for(let j = 1; j < 10; j++) {
//      console.log(i * j);
//    }
//  }



// function 평균판별기 (a, b) {
//   let result = 0;
//   let fin = 0;

//   for (let i = 0; i < a.length; i++) {
//     result = result + a[i];
//   }

//   if (result/a.length < b) {
//     fin = b - result/a.length;
//     console.log('와 평균보다' + fin + '점이나 올랐네요');
//   } else {
//     fin = result / a.length - b;
//     console.log('같거나 ' + fin + '점 떨어졌네요 재수추천')
//   }
// }

// 평균판별기([20,20,20], 50);



function solution(arr){  
  let answer;
  answer = arr.filter(function(v, i) {
    return arr.indexOf(v)===i;
  });
  return answer;
}

