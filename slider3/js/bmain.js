var cart = {}; // корзина

function init() {
    //вычитуем файл goods.json
    $.getJSON("goods.json", goodsOut);
}

function goodsOut(data) {
    // вывод на страницу
    console.log(data);
    let out='';
    for (var key in data) {
        out +='<div class="trade-block anim-items anim-no-hide">';
        	out +=`<img src="${data[key].img}">`;
       		out +='<div class="hover-block">';
        		out +=`<h2 class="eng">${data[key].name}</h2>`;
        		out +=`<div class="trade-ico"><a href="#" onclick="toggle()"><img src="img/magnifier.png"></a><a href="#" class="add-to-cart" data-id="${key}"><img src="img/basket.png"></a></div>`;
/*        out +=`<div class="cost">${data[key].cost}</div>`;*/
/*        out +='<button class="add-to-cart">Купить</button>';*/
        out +='</div>';
        out +='</div>';
    }
    $('.tradeNet').html(out);
  $('.add-to-cart').on('click', addToCart);
}

function addToCart() {
    //добавляем товар в корзину
    var id = $(this).attr('data-id');
    // console.log(id);
    if (cart[id]==undefined) {
        cart[id] = 1; //если в корзине нет товара - делаем равным 1
    }
    else {
        cart[id]++; //если такой товар есть - увеличиваю на единицу
    }
    showMiniCart();
    saveCart();
}

function saveCart() {
    //сохраняю корзину в localStorage
    localStorage.setItem('cart', JSON.stringify(cart)); //корзину в строку
}

function showMiniCart() {
    //показываю мини корзину
    var out="";
    for (var key in cart) {
        out += key +' --- '+ cart[key]+'<br>';
    }
    $('.mini-cart').html(out);
}

function loadCart() {
    //проверяю есть ли в localStorage запись cart
    if (localStorage.getItem('cart')) {
        // если есть - расширфровываю и записываю в переменную cart
        cart = JSON.parse(localStorage.getItem('cart'));
        showMiniCart();
    }
}

$(document).ready(function () {
    init();
    loadCart();
});