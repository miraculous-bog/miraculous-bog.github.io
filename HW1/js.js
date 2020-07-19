const Prod_Apple = 15.678;
	const Prod_Cherry = 123.965;
	const Prod_Pine = 90.2345;

	console.log(Math.max(Prod_Apple,Prod_Cherry,Prod_Pine));
	console.log(Math.min(Prod_Apple,Prod_Cherry,Prod_Pine));

	let sum;
	sum = Prod_Apple + Prod_Cherry + Prod_Pine;
	console.log(sum);

	let prodAppleV = Math.floor(15.678);
	let prodCherryV = Math.floor(123.965);
	let prodPineV = Math.floor(90.2345);
	let sum2 = prodAppleV + prodCherryV + prodPineV;
	console.log(sum2);

	let morePrice = Math.ceil(sum2/100)*100;
	console.log(morePrice);

	if (sum2 % 2 == 0) {
		console.log(true);
	} else { console.log(false)};

	const  Money_Gave = 500;
	console.log(Money_Gave - sum);

	console.log((sum/3).toFixed(2));

	let discount = Math.random(10)*100;
	console.log(discount.toFixed(0));
	let marga = Prod_Cherry / 2;
	let sale = (Prod_Cherry / 100) * discount;
	let price = Prod_Cherry - discount;
	console.log(price.toFixed(2));
	let margaEnd = Prod_Cherry - marga - sale;
	console.log(margaEnd.toFixed(2));