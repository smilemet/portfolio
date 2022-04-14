Array.from(document.querySelectorAll('*[data-include]')).map(async v => {

  const include = v.dataset.include;
  let html = null;

  try {
    const res = await axios.get(include);
    html = res.data;
  } 
  catch (e) {
    console.error(e);
  }

  if (html !== null) {
    v.innerHTML = html;
  }

  // nav JS
  if (include.includes('aside_ko.html') || include.includes('aside_en.html')) {
    
    /* 
    * type          : function
    * description   : 시각화 메뉴 원상복귀 (영역 삭제)
    */
    const subMenuRemover = () => {
      document.querySelector('.nav-sub').style.maxHeight = 0;
      document.querySelector('.nav-sub').style.borderTop = 'none'
      document.querySelector('.nav-sub').style.borderBottom = 'none'
    }

    const langRemover = () => {
      document.querySelector('#lang-btn')
      .parentElement.querySelector('.lang-list')
      .classList.add('hide');
    }

    const searchRemover = () => {
      document.querySelector('.nav-search').style.maxHeight = 0;
      document.querySelector('.dimmed').classList.add('hide');
    }

    /* 
    * type          : Event Handler
    * description   : 서브 메뉴 시각화
    * param         : 이벤트 객체, 메뉴 인덱스, 메뉴 총 길이
    * p-description : 메뉴 인덱스를 받아 마지막 메뉴 외에 다른 메뉴에 hover 시 영역 삭제
    */
    const subMenuHandler = (e, index, length) => {
      const box = e.currentTarget;
      if (index === (length - 1)) {
        document.querySelector('.nav-sub').style.maxHeight = box.scrollHeight + 'px';
        document.querySelector('.nav-sub').style.borderTop = '1px solid #ccc'
        document.querySelector('.nav-sub').style.borderBottom = '1px solid #ccc'
      } else subMenuRemover()
    }

    const mainMenuList = document.querySelector('#main-menu').children;
    Array.from(mainMenuList).forEach((v, i) => {
      const length = Array.from(mainMenuList).length;
      v.addEventListener('mousemove', e => {
        subMenuHandler(e, i, length);
        // 기타 영역 삭제
        langRemover();
        searchRemover();
      });
    })

    /* 
    * type          : Event Handler
    * description   : 검색창 시각화
    */
    const searchHandler = () => {
      const target = document.querySelector('.nav-search')
      if(!target.style.maxHeight || target.style.maxHeight === '0px') {
        target.style.maxHeight = document.querySelector('.nav-search').scrollHeight + 'px';
      } else {
        searchRemover();
      }
    }

    document.querySelector('#search-btn').addEventListener('click', () => {
      document.querySelector('.dimmed').classList.toggle('hide');
      searchHandler();
      langRemover();
      subMenuRemover();
    })

    document.querySelector('#exit-menu').addEventListener('click', e => {
      subMenuRemover();
    })
    
    /* 
    * type          : Event Handler
    * description   : 언어 선택 영역 시각화
    */
    document.querySelector('#lang-btn').addEventListener('click', e => {
      e.currentTarget.classList.toggle('on');
      e.currentTarget.parentElement.querySelector('.lang-list').classList.toggle('hide');
      // 기타 영역 삭제
      subMenuRemover();
      searchRemover();
    }) 

    /* 
    * type          : Event Handler
    * description   : URL에서 언어 키워드를 읽어와 현재 언어설정에 맞게 글자 강조 표시
    */
    const urlString = location.pathname;
    if(urlString.includes('ko')) {
      document.querySelector('.kor').classList.add('active');
      document.querySelector('.eng').classList.remove('active');
    } else if (urlString.includes('en')) {
      document.querySelector('.kor').classList.remove('active');
      document.querySelector('.eng').classList.add('active');
    } else {
      console.error('데이터 오류')
    }
  }
});