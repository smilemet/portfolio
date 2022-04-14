/***********************
 * @filename: animation.js
 * @author: 방미소
 * @description: 페이지에서 애니메이션 효과를 발생시킨다.
***********************/

/* 
* type          : Event Handler
* description   : index 페이지 section3 영역에 팝업 효과
* event         : mouseover / mouseout
*/


console.log('hello')

const popUpHandler = e => {
  e.currentTarget.querySelector('.popup-box').style.opacity = '1';
}

const popRemoveHandler = e => {
  e.currentTarget.querySelector('.popup-box').style.opacity = '0';
}

let count = 0;
const timer = setInterval(() => {
  const popupList = document.querySelectorAll('.popup-item');
  Array.from(popupList).forEach(v => {
    v.addEventListener('mouseover', e => popUpHandler(e))
    v.addEventListener('mouseout', e => popRemoveHandler(e))
  })
  count++;
  
  if (count === 1) {clearInterval(timer)}
  console.log(popupList);
}, 1000);