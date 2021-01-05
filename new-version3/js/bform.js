var cart = {};
let cartT = JSON.parse(localStorage.getItem('cart'));
console.log(cartT);
function loadCart() {
    //проверяю есть ли в localStorage запись cart
    if (localStorage.getItem('cart')) {
        // если есть - расширфровываю и записываю в переменную cart
        cart = JSON.parse(localStorage.getItem('cart'));
            showCart();

        }
    else {
        $('.cont-form').html('Корзина пуста!');
    }
}

function showCart() {
    //вывод корзины
    if (!isEmpty(cart)) {
        $('.cont-form').html('Корзина пуста!');
    }
    else {
        $.getJSON('goods.json', function (data) {
            let goods = data;
            let out = '';
						out += `<h4>Продукт <span class="price" style="color:black"><i class="fa fa-shopping-cart"></i> <b class="b-i"></b></span></h4>`;
			
            for (let id in cart) {
				out += `<p><a href="#">${goods[id].name}</a><span class="price">${cart[id]*goods[id].cost}</span></p>`;/* 
				 coc +=$cart[id]*goods[id].cost; */
            }
			let coc = 0; 
            for (var id in cart) {
				coc += cart[id]*goods[id].cost;
            }
			out += `<p>Всего<span class="price" style="color:black"><b>${coc}</b></span></p>`;
            $('.cont-form').html(out);	
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
            $('.b-i').html(out);
        });
		
    }
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
/* function sendEmail() {
    let ename = $('#ename').val();
    let ephone = $('#ephone').val();
    let email = $('#email').val();
    if (ename!='' && email!='' && ephone!='') {
        if (isEmpty(cart)) {
            $.post(
                "mail.php",
                {
                    "ename" : ename,
                    "email" : email,
                    "ephone" : ephone,
                    "cart" : cart
                },
                function(data){
                    if(data==1) {
						alert('заказ отправлен');
					}
					else {
						alert('Подтвердите заказ');
					}
                }
            );
        }
        else {
            alert('Корзина пуста');
        }
    }
    else {
        alert('Заполните поля');
    }

} */

$(document).ready(function () {
   loadCart();
   /* $('.send-email').on('click', sendEmail); */ // отправить письмо с заказом
});