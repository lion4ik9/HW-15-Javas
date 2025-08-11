const list = document.querySelector('.list');
const btn = document.querySelector('.load-more');
const PHOTOS_PER_PAGE = 12;
let PAGES = 1;
let url = `https://pixabay.com/api/?key=33269334-153df37cf3d3b5df8a7732977&per_page=${PHOTOS_PER_PAGE}&page=${PAGES}`;

function getData(url) {
    fetch(url).then((value) => value.json()).then((value) => renderData(value))
}

function renderData(obj) {
    const dataArray = obj.hits;
    console.log(dataArray)
    const markUp = dataArray.map((el) => `<li><img src=${el.webformatURL}></li>`).join('');
    
    btn.insertAdjacentHTML("beforebegin", markUp)
}

btn.addEventListener('click', () => {
    PAGES += 1;
    const newUrl = `https://pixabay.com/api/?key=33269334-153df37cf3d3b5df8a7732977&per_page=${PHOTOS_PER_PAGE}&page=${PAGES}`;
    getData(newUrl);
})

getData(url);