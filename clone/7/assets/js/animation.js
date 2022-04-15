/***********************
 * @filename: animation.js
 * @author: 방미소
 * @description: 페이지에서 애니메이션 효과를 발생시킨다.
***********************/

/* 
* type          : function
* description   : index 페이지 section3 영역에 팝업 효과
* event         : mouseover / mouseout
*/
const popupHandler = () => {
  const popUp = e => {
    e.currentTarget.querySelector('.popup-box').style.opacity = '1';
  }
  
  const popRemove = e => {
    e.currentTarget.querySelector('.popup-box').style.opacity = '0';
  }
  
  const popupList = document.querySelectorAll('.popup-item');
  Array.from(popupList).forEach(v => {
    v.addEventListener('mouseover', e => popUp(e));
    v.addEventListener('mouseout', e => popRemove(e));
  })
}

export {popupHandler};