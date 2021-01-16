var cart = {};
function loadCart() {
    //проверяю есть ли в localStorage запись cart
    if (localStorage.getItem('cart')) {
        // если есть - расширфровываю и записываю в переменную cart
        cart = JSON.parse(localStorage.getItem('cart'));
            showCart();
        }
    else {
        $('.shopping-cart').html('Корзина пуста!');
    }
}

function showCart() {
    //вывод корзины
    if (!isEmpty(cart)) {
        $('.shopping-cart').html('Корзина пуста!');
    }
    else {
        $.getJSON('goods.json', function (data) {
            var goods = data;
            var out = '';
            for (var id in cart) {
			out += `<div class="item">`;
			out += `<div class="buttons del-goods" data-id="${id}"><span class="delete-btn"></span></div>`;
			out += `<div class="image"><img src="${goods[id].img}" alt=""  width="90" height="90" /></div>`;
			out += `<div class="description-c"><span>${goods[id].name}</span><br></div>`;
			out += `<div class="quantity">`;
			out += `<button class="minus-btn minus-goods" data-id="${id}" type="button" name="button"><img src="img/minus.svg" alt="" /></button>`;
/* 			out +=`<input type="text" name="name" value="${cart[id]}">`; */ 
 			out +=`<p> ${cart[id]}</p>`;  
			out += `<button class="plus-btn plus-goods" data-id="${id}" type="button" name="button"><img src="img/plus.svg" alt="" /></button>`;
			out += `</div>`;
/* 			let priceaprod = ${data[id].cost} * ${cart[id]}; */
			out += `<div class="total-price"><p>${cart[id]*goods[id].cost}</p></div>`;
			out += `</div>`;
            }
            $('.shopping-cart').html(out);
            $('.del-goods').on('click', delGoods);
            $('.plus-goods').on('click', plusGoods);
            $('.minus-goods').on('click', minusGoods);
        });
		  $.getJSON('goods.json', function (data) {
			let goods = data;
            let out = '';
			let ci = 0; 
            for (let id in cart) {
				ci += cart[id];
            }
			out += ci;
            $('.counter-bas').html(out);	

        });
		  $.getJSON('goods.json', function (data) {
			let goods = data;
            let out = '';
			let coc = 0; 
            for (var id in cart) {
				coc += cart[id]*goods[id].cost;
            }
			out +=`<h3>Вместе<span>${coc}грн</span></h3>`;
            $('.tinfo').html(out);	

        });
    }
}

function delGoods() {
    //удаляем товар из корзины
    var id = $(this).attr('data-id');
    delete cart[id];
    saveCart();
    showCart();
}
function plusGoods() {
    //добавляет товар в корзине
    var id = $(this).attr('data-id');
    cart[id]++;
    saveCart();
    showCart();
}
function minusGoods() {
    //уменьшаем товар в корзине
    var id = $(this).attr('data-id');
    if (cart[id]==1) {
        delete cart[id];
    }
    else {
        cart[id]--;
    }
    saveCart();
    showCart();
}

function saveCart() {
    //сохраняю корзину в localStorage
    localStorage.setItem('cart', JSON.stringify(cart)); //корзину в строку
}

function isEmpty(object) {
    //проверка корзины на пустоту
    for (var key in object)
    if (object.hasOwnProperty(key)) return true;
    return false;
}



$(document).ready(function () {
   loadCart();
});