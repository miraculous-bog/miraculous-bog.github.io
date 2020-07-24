const PRODE_APPLE = 15.678;
	const PROD_CHERRY = 123.965;
	const PROD_PINE = 90.2345;

	console.log("Максимальна ціна" + Math.max(PRODE_APPLE,PROD_CHERRY,PROD_PINE));
	console.log("Мінімальна ціна" + Math.min(PRODE_APPLE,PROD_CHERRY,PROD_PINE));

	let sum;
	sum = PRODE_APPLE + PROD_CHERRY + PROD_PINE;
	console.log("Сума цін на продукти" + sum);

	let prodAppleV = Math.floor(15.678);
	let prodCherryV = Math.floor(123.965);
	let prodPineV = Math.floor(90.2345);
	let sum2 = prodAppleV + prodCherryV + prodPineV;
	console.log("оклуглина сума цін" + sum2);

	let morePrice = Math.ceil(sum2/100)*100;
	console.log("сума товарів округлена до сотень." + morePrice);

	if (sum2 % 2 == 0) {
		console.log("чи парне число" + true);
	} else { console.log("чи парне число" + false)};

	const  MONEY_GAVE = 500;
	console.log("ваша решта" + (MONEY_GAVE - sum));

	console.log("середнє та округлене значення ціни" + (sum/3).toFixed(2));

	let discount = Math.random(10)*100;
	console.log("ваша знажка" + discount.toFixed(0));
	let marga = PROD_CHERRY / 2;
	let sale = (PROD_CHERRY / 100) * discount;
	let price = PROD_CHERRY - discount;
	console.log("ціна із знижкою" + price.toFixed(2));
	let margaEnd = PROD_CHERRY - marga - sale;
	console.log("прибуток" + margaEnd.toFixed(2));