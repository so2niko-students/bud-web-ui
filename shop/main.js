const DB_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQYwBebYrZ3-YdcNbnOJI7-YkfhlWOrIrM51StMQtX4Zv_XuxkQXTVC2rvLepPBqUQyUTqR775xZa1Y/pub?gid=0&single=true&output=tsv";
const BOT_API_KEY = '5911496594:AAF3YEsQVLMRTWc8YwZ0JHG-kVGZvEZjx14';
const BOOKS_CONTAINER_SELECTOR = ".books";
const ORDER_BUTTON_SELECTOR = "#btn-order";
const ORDER_INPUT_SELECTOR = "#input-order-tel";
const BOOKS_DATA = [];
let CHOSEN_BOOK = null;

const onClickDetails = ({ target }) => {
    const isBtnText = target.dataset.is;
    if(isBtnText && isBtnText == 'show-modal-btn'){
        renderModalWindow(target.dataset.id);
    }
}

const onClickOrder = () => {
  const input = document.querySelector(ORDER_INPUT_SELECTOR);
  const tel = input.value;

  console.log('ORDER: ');
  console.log(`PHONE: ${tel}`);
  console.log(`BOOK: ${JSON.stringify(CHOSEN_BOOK)}`);

}

const getBooksHTML = ({ Name, Description, Image, Id }) => {
  return `<div class="card m-3" style="width: 18rem;">
    <img src="${Image}" class="card-img-top" alt="${Name}">
    <div class="card-body">
      <h5 class="card-title">${Name}</h5>
      <p class="card-text">${Description.slice(0, 100)}...</p>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#detailWindowModal"
        data-is="show-modal-btn"
        data-id="${ Id }"
      >
        Детально
        </button>
    </div>
  </div>`;
};

const renderBooks = (data) => {
  const booksContainer = document.querySelector(BOOKS_CONTAINER_SELECTOR);
  const booksHTML = data.map(getBooksHTML).join("");
  booksContainer.innerHTML = booksHTML;
};

const renderModalWindow = (id) => {
    const title = document.querySelector('#detailWindowModalLabel');
    const body = document.querySelector('.modal-body');
    //render
    //знайти книжку по id
    CHOSEN_BOOK = BOOKS_DATA.find(({Id}) => Id == id);
    const {Name, Author, Publisher, PubYear, Language, Price, Format, Cover, Description, Image} = CHOSEN_BOOK;
    //зарендерити її
    title.innerText = Name;

    const modalBodyText = `<div class="card">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${ Image }" class="img-fluid rounded-start" alt="${ Name } ${ Author }">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title text-warning bg-dark p-3">${ Price } UAH <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#order-container" aria-expanded="false" aria-controls="order-container">
          Замовити
        </button></h5>
          <p class="card-text">${ Author }</p>
          <p class="card-text"> ${ Publisher } : ${ PubYear }</p>
          <p class="card-text text-muted">${ Language }, ${ Format }, ${ Cover }</p>
          <p class="card-text">${ Description }</p>
        </div>
      </div>
    </div>
  </div>`;

    body.innerHTML = modalBodyText;

}

//Перетворення тексту у масив об`єктів
const parseTextFile = (textFile) => {
  const data2d = textFile.split("\r\n").map((row) => row.split("\t"));
  const headers = data2d.shift();
  const data = data2d.map((row) => {
    return row.reduce((acc, rec, i) => {
      acc[headers[i]] = rec;
      return acc;
    }, {});
  });
  return data;
};

const load = async () => {
  // fetch(DB_URL).then(r => r.text()).then(textFile => console.log(textFile));

  const request = await fetch(DB_URL);
  const textFile = await request.text();

  const data = parseTextFile(textFile);
  BOOKS_DATA.push(...data);
  renderBooks(data);
  document.querySelector(BOOKS_CONTAINER_SELECTOR).addEventListener('click', onClickDetails);
  document.querySelector(ORDER_BUTTON_SELECTOR).addEventListener('click', onClickOrder);


  console.log(data);
};

load();

const getUpd = `https://api.telegram.org/bot${BOT_API_KEY}/getUpdates`;
fetch(getUpd).then(r => r.json()).then(console.log);