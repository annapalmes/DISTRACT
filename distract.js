var myBooks = myObject.books;
var myMovies = myObject.movies;
var myMusic = myObject.music;
var myBooksName = myBooks.name;
var myBooksPrice = myBooks.price;

var cart = [];
console.log(cart);

document.getElementById("searchtext").addEventListener("input", mySearchBooks);
document.getElementById("searchtext2").addEventListener("input", mySearchMovies);
document.getElementById("searchtext3").addEventListener("input", mySearchMusic);

// FUNCTIONS FOR SHOW THE DINAMIC CATEGORIES FOR BOOKS MOVIES AND MUSIC

categories();

function categories() {

    var categorie = document.getElementById("categories");

    var list = document.createElement("ul");
    var categorie2 = [];

    for (var i = 0; i < myBooks.length; i++) {

        var myBooks2 = myBooks[i].categorie;

        var name = document.createElement("li");
        var input = document.createElement("input");

        input.setAttribute("class", "check");
        input.setAttribute("value", myBooks[i].categorie);
        input.addEventListener("click", categorieFilterBooks);
        input.type = "checkbox";

        name.setAttribute("class", "list");
        name.setAttribute("class", "check");
        name.setAttribute("name", "categorie");

        name.append(myBooks[i].categorie);

        if (!categorie2.includes(myBooks2)) {
            categorie2.push(myBooks2);
            list.append(name, input)
        }
        categorie.append(list);
    }
}

categories2();

function categories2() {

    var categorie = document.getElementById("categories2");
    var list = document.createElement("ul");

    var categorie3 = [];

    for (var i = 0; i < myMovies.length; i++) {

        var myBooks3 = myMovies[i].categorie;

        var name = document.createElement("li");
        var input = document.createElement("input");

        input.setAttribute("class", "check");
        input.setAttribute("value", myMovies[i].categorie);
        input.addEventListener("click", categorieFilterMovies);
        input.type = "checkbox";

        name.setAttribute("class", "list");
        name.setAttribute("class", "check");
        name.setAttribute("name", "categorie");

        name.append(myMovies[i].categorie);

        if (!categorie3.includes(myBooks3)) {
            categorie3.push(myBooks3);
            list.append(name, input)
        }
        categorie.append(list);
    }
}

categories3();

function categories3() {

    var categorie = document.getElementById("categories3");
    var list = document.createElement("ul");

    var categorie4 = [];

    for (var i = 0; i < myMusic.length; i++) {

        var myBooks4 = myMusic[i].categorie;

        var name = document.createElement("li");
        var input = document.createElement("input");

        input.setAttribute("class", "check");
        input.setAttribute("value", myMusic[i].categorie);
        input.addEventListener("click", categorieFilterMusic);
        input.type = "checkbox";

        name.setAttribute("class", "list");
        name.setAttribute("class", "check");
        name.setAttribute("name", "categorie");

        name.append(myMusic[i].categorie);

        if (!categorie4.includes(myBooks4)) {
            categorie4.push(myBooks4);
            list.append(name, input)
        }
        categorie.append(list);

    }
}

// FUNCTIONS FOR SHOW THE BOX DINAMIC BOOKS MOVIES AND MUSIC

books();

function books() {

    var cover = document.getElementById("box");

    for (var n = 0; n < myBooks.length; n++) {

        var divcover = document.createElement("div");
        var price = document.createElement("p");
        var names = document.createElement("p");
        var button = document.createElement("button");
        var coverbook = document.createElement("img");
        var carrito = document.createElement("img");
        var buttonshop = document.createElement("button");

        divcover.setAttribute("class", "align");
        divcover.setAttribute("data-categories", myBooks[n].categorie);
        names.setAttribute("class", "names");
        button.setAttribute("class", "buttoninfo");
        button.setAttribute("title", myBooks[n].name);
        button.addEventListener("click", listener);
        button.setAttribute("data-page", "information");
        coverbook.setAttribute("class", "books");
        coverbook.setAttribute("src", myBooks[n].photo);
        carrito.setAttribute("src", "photos/shopping-cart.png");
        carrito.setAttribute("class", "carrito");
        price.setAttribute("class", "price");

        buttonshop.setAttribute("title", myBooks[n].name);
        buttonshop.addEventListener("click", addproduct);

        names.append(myBooks[n].name + " ; " + " " + myBooks[n].writter);
        coverbook.append(myBooks[n].photo);
        price.append(myBooks[n].price);
        buttonshop.append(carrito);
        button.append(coverbook);

        divcover.append(button, names, price, buttonshop);

        cover.append(divcover);
    }
}

movies();

function movies() {

    var cover2 = document.getElementById("box2");

    for (var n = 0; n < myMovies.length; n++) {

        var divcover = document.createElement("div");
        var price = document.createElement("p");
        var names = document.createElement("p");
        var button = document.createElement("button");
        var coverbook = document.createElement("img");
        var carrito = document.createElement("img");
        var buttonshop = document.createElement("button");

        divcover.setAttribute("class", "align");
        divcover.setAttribute("data-categories", myMovies[n].categorie);
        names.setAttribute("class", "names");
        button.setAttribute("class", "buttoninfo");
        button.setAttribute("title", myMovies[n].name);
        button.addEventListener("click", listener);
        button.setAttribute("data-page", "information2");
        coverbook.setAttribute("class", "movies");
        coverbook.setAttribute("src", myMovies[n].photo);
        carrito.setAttribute("src", "photos/shopping-cart.png");
        carrito.setAttribute("class", "carrito");
        price.setAttribute("class", "price");

        buttonshop.setAttribute("title", myMovies[n].name);
        buttonshop.addEventListener("click", addproduct);

        names.append(myMovies[n].name + " ; " + " " + myMovies[n].director);
        coverbook.append(myMovies[n].photo);
        price.append(myMovies[n].price);
        buttonshop.append(carrito);
        button.append(coverbook);
        divcover.append(button, names, price, buttonshop);

        cover2.append(divcover);
    }
}

music();

function music() {

    var cover3 = document.getElementById("box3");

    for (var n = 0; n < myMusic.length; n++) {

        var divcover = document.createElement("div");
        var price = document.createElement("p");
        var names = document.createElement("p");
        var button = document.createElement("button");
        var coverbook = document.createElement("img");
        var carrito = document.createElement("img");
        var buttonshop = document.createElement("button");

        divcover.setAttribute("class", "align");
        divcover.setAttribute("data-categories", myMusic[n].categorie);
        names.setAttribute("class", "names");
        button.setAttribute("class", "buttoninfo");
        button.setAttribute("title", myMusic[n].name);
        button.addEventListener("click", listener);
        button.setAttribute("data-page", "information3");
        coverbook.setAttribute("class", "music");
        coverbook.setAttribute("src", myMusic[n].photo);
        carrito.setAttribute("src", "photos/shopping-cart.png");
        carrito.setAttribute("class", "carrito");
        price.setAttribute("class", "price");

        buttonshop.setAttribute("title", myMusic[n].name);
        buttonshop.addEventListener("click", addproduct);

        names.append(myMusic[n].name + " ; " + " " + myMusic[n].singer);
        coverbook.append(myMusic[n].photo);
        price.append(myMusic[n].price);
        buttonshop.append(carrito);
        button.append(coverbook);
        divcover.append(button, names, price, buttonshop);

        cover3.append(divcover);
    }
}

// FUNCTIONS FOR SHOW HIDE AND CALL THE FUNCTIONS AND PAGES

hideAndShow("home");

function hideAndShow(page) {

    var pages = document.getElementsByClassName("bodybooks");

    for (var n = 0; n < pages.length; n++) {
        pages[n].style.display = "none";
    }

    document.getElementById(page).style.display = "";

}

listener();

function listener() {

    var signal = document.querySelectorAll("[data-page]");

    for (var i = 0; i < signal.length; i++) {
        signal[i].addEventListener("click", function () {
            var page = this.getAttribute("data-page");

            hideAndShow(page);
            if (page == "information3") {
                showinformation3(this.getAttribute("title"));
            }
            if (page == "information2") {
                showinformation2(this.getAttribute("title"));
            }
            if (page == "information") {
                showinformation(this.getAttribute("title"));
            }
            if (page == "shoppingcart") {
                shoppingCart();
            }

        })
    }
}

// SEARCH BOOKS

mySearchBooks();

function mySearchBooks() {

    var input, filter, divfather, divson, n, p, txtValue;

    input = document.getElementById("searchtext");
    filter = input.value.toUpperCase();
    divfather = document.getElementById("box");
    divson = divfather.getElementsByTagName("div");

    for (var n = 0; n < divson.length; n++) {

        p = divson[n].getElementsByTagName("p")[0];
        txtValue = p.textContent || p.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            divson[n].style.display = "";
        } else {
            divson[n].style.display = "none";
        }

    }
}

// SEARCH MOVIES

mySearchMovies();

function mySearchMovies() {

    var input, filter, divfather, divson, n, p, txtValue;

    input = document.getElementById("searchtext2");
    filter = input.value.toUpperCase();
    divfather = document.getElementById("box2");
    divson = divfather.getElementsByTagName("div");

    for (var n = 0; n < divson.length; n++) {
        p = divson[n].getElementsByTagName("p")[0];
        txtValue = p.textContent || p.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            divson[n].style.display = "";
        } else {
            divson[n].style.display = "none";
        }
    }
}

// SEARCH MUSIC

mySearchMusic();

function mySearchMusic() {

    var input, filter, divfather, divson, n, p, txtValue;

    input = document.getElementById("searchtext3");
    filter = input.value.toUpperCase();
    divfather = document.getElementById("box3");
    divson = divfather.getElementsByTagName("div");

    for (var n = 0; n < divson.length; n++) {
        p = divson[n].getElementsByTagName("p")[0];
        txtValue = p.textContent || p.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            divson[n].style.display = "";
        } else {
            divson[n].style.display = "none";
        }
    }
}

// FILTERS BOOKS

categorieFilterBooks();

function categorieFilterBooks() {

    var cat = [];

    var varcategorie = Array.from(document.querySelectorAll('input[type=checkbox]:checked'));

    var libros = Array.from(document.querySelectorAll('[data-categories]'));
    console.log(libros);

    var value = document.getElementsByClassName("check").value;

    console.log(value);

    for (var a = 0; a < varcategorie.length; a++) {
        cat.push(varcategorie[a].value);
    }

    console.log(cat);


    for (var i = 0; i < libros.length; i++) {

        if (cat.includes(libros[i].dataset.categories) || varcategorie.length == 0) {
            libros[i].style.display = "inline"
        } else {
            libros[i].style.display = "none"
        }

    }

}

// FILTERS MOVIES

categorieFilterMovies();

function categorieFilterMovies() {

    var cat2 = [];

    var varcategorie2 = Array.from(document.querySelectorAll('input[type=checkbox]:checked'));

    var movies = Array.from(document.querySelectorAll('[data-categories]'));
    console.log(movies);

    var value2 = document.getElementsByClassName("check").value;

    console.log(value2);

    for (var a = 0; a < varcategorie2.length; a++) {
        cat2.push(varcategorie2[a].value);
    }

    console.log(cat2);


    for (var i = 0; i < movies.length; i++) {

        if (cat2.includes(movies[i].dataset.categories) || varcategorie2.length == 0) {
            movies[i].style.display = "inline"
        } else {
            movies[i].style.display = "none"
        }

    }

}

// FILTERS MUSIC

categorieFilterMusic();

function categorieFilterMusic() {

    var cat3 = [];

    var varcategorie3 = Array.from(document.querySelectorAll('input[type=checkbox]:checked'));

    var music = Array.from(document.querySelectorAll('[data-categories]'));
    console.log(music);

    var value3 = document.getElementsByClassName("check").value;

    console.log(value3);

    for (var a = 0; a < varcategorie3.length; a++) {
        cat3.push(varcategorie3[a].value);
    }

    console.log(cat3);


    for (var i = 0; i < music.length; i++) {

        if (cat3.includes(music[i].dataset.categories) || varcategorie3.length == 0) {
            music[i].style.display = "inline"
        } else {
            music[i].style.display = "none"
        }

    }

}

// INFORMATION BOOKS

function showinformation(booktitle) {

    console.log(booktitle);

    var info = document.getElementById("informationbooks");

    info.innerHTML = "";

    for (var a = 0; a < myBooks.length; a++) {

        if (booktitle == (myBooks[a].name)) {

            var photo = document.createElement("img");
            var divnames = document.createElement("div");
            var namebook = document.createElement("p");
            var namewritter = document.createElement("p");
            var paragraf = document.createElement("p");

            photo.setAttribute("src", myBooks[a].photo);
            photo.setAttribute("class", "imageinfo");
            divnames.setAttribute("class", "divnames");
            namebook.setAttribute("class", "classnames");
            namewritter.setAttribute("class", "classnames");

            namebook.append(myBooks[a].name);
            namewritter.append("by:" + " " + myBooks[a].writter);
            photo.append(myBooks[a].photo);
            paragraf.append(myBooks[a].description);
            divnames.append(namebook, namewritter);

            info.append(photo, divnames, paragraf);
        }
    }
}

// INFORMATION MOVIES

function showinformation2(movieTitle) {

    console.log(movieTitle);

    var info2 = document.getElementById("informationmovies");

    info2.innerHTML = "";

    for (var a = 0; a < myMovies.length; a++) {

        if (movieTitle == (myMovies[a].name)) {

            var photo = document.createElement("img");
            var divnames = document.createElement("div");
            var namemovie = document.createElement("p");
            var namedirector = document.createElement("p");
            var paragraf = document.createElement("p");

            photo.setAttribute("src", myMovies[a].photo);
            photo.setAttribute("class", "imageinfo");
            divnames.setAttribute("class", "divnames");
            namemovie.setAttribute("class", "classnames");
            namedirector.setAttribute("class", "classnames");

            namemovie.append(myMovies[a].name);
            namedirector.append("by:" + " " + myMovies[a].director);
            photo.append(myMovies[a].photo);
            paragraf.append(myMovies[a].description);
            divnames.append(namemovie, namedirector);

            info2.append(photo, divnames, paragraf);
        }
    }

}

// INFORMATION MUSIC

function showinformation3(musicTitle) {

    console.log(musicTitle);

    var info3 = document.getElementById("informationmusic");

    info3.innerHTML = "";

    for (var a = 0; a < myMusic.length; a++) {

        if (musicTitle == (myMusic[a].name)) {

            var photo = document.createElement("img");
            var divnames = document.createElement("div");
            var namesong = document.createElement("p");
            var namesinger = document.createElement("p");
            var paragraf = document.createElement("p");

            photo.setAttribute("src", myMusic[a].photo);
            photo.setAttribute("class", "imageinfo");
            divnames.setAttribute("class", "divnames");
            namesong.setAttribute("class", "classnames");
            namesinger.setAttribute("class", "classnames");

            namesong.append(myMusic[a].name);
            namesinger.append("by:" + " " + myMusic[a].singer);
            photo.append(myMusic[a].photo);
            paragraf.append(myMovies[a].description);
            divnames.append(namesong, namesinger);


            info3.append(photo, divnames, paragraf);
        }
    }

}

// SHOPPING CART BOOKS

function addproduct(namebook) {

    console.log(this.getAttribute("title"));

    cart.push(this.getAttribute("title"));
}


function shoppingCart() {

    var shop = document.getElementById("products");

    var price = document.getElementById("total");

    shop.innerHTML = "";

    var obj = {} // estoy creando un objeto porque antes cogia directamente el valor o titulo del libro y con eso se me era imposible ir añadiendo unidades entonces lo que hago es crear el objeto para poder ir sumando.  

    cart.forEach(function (product) { // esto es un for(loop) pero de forma mas reducida y rapida de hacer; entonces hacemos un for de los productos que estan dentro de la cart y le decimos que si ese producto no estaba dentro del objeto que sea 1 y que cada vez que el mismo producto se añade se vaya sumando las unidades de ese mismo.

        if (!obj[product]) {
            obj[product] = 1
        } else {
            obj[product]++;
        }

    });

    var uniqueProducts = []; // aqui creamos una array vacia para poder poner todos los libros sin que esten repetidos ya que en la pantalla cada vez que se nos repita un libro no queremos que lo enseñe dos veces si no que las unidades se sumen.

    cart.forEach(function (product) { // entonces aqui creamos otro for y le decimos que se mire la cart y que si no esta incluido ese libro en el uniqueProducts pues que lo incluya pero si ya esta incluido que no lo haga otra vez porque volvemos a repetir; no queremos que s emuestre dos veces ne pantalla el libro si no que se suman las unidades y ya.
        if (!uniqueProducts.includes(product)) {
            uniqueProducts.push(product);
        }
    })

    var totalprice = 0;

    for (var a = 0; a < myBooks.length; a++) {

        for (var x = 0; x < uniqueProducts.length; x++) {

            if (uniqueProducts[x] === myBooks[a].name) { // aqui queremos que nos cree cada libro que este dentro de la uniqueProducts

                var row = document.createElement("tr");

                var cellproduct = document.createElement("td");
                var celldescription = document.createElement("td");
                var cellunits = document.createElement("td");
                var cellprice = document.createElement("td");
                var celldelete = document.createElement("td");
                var buttondelete = document.createElement("button");
                var cellimage = document.createElement("img");
                var productname = uniqueProducts[x];

                buttondelete.setAttribute("data-title", productname); // y aqui hacemos esto para poder eliminar el libro de la pagina cada vez que clikemos el button delte entonces en el button le creamos un data attribute que es el productname que el productname teneos arriba que es el nombre del libro que le toca donde el for y ya aqui a ajo le decimos que cada vex que se haga cllick en el button nos llame la funcion delete product que es la siguinte a esta y haga la funcion solo para el libro que le pasamos por el parametro gracias al data-title.
                buttondelete.onclick = function () {
                    deletProduct(this.getAttribute("data-title"));
                };
                cellimage.setAttribute("src", myBooks[a].photo);
                cellimage.setAttribute("class", "imagenshoppingcart");

                var productunit = obj[uniqueProducts[x]];
                var productprice = myBooks[a].price * productunit;

                totalprice += productprice;

                var productdelete = "";

                cellimage.append(myBooks[a].photo);

                cellproduct.append(cellimage);
                celldescription.append(productname);
                cellunits.append(productunit);
                cellprice.append(productprice.toFixed(2) + "€");
                celldelete.append(productdelete);
                celldelete.append(buttondelete);

                row.append(cellproduct);
                row.append(celldescription);
                row.append(cellunits);
                row.append(cellprice);
                row.append(celldelete);

                shop.append(row);

            }
        }
    }

    for (var a = 0; a < myMovies.length; a++) {

        for (var x = 0; x < uniqueProducts.length; x++) {

            if (uniqueProducts[x] === myMovies[a].name) {

                var row = document.createElement("tr");

                var cellproduct = document.createElement("td");
                var celldescription = document.createElement("td");
                var cellunits = document.createElement("td");
                var cellprice = document.createElement("td");
                var celldelete = document.createElement("td");
                var buttondelete = document.createElement("button");
                var cellimage = document.createElement("img");
                var productname = uniqueProducts[x];

                buttondelete.setAttribute("data-title", productname);
                buttondelete.onclick = function () {
                    deletProduct(this.getAttribute("data-title"));
                };
                cellimage.setAttribute("src", myMovies[a].photo);
                cellimage.setAttribute("class", "imagenshoppingcart");

                var productunit = obj[uniqueProducts[x]];
                var productprice = myMovies[a].price * productunit;

                totalprice += productprice;

                var productdelete = "";

                cellimage.append(myMovies[a].photo);

                cellproduct.append(cellimage);
                celldescription.append(productname);
                cellunits.append(productunit);
                cellprice.append(productprice.toFixed(2) + "€");
                celldelete.append(productdelete);
                celldelete.append(buttondelete);

                row.append(cellproduct);
                row.append(celldescription);
                row.append(cellunits);
                row.append(cellprice);
                row.append(celldelete);

                shop.append(row);

            }
        }
    }

    for (var a = 0; a < myMusic.length; a++) {

        for (var x = 0; x < uniqueProducts.length; x++) {

            if (uniqueProducts[x] === myMusic[a].name) {

                var row = document.createElement("tr");

                var cellproduct = document.createElement("td");
                var celldescription = document.createElement("td");
                var cellunits = document.createElement("td");
                var cellprice = document.createElement("td");
                var celldelete = document.createElement("td");
                var buttondelete = document.createElement("button");
                var cellimage = document.createElement("img");
                var productname = uniqueProducts[x];

                buttondelete.setAttribute("data-title", productname);
                buttondelete.onclick = function () {
                    deletProduct(this.getAttribute("data-title"));
                };
                cellimage.setAttribute("src", myMusic[a].photo);
                cellimage.setAttribute("class", "imagenshoppingcart");

                var productunit = obj[uniqueProducts[x]];
                var productprice = myMusic[a].price * productunit;

                totalprice += productprice;

                var productdelete = "";

                cellimage.append(myMusic[a].photo);

                cellproduct.append(cellimage);
                celldescription.append(productname);
                cellunits.append(productunit);
                cellprice.append(productprice.toFixed(2) + "€");
                celldelete.append(productdelete);
                celldelete.append(buttondelete);

                row.append(cellproduct);
                row.append(celldescription);
                row.append(cellunits);
                row.append(cellprice);
                row.append(celldelete);

                shop.append(row);

            }
        }
    }

    price.textContent = totalprice.toFixed(2) + "€";
}


function deletProduct(value) {

    cart = cart.filter(function (el) {
        return el != value
    })

    shoppingCart()
}

// FILTER VUE

new Vue({

    el: '#filterprice',
    data: {
        minimo: 5,
        myBooks: {},
        myMovies: {},
        myMusic: {},
    },
    computed: {

        betterPrice() {
                return this.myBooks.filter((book) => book.price >= this.minimo)
        }
    },
    
    created: function () {

        fetch('myjson1.json')
        
            .then(function (response) {
                return response.json();
            })
        
            .then(function (data) {
            
                filterprice.myBooks = data.books
                filterprice.myMovies = data.movies
                filterprice.myMusic = data.music
            
           console.log(data)
            
            });
    }

})
