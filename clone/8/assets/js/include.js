Array.from(document.querySelectorAll('*[data-include]')).map(async v => {
  const loc = v.dataset.include;
  let html = null;

  try {
    const res = await axios.get(loc);
    html = res.data;
  } 
  catch (e) {
    console.error(e)
    alert('인클루드 데이터 전송 실패')
  } 

  if (html !== null) {
    v.outerHTML = html;
  }
});