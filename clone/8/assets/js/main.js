/***********************
 * @filename: main.js
 * @author: 방미소
 * @description: main 영역에 이벤트 핸들러 
***********************/
/**
 * 집에 가면 수정할 목록
 * index.html : 타이틀 이미지 item -> abs1, 2, 3으로 바꿔줄 것
 * h3 : id="menu" 추가해줄 것
 */
import {} from '';

/**
 * type          : Event Handler
 * description   : 메인메뉴 event 시 서브메뉴 여닫기
 * param         : 이벤트 타겟 / 표시할 메뉴 / 열기 이벤트 / 닫기 이벤트
 */
const subMenuPopUp = (target, sub, event1, event2) => {
  const targets = Array.from(document.querySelectorAll(target));
  const subs = Array.from(document.querySelectorAll(sub));

  // 마우스 오버 시 서브메뉴 열기
  Array.from(targets).forEach((v, i) => {
    v.addEventListener(event1, () => {
      subs[i].style.maxHeight = subs[i].scrollHeight + 'px';
    });
  })

  // 마우스 아웃 시 서브메뉴 닫기
  Array.from(targets).forEach((v, i) => {
    v.addEventListener(event2, e => {
      subs[i].style.maxHeight = 0;
    });
  })
}

subMenuPopUp('#menu', '#sub-menu', 'mouseover', 'mouseout'); // 상단메뉴
subMenuPopUp('', '', 'click', 'click'); // 프로모션


/**
 * type          : Event Handler
 * description   : 시간차 롤업
 * param         : -
 */
const listRollUp = (list) => {
  const listName = document.querySelector(list);
  const listItems = Array.from(listName.getElementsByTagName('li'));
  
  let i = 0;
  setInterval(() => {
    listItems[i].style.maxHeight = '0';
    listItems[i+1].style.maxHeight = listItems[i+1].style.scrollHeight + 'px';
    i = ++i % listItems.length;
  }, 1000); 
}

listRollUp('#notice-list'); // 공지사항


/**
 * type          : Event Handler
 * description   : 시간차 슬라이드
 * param         : -
 */
// https://splidejs.com/ 참고


/**
 * type          : Event Handler
 * description   : 시간차 롤업
 * param         : -
 */