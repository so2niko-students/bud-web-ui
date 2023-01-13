const DB_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQYwBebYrZ3-YdcNbnOJI7-YkfhlWOrIrM51StMQtX4Zv_XuxkQXTVC2rvLepPBqUQyUTqR775xZa1Y/pub?gid=0&single=true&output=tsv';
const BOOKS_CONTAINER_SELECTOR = '.books';


const getBooksHTML = ({ Name, Description, Image }) => {
    return `<div class="card m-3" style="width: 18rem;">
    <img src="${ Image }" class="card-img-top" alt="${ Name }">
    <div class="card-body">
      <h5 class="card-title">${ Name }</h5>
      <p class="card-text">${ Description.slice(0, 100) }...</p>
      <a href="#" class="btn btn-primary">Детально</a>
    </div>
  </div>`;
}

const renderBooks = data => {
    const booksContainer = document.querySelector(BOOKS_CONTAINER_SELECTOR);
    const booksHTML = data.map(getBooksHTML).join('');
    console.log(booksHTML);
    booksContainer.innerHTML = booksHTML;
}

//Перетворення тексту у масив об`єктів
const parseTextFile = textFile => {
    console.log(textFile);
    const data2d = textFile.split('\r\n').map(row => row.split('\t'));
    const headers = data2d.shift();
    const data = data2d.map(row => {
        console.log(row);
        return row.reduce((acc, rec, i) => {
            acc[headers[i]] = rec;
            return acc;
        }, {})
    });
    console.log(data2d);
    console.log(data);

    renderBooks(data);
}

const load = async () => {
    // fetch(DB_URL).then(r => r.text()).then(textFile => console.log(textFile));

    const request = await fetch(DB_URL);
    const textFile = await request.text();

    const data = parseTextFile(textFile);

    console.log(data);
}

load();