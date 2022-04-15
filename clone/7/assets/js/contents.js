/***********************
 * @filename: contents.js
 * @author: 방미소
 * @description: section1 각 article 영역에 백엔드에서 읽어온 컨텐츠를 출력한다.
***********************/
import {popupHandler} from './animation.js';

/* 
* type          : function
* description   : HTML 요소 신규 생성 및 속성 부여
* param         : HTML 요소명 / 속성명 / 속성값
*/
const createElement = (item, property = null, value = null) => {
  let a = document.createElement(item);
  if(property && value) {
    a.setAttribute(property, value);
  }
  return a;
}

/* 
* type          : function
* description   : article.main-ntc 영역에 컨텐츠 작성
* param         : article.json > news
*/
const getNtcWrap = (data) => {
  let count = 0;
  const ul = createElement('ul');
  
  Array.from(data).forEach( v => {
    const li= createElement('li', 'class', 'wrap-item');
    const a = createElement('a', 'href', v.url);
    const img = createElement('img', 'src', `${v.img}.png`);
    const div2 = createElement('div');
    const p = createElement('p', 'class', 'art-item-cate');
    const h3 = createElement('h3', 'class', 'art-item-tit');

    p.innerHTML = v.category;
    h3.innerHTML = v.title;

    div2.appendChild(p);
    div2.appendChild(h3);
    a.appendChild(img);
    a.appendChild(div2);
    li.appendChild(a);
    ul.appendChild(li);

    count++;

    if (count === 2) {
      const div = createElement('div', 'class', 'wrap');
      div.appendChild(ul);
      document.querySelector('.main-ntc').appendChild(div);
    }
  });
}

/* 
* type          : function
* description   : article.main-art 영역에 컨텐츠 작성
* param         : article.json > news
*/
const getArtWrap = (data) => {
  // count(li 개수 카운트), wrapCount(div 개수 카운트)
  let count = 0, wrapCount = 0; 

  // ul 생성(li 3개 단위로 신규 생성)
  let ul = null;

  Array.from(data).forEach( v => {
    if (count === 0) {
      ul = createElement('ul');
    }

    const li = createElement('li');
    const a = createElement('a', 'href', v.url);
    const img = createElement('img', 'src', `${v.img}.png`);
    const p = createElement('p', 'class', 'art-item-cate');
    const h3 = createElement('h3', 'class', 'art-item-tit');

    p.innerHTML = v.category;
    h3.innerHTML = v.title;
    
    a.appendChild(img);
    a.appendChild(p);
    a.appendChild(h3);
    li.appendChild(a);
    ul.appendChild(li);

    count++;

    if (count > 2) {
      count = 0;
      wrapCount = ++wrapCount % 3 === 0 ? 3 : wrapCount % 3;

      const div = createElement('div', 'class', 'wrap');
      div.classList.add(`w-type${wrapCount}`)
      div.appendChild(ul);
      document.querySelector('.main-art').appendChild(div);
    }
  });
}

/* 
* type          : function
* description   : article.main-scl 영역에 컨텐츠 작성
* param         : article.json > social
*/
const getSclWrap = (data) => {
  // count(li 개수 카운트), wrapCount(div 개수 카운트)
  let count = 0, wrapCount = 0; 

  // ul 생성(li 3개 단위로 신규 생성)
  let ul = null;

  Array.from(data).forEach( v => {
    if (count === 0) {
      ul = createElement('ul');
    }

    const li = createElement('li', 'class', 'popup-item');
    const a = createElement('a', 'href', v.url);
    const img = createElement('img', 'src', `${v.img}.png`);
    const div = createElement('div', 'class', 'popup-box');
    const p1 = createElement('p', 'class', 'pop-content');
    const p2 = createElement('p', 'class', 'hash');
    const span = createElement('p', 'class', 'insta-icon');

    p1.innerHTML = v.content;
    p2.innerHTML = v.hash;
    
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(span);
    a.appendChild(img);
    a.appendChild(div);
    li.appendChild(a);
    ul.appendChild(li);

    count++;

    if (count > 2) {
      count = 0;
      wrapCount = ++wrapCount % 3 === 0 ? 3 : wrapCount % 3;

      const div2 = createElement('div', 'class', 'wrap');
      div2.appendChild(ul);
      document.querySelector('.main-scl').appendChild(div2);
    }
  });
}

/* 
* type          : function (async)
* description   : 백엔드에서 데이터를 전송받아 필요한 함수 호출
* param         : -
*/
(async e => {
  let json = null;

  try {
    json = await axios.get('https://smilemet.github.io/portfolio/clone/backend/article.json');
  } catch (e) {
    alert('데이터 전송 중 에러가 발생하였습니다.');
    return;
  }

  let {data} = json; 
  getNtcWrap(data.main);
  getArtWrap(data.news);
  getSclWrap(data.social);
  popupHandler();
})();