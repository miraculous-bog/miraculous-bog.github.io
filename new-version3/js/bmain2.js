// /*var cart = {};
// function loadCart() {
//     //проверяю есть ли в localStorage запись cart
//     if (localStorage.getItem('cart')) {
//         // если есть - расширфровываю и записываю в переменную cart
//         cart = JSON.parse(localStorage.getItem('cart'));
//             showCart();
//         }
//     else {
//         $('.wrapper-info-basket').html('Корзина пуста!');
//     }
// }

// function showCart() {
//     //вывод корзины
//     if (!isEmpty(cart)) {
//         $('.wrapper-info-basket').html('Корзина пуста!');
//     }
//     else {
//         $.getJSON('goods.json', function (data) {
//             var goods = data;
//             var out = '';
//             for (var id in cart) {
// /*    out += <div class="item">;
//    out += <div class="buttons del-goods" data-id="${id}"><span class="delete-btn"></span></div>;
//    out += <div class="image"><img src="${goods[id].img}" alt=""  width="90" height="90" /></div>;
//    out += <div class="description-c"><span>${goods[id].name}</span><br></div>;
//    out += <div class="quantity">;
//    out += <button class="minus-btn minus-goods" data-id="${id}" type="button" name="button"><img src="img/minus.svg" alt="" /></button>; 
//     out +=`<p> ${cart[id]}</p>`;  
//    out += <button class="plus-btn plus-goods" data-id="${id}" type="button" name="button"><img src="img/plus.svg" alt="" /></button>;
//    out += </div>;
//    out += <div class="total-price"><p>${cart[id]*goods[id].cost}</p></div>;
//    out += </div>; */
//    out += `<h3>Товары в корзине</h3><div class="one-tov">`;
//    out += `<div class="pop-img">`;
//    out += `<img src="${goods[id].img}" alt="">`;
//    out += `</div>`;
//    out += `<h2>${goods[id].name}</h2>`;
//    out += `<div class="sum-product">`;
//    out += `<p>${cart[id]} грн&times;</p>`;
//    out += `<div class="quantity">`;
//    out += `<button class="minus-btn minus-goods2" type="button" name="button">`;
//    out += `<img src="img/minus.svg" alt="" />`;
//    out += `</button>`;
//    out += `<p>${cart[id]}</p>`;
//    out += `<button class="plus-btn plus-goods2" type="button" name="button">`;
//    out += `<img src="img/plus.svg" alt="" />`;
//    out += `</div>`;
//    out += `<p>${cart[id]*goods[id].cost}&#61; 210 грн</p>`;
//    out += `</div>`;
//    out += `<div class="close-this"></div>`;
//    out += `<div class="clear"></div></div>`;
//    out += `<div class="total-point"><h3>Итог<span></span></h3></div>`;
//    out += `<a href="form.html"><div class="tbuy"><h3>Оформить заказ</h3></div></a>`;

//             }
//             $('.wrapper-info-basket').html(out);
// /*             $('.del-goods').on('click', delGoods); */
//             $('.plus-goods2').on('click', plusGoods);
//             $('.minus-goods2').on('click', minusGoods);
//         });
// /*    $.getJSON('goods.json', function (data) {
//    let goods = data;
//             let out = '';
//    let coc = 0; 
//             for (var id in cart) {
//     coc += cart[id]*goods[id].cost;
//             }
//    out +=`<h3>Вместе<span>${coc}грн</span></h3>`;
//             $('.tinfo').html(out); 

//         });
//     }*/
// }

// function delGoods() {
//     //удаляем товар из корзины
//     var id = $(this).attr('data-id');
//     delete cart[id];
//     saveCart();
//     showCart();
// }
// function plusGoods() {
//     //добавляет товар в корзине
//     var id = $(this).attr('data-id');
//     cart[id]++;
//     saveCart();
//     showCart();
// }
// function minusGoods() {
//     //уменьшаем товар в корзине
//     var id = $(this).attr('data-id');
//     if (cart[id]==1) {
//         delete cart[id];
//     }
//     else {
//         cart[id]--;
//     }
//     saveCart();
//     showCart();
// }

// function saveCart() {
//     //сохраняю корзину в localStorage
//     localStorage.setItem('cart', JSON.stringify(cart)); //корзину в строку
// }

// function isEmpty(object) {
//     //проверка корзины на пустоту
//     for (var key in object)
//     if (object.hasOwnProperty(key)) return true;
//     return false;
// }



// $(document).ready(function () {
//    loadCart();
// });*/