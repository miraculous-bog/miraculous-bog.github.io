var cart = {}; // корзина

function init() {
    //вычитуем файл goods.json
/*    $.getJSON("goods.json", goodsOut2);*/
    $.getJSON("goods.json", goodsOut);
} 

/*function goodsOut2(data) {
            let goods = data;
            let outS='';
                for (let key in data) {
                    if (data[key].top === 1) {
                        outS += '<div class="slider__item">';
                        outS += '<span class="slider__item_inner">';
                        outS += `<img src="${data[key].img}" alt="">`;
                        outS += `<h2>${data[key].name}</h2>`;
                        outS += `<p>${data[key].desciption}</p>`;
                        outS += '<a href="" class="add-to-cart">Купить</a>';
                        outS += '</span>';
                        outS += '</div>';
                    }
                }
             $('.slider__items').html(outS);
              $('.add-to-cart').on('click', addToCart);
}*/
function goodsOut(data) {
    // вывод на страницу
/*--*/

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

    console.log(data); 
            let out='';  
    for (var key in data) {
        out +='<div class="trade-block anim-items anim-no-hide">';
        	out +=`<h2 class="eng eng2 hide-this">${data[key].name}</h2>`;  
			out +=`<img src="${data[key].img}" onclick="toggle()">`;
/*			if (data[key].top === 1) {
				out +=`<div class="top-product"><p>хит</p></div>`;
			}*/
       		out +='<div class="hover-block">';
        		out +=`<h2 class="eng">${data[key].name}</h2>`;
        		out +=`<div class="trade-ico"><img src="${data[key].img}" class="passive"><a href="#" onclick="toggle()"><img src="img/magnifier.png"></a><a href="#" class="add-to-cart" data-id="${key}"><img src="img/basket.png"></a></div>`;
        out +='</div>';
        out +=`<p class="pricehide hide-this">${data[key].cost} &#8372;</p>`;
        out +=`<a href="#" class="add-to-cart a-trade hide-this" data-id="${key}">Купить</a>`;
        out +='</div>';
    }
    $('.tradeNet').html(out);
  $('.add-to-cart').on('click', addToCart);
}

function addToCart(event) {
    //добавляем товар в корзину
    event.preventDefault();

  var carting = $('.basketImg');
  var imgtodrag = $(this).parent().find("img").eq(0);
  if (imgtodrag) {
  var imgclone = imgtodrag.clone()
  .offset({
  top: imgtodrag.offset().top,
  left: imgtodrag.offset().left
  })
  .css({
  'opacity': '0.5',
  'position': 'absolute',
  'height': '150px',
  'width': '150px',
  'z-index': '100'
  })  
  .appendTo($('body'))
  .animate({
  'top': carting.offset().top + 10,
  'left': carting.offset().left + 10,
  'width': 75,
  'height': 75
  }, 1000, 'easeInOutExpo');
   
  setTimeout(function () {
  carting.effect("shake", {
  times: 2
  }, 200);
  }, 1500);

  imgclone.animate({
  'width': 0,
  'height': 0
  }, function () {
  $(this).detach()
  });
  }

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
