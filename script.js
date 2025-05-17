const ebooks = [
    { title: "Eloquent JavaScript", author: "Marijn Haverbeke", link: "ebook/Eloquent_JavaScript.pdf", thumbnail: "https://th.bing.com/th/id/R.3d6311c0bdd59fcae2ca77501734236c?rik=9lb7ROG6yi7W5g&riu=http%3a%2f%2fprodimage.images-bn.com%2fpimages%2f9781593279509_p0_v2_s1200x630.jpg&ehk=Y5TGgzR%2blkb1NAsUYlLRUHOeRD6tz9WzQ6nA80nTgDw%3d&risl=&pid=ImgRaw&r=0" },
    { title: "CSS Secrets", author: "Lea Verou", link: "ebook/pdfcoffee.com_css-secrets-pdf-free.pdf", thumbnail: "https://m.media-amazon.com/images/I/91EGxvygVTL._SL1500_.jpg" },
    { title: "You Don't Know JS", author: "Kyle Simpson", link: "ebook/you-don-t-know-js.pdf", thumbnail: "https://raw.githubusercontent.com/getify/You-Dont-Know-JS/2nd-ed/scope-closures/images/cover.png" },
    { title: "1984", author: "George Orwell", link: "ebook/George Orwell - 1984.pdf", thumbnail: "https://th.bing.com/th/id/OIP.8xI6_2RSGzfLXh-aJhyjGwHaLF?w=186&h=278&c=7&r=0&o=5&pid=1.7" },
    { title: "Crime and Punishment", author: "Fyodor Dostoevsky", link: "ebook/crime-and-punishment.pdf", thumbnail: "https://images.thenile.io/r1000/9781840228564.jpg" },
    { title: "Hamlet", author: "William Shakespeare", link: "ebook/Hamlet-PDF.pdf", thumbnail: "https://th.bing.com/th/id/OIP.kO_IbnvZ1i-1crgf2Whm5wHaLR?cb=iwp2&rs=1&pid=ImgDetMain" },
    { title: "The Odyssey", author: "Homer", link: "ebook/TheOdyssey.pdf", thumbnail: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1662804106i/62348864.jpg" },
    { title: "The Stranger", author: "Albert Camus", link: "ebook/CAMUS, Albert - The Stranger.pdf", thumbnail: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781681771359/the-stranger-9781681771359_xlg.jpg" },
    { title: "Dead Souls", author: "Nikolai Gogol", link: "#", thumbnail: "https://th.bing.com/th/id/OIP.B9bRjAa7S8sRKJ7Vai8VdwHaLS?cb=iwp2&rs=1&pid=ImgDetMain" },
    { title: "The Castle", author: "Franz Kafka", link: "#", thumbnail: "https://i.pinimg.com/originals/e1/9e/74/e19e74e0e8a8e59ebeb56372d040b690.jpg" },
    { title: "Medea", author: "Euripides", link: "#", thumbnail: "https://th.bing.com/th/id/OIP.wN5JnPGu99ckn1jKKj2_xgHaLP?w=184&h=281&c=7&r=0&o=7&cb=iwp2&pid=1.7&rm=3" },
    { title: "Metamorphoses", author: "Ovid", link: "#", thumbnail: "https://th.bing.com/th/id/OIP.riWrg7G0_clDIkixXs_PPAAAAA?cb=iwp2&rs=1&pid=ImgDetMain" },
    { title: "Demons", author: "Fyodor Dostoevsky", link: "#", thumbnail: "https://m.media-amazon.com/images/I/616mLB0cveL._SL1500_.jpg" },
    { title: "Pedro Paramo", author: "Juan Rulfo", link: "#", thumbnail: "https://th.bing.com/th/id/OIP.1qCFAOX6hvJkPQIcyLz5EgAAAA?cb=iwp2&w=333&h=441&rs=1&pid=ImgDetMain" },
    { title: "The Book of Job", author: "Anonymous", link: "#", thumbnail: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1596559423i/54816497.jpg" },
    { title: "The Golden Notebook", author: "Doris Lessing", link: "#", thumbnail: "https://th.bing.com/th/id/R.db83964cd285a4efa72a900384e14d14?rik=qR2Zdd4zGofAaw&riu=http%3a%2f%2fecx.images-amazon.com%2fimages%2fI%2f81Fe79gaTNL.jpg&ehk=eft2DnLWc%2bFZVLNNGh7DpbrjuDziQ5g5Vzr3nPJZcF4%3d&risl=&pid=ImgRaw&r=0" },
];

const ebookList = document.getElementById("ebook-list");
const searchBar = document.getElementById("searchBar");

function displayEbooks(filteredEbooks) {
    ebookList.innerHTML = ""; 
    filteredEbooks.forEach(book => {
        const col = document.createElement("div");
        col.classList.add("col-md-4");
        col.innerHTML = `
            <div class="card">
                <img src="${book.thumbnail}" class="card-img-top" alt="${book.title}" width="200" height="300">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">by ${book.author}</p>
                    <a href="${book.link}" class="btn btn-primary" target="_blank">Read Now</a>
                    <a href="${book.link}" class="btn btn-success" download>Download</a>
                </div>
            </div>
        `;
        ebookList.appendChild(col);
    });
}


displayEbooks(ebooks);

searchBar.addEventListener("input", () => {
    let filter = searchBar.value.toLowerCase();
    let filteredEbooks = ebooks.filter(book => 
        book.title.toLowerCase().includes(filter) || 
        book.author.toLowerCase().includes(filter)
    );
    displayEbooks(filteredEbooks);
});
