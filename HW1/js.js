const Prod_Apple = 15.678;
	const Prod_Cherry = 123.965;
	const Prod_Pine = 90.2345;

	console.log("Максимальна ціна" + Math.max(Prod_Apple,Prod_Cherry,Prod_Pine));
	console.log("Мінімальна ціна" + Math.min(Prod_Apple,Prod_Cherry,Prod_Pine));

	let sum;
	sum = Prod_Apple + Prod_Cherry + Prod_Pine;
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

	const  Money_Gave = 500;
	console.log("ваша решта" + Money_Gave - sum);

	console.log("середнє та округлене значення ціни" + (sum/3).toFixed(2));

	let discount = Math.random(10)*100;
	console.log("ваша знажка" + discount.toFixed(0));
	let marga = Prod_Cherry / 2;
	let sale = (Prod_Cherry / 100) * discount;
	let price = Prod_Cherry - discount;
	console.log("ціна із знижкою" + price.toFixed(2));
	let margaEnd = Prod_Cherry - marga - sale;
	console.log("прибуток" + margaEnd.toFixed(2));