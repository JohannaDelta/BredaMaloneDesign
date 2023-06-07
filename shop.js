function setDisplayPrice(id) {
	let quantityId = "qty" + id;
	let frameId = "frameSize" + id;
	let priceId = "artprice" + id;

	let quantity = Number(document.getElementById(quantityId).value);
	let price = Number(document.getElementById(frameId).value);
	let total = price*quantity;
	document.getElementById(priceId).innerHTML = total.toFixed(total % 1 != 0 ? 2 : 0);
}

//---------------functions quantity1 to quantity8 to save quantity of items user chooses to add to the cart -------------
function quantity1() {
	//declare variable quantityItems to save the value user choose from 'qty' list
	var quantityItems = document.getElementById('qty1').value;
	//declare variable products to save the text from product 'description'
	var products = document.getElementById('description').innerHTML;
	//outputs in the modal the quantity and the description of the product the user choose to add to cart
	document.getElementById('modal-body').innerHTML = "You have added " + quantityItems + products + "to your shopping cart.";
}

function quantity2() {
	var quantityItems = document.getElementById('qty2').value;
	var products = document.getElementById('description2').innerHTML;
	document.getElementById('modal-body2').innerHTML = "You have added " + quantityItems + products + "to your shopping cart.";
}


function quantity3() {
	var quantityItems = document.getElementById('qty3').value;
	var products = document.getElementById('description3').innerHTML;
	document.getElementById('modal-body3').innerHTML = "You have added " + quantityItems + products + "to your shopping cart.";
}

function quantity4() {
	var quantityItems = document.getElementById('qty4').value;
	var products = document.getElementById('description4').innerHTML;
	document.getElementById('modal-body4').innerHTML = "You have added " + quantityItems + products + "to your shopping cart.";
}

function quantity5() {
	var quantityItems = document.getElementById('qty5').value;
	var products = document.getElementById('description5').innerHTML;
	document.getElementById('modal-body5').innerHTML = "You have added " + quantityItems + products + "to your shopping cart.";
}

function quantity6() {
	var quantityItems = document.getElementById('qty6').value;
	var products = document.getElementById('description6').innerHTML;
	document.getElementById('modal-body6').innerHTML = "You have added " + quantityItems + products + "to your shopping cart.";
}

function quantity7() {
	var quantityItems = document.getElementById('qty7').value;
	var products = document.getElementById('description7').innerHTML;
	document.getElementById('modal-body7').innerHTML = "You have added " + quantityItems + products + "to your shopping cart.";
}

function quantity8() {
	var quantityItems = document.getElementById('qty8').value;
	var products = document.getElementById('description8').innerHTML;
	document.getElementById('modal-body8').innerHTML = "You have added " + quantityItems + products + "to your shopping cart.";
}


//------------------------------------------------------------------------------------------------------------------


//function totalcarprice to create a total amount to pay when adding items to the shopping cart
function totalcartprice() {
	//variables (a-h) take values from (art-111 = art-888) and converts them from strings to numbers
	var a = Number(document.getElementById('art-111').innerHTML) ;
	var b = Number(document.getElementById('art-222').innerHTML) ;
	var c = Number(document.getElementById('art-333').innerHTML) ;
	var d = Number(document.getElementById('art-444').innerHTML) ;
	var e = Number(document.getElementById('art-555').innerHTML) ;
	var f = Number(document.getElementById('art-666').innerHTML) ;
	var g = Number(document.getElementById('art-777').innerHTML) ;
	var h = Number(document.getElementById('art-888').innerHTML) ;
//the addition of all the variables are output in the finaltotal2 position
	document.getElementById('finaltotal2').innerHTML = parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d) + parseInt(e) + parseInt(f) + parseInt(g) + parseInt(h);
}

function indexToString(i) {
	switch (i) {
		case 0:
			return "small_price";
		case 1:
			return "medium_price";
		case 2:
			return "large_price";
		default:
			return "error";
	}
}

//------------------------------------------------------------------------------------------------------------------
//explanation of functions summary() ......summary8()
function summary() {
	//declare variable quantityItems to save the value the user chooses from 'qty' list
	var quantityItems = document.getElementById('qty1').value;

	//declare variable price to save price located in 'artprice'
	var price = document.getElementById('artprice1').innerHTML;
	//declare variable code to save code of product located in 'code'
	var productID = document.getElementById('code').innerHTML;

	var frameSize = indexToString(document.getElementById('frameSize1').selectedIndex);

	//outputs the quantityItems to the table location 'art'
	document.getElementById('art').innerHTML =  quantityItems;
	//outputs the productID to the table location 'art-1'
	document.getElementById('art-1').innerHTML =  productID;
	//outputs the price to the table location 'art-11'
	document.getElementById('art-11').innerHTML =  price/quantityItems;
	//outputs the multiplication of price and quantityItems to the table location 'art-111 to create a total price of the product'
	document.getElementById('art-111').innerHTML =   price;
	//creates a button in position art-1111' which onclick actives the function removeItem1
	document.getElementById('art-1111').innerHTML =  '<button onClick="removeItem1()"> remove </button>';
	document.getElementById('art-11111').innerHTML =  frameSize;
}


function summary2() {
	var quantityItems = document.getElementById('qty2').value;
	var price = document.getElementById('artprice2').innerHTML;
	var productID = document.getElementById('code2').innerHTML;
	var frameSize = indexToString(document.getElementById('frameSize2').selectedIndex);
	document.getElementById('art2').innerHTML =  quantityItems;
	document.getElementById('art-2').innerHTML =  productID;
	document.getElementById('art-22').innerHTML =  price/quantityItems;
	document.getElementById('art-222').innerHTML =   price;
	document.getElementById('art-2222').innerHTML =  '<button onClick="removeItem2()"> remove </button>';
	document.getElementById('art-22222').innerHTML =  frameSize;

}

function summary3() {
	var quantityItems = document.getElementById('qty3').value;
	var price = document.getElementById('artprice3').innerHTML;
	var productID = document.getElementById('code3').innerHTML;
	var frameSize = indexToString(document.getElementById('frameSize3').selectedIndex);
	document.getElementById('art3').innerHTML =  quantityItems;
	document.getElementById('art-3').innerHTML =  productID;
	document.getElementById('art-33').innerHTML =  price/quantityItems;
	document.getElementById('art-333').innerHTML =   price;
	document.getElementById('art-3333').innerHTML =   '<button onClick="removeItem3()"> remove </button>';
	document.getElementById('art-33333').innerHTML =   frameSize;
}

function summary4() {
	var quantityItems = document.getElementById('qty4').value;
	var price = document.getElementById('artprice4').innerHTML;
	var productID = document.getElementById('code4').innerHTML;
	var frameSize = indexToString(document.getElementById('frameSize4').selectedIndex);

	document.getElementById('art4').innerHTML =  quantityItems;
	document.getElementById('art-4').innerHTML =  productID;
	document.getElementById('art-44').innerHTML =  price/quantityItems;
	document.getElementById('art-444').innerHTML =   price;
	document.getElementById('art-4444').innerHTML =  '<button onClick="removeItem4()"> remove </button>';
	document.getElementById('art-44444').innerHTML =  frameSize;
}

function summary5() {
	var quantityItems = document.getElementById('qty5').value;
	var price = document.getElementById('artprice5').innerHTML;
	var productID = document.getElementById('code5').innerHTML;
	var frameSize = indexToString(document.getElementById('frameSize5').selectedIndex);

	document.getElementById('art5').innerHTML =  quantityItems;
	document.getElementById('art-5').innerHTML =  productID;
	document.getElementById('art-55').innerHTML =  price/quantityItems;
	document.getElementById('art-555').innerHTML =   price;
	document.getElementById('art-5555').innerHTML =  '<button onClick="removeItem5()"> remove </button>';
	document.getElementById('art-55555').innerHTML =  frameSize;
}

function summary6() {
	var quantityItems = document.getElementById('qty6').value;
	var price = document.getElementById('artprice6').innerHTML;
	var productID = document.getElementById('code6').innerHTML;
	var frameSize = indexToString(document.getElementById('frameSize6').selectedIndex);

	document.getElementById('art6').innerHTML =  quantityItems;
	document.getElementById('art-6').innerHTML =  productID;
	document.getElementById('art-66').innerHTML =  price/quantityItems;
	document.getElementById('art-666').innerHTML =   price;
	document.getElementById('art-6666').innerHTML =   '<button onClick="removeItem6()"> remove </button>';
	document.getElementById('art-66666').innerHTML =   frameSize;
}

function summary7() {
	var quantityItems = document.getElementById('qty7').value;
	var price = document.getElementById('artprice7').innerHTML;
	var productID = document.getElementById('code7').innerHTML;
	var frameSize = indexToString(document.getElementById('frameSize7').selectedIndex);

	document.getElementById('art7').innerHTML =  quantityItems;
	document.getElementById('art-7').innerHTML =  productID;
	document.getElementById('art-77').innerHTML =  price/quantityItems;
	document.getElementById('art-777').innerHTML =   price;
	document.getElementById('art-7777').innerHTML =   '<button onClick="removeItem7()"> remove </button>';
	document.getElementById('art-77777').innerHTML =   frameSize;
}

function summary8() {
	var quantityItems = document.getElementById('qty8').value;
	var price = document.getElementById('artprice8').innerHTML;
	var productID = document.getElementById('code8').innerHTML;
	var frameSize = indexToString(document.getElementById('frameSize8').selectedIndex);
	document.getElementById('art8').innerHTML =  quantityItems;
	document.getElementById('art-8').innerHTML =  productID;
	document.getElementById('art-88').innerHTML =  price/quantityItems;
	document.getElementById('art-888').innerHTML =   price;
	document.getElementById('art-8888').innerHTML =   '<button onClick="removeItem8()"> remove </button>';
	document.getElementById('art-88888').innerHTML =   frameSize;
}

//------------------------------------------------------------------------------------------------------------------


//functions removeItem1() to removeItem8()
function removeItem1(){
	//returns the content of art, art-1, art-11, art-111, art-1111
	document.getElementById('art').innerHTML =  "";
	document.getElementById('art-1').innerHTML =  "";
	document.getElementById('art-11').innerHTML =  "";
	document.getElementById('art-111').innerHTML =  "";
	document.getElementById('art-1111').innerHTML =  "";

	// variables (b,c,d, e, f, g, h) takes values from positions art-222, art333....art-888 and are also converted to numbers
	var b = Number(document.getElementById('art-222').innerHTML) ;
	var c = Number(document.getElementById('art-333').innerHTML) ;
	var d = Number(document.getElementById('art-444').innerHTML) ;
	var e = Number(document.getElementById('art-555').innerHTML) ;
	var f = Number(document.getElementById('art-666').innerHTML) ;
	var g = Number(document.getElementById('art-777').innerHTML) ;
	var h = Number(document.getElementById('art-888').innerHTML) ;
	// the value in table box 'finaltotal2' is the sum of the variables b, c, d, e, f, g
	document.getElementById('finaltotal2').innerHTML = parseInt(b) + parseInt(c) + parseInt(d) + parseInt(e) + parseInt(f) + parseInt(g) + parseInt(h);
}

function removeItem2(){
	document.getElementById('art2').innerHTML =  "";
	document.getElementById('art-2').innerHTML =  "";
	document.getElementById('art-22').innerHTML =  "";
	document.getElementById('art-222').innerHTML =  "";
	document.getElementById('art-2222').innerHTML =  "";

	var a = Number(document.getElementById('art-111').innerHTML) ;
	var c = Number(document.getElementById('art-333').innerHTML) ;
	var d = Number(document.getElementById('art-444').innerHTML) ;
	var e = Number(document.getElementById('art-555').innerHTML) ;
	var f = Number(document.getElementById('art-666').innerHTML) ;
	var g = Number(document.getElementById('art-777').innerHTML) ;
	var h = Number(document.getElementById('art-888').innerHTML) ;
	document.getElementById('finaltotal2').innerHTML = parseInt(a) + parseInt(c) + parseInt(d) + parseInt(e) + parseInt(f) + parseInt(g) + parseInt(h);
}

function removeItem3(){
	document.getElementById('art3').innerHTML =  "";
	document.getElementById('art-3').innerHTML =  "";
	document.getElementById('art-33').innerHTML =  "";
	document.getElementById('art-333').innerHTML =  "";
	document.getElementById('art-3333').innerHTML =  "";

	var a = Number(document.getElementById('art-111').innerHTML) ;
	var b = Number(document.getElementById('art-222').innerHTML) ;
	var d = Number(document.getElementById('art-444').innerHTML) ;
	var e = Number(document.getElementById('art-555').innerHTML) ;
	var f = Number(document.getElementById('art-666').innerHTML) ;
	var g = Number(document.getElementById('art-777').innerHTML) ;
	var h = Number(document.getElementById('art-888').innerHTML) ;
	document.getElementById('finaltotal2').innerHTML = parseInt(a) + parseInt(b) + parseInt(d) + parseInt(e) + parseInt(f) + parseInt(g) + parseInt(h);

}

function removeItem4(){
	document.getElementById('art4').innerHTML =  "";
	document.getElementById('art-4').innerHTML =  "";
	document.getElementById('art-44').innerHTML =  "";
	document.getElementById('art-444').innerHTML =  "";
	document.getElementById('art-4444').innerHTML =  "";

	var a = Number(document.getElementById('art-111').innerHTML) ;
	var b = Number(document.getElementById('art-222').innerHTML) ;
	var c = Number(document.getElementById('art-333').innerHTML) ;
	var e = Number(document.getElementById('art-555').innerHTML) ;
	var f = Number(document.getElementById('art-666').innerHTML) ;
	var g = Number(document.getElementById('art-777').innerHTML) ;
	var h = Number(document.getElementById('art-888').innerHTML) ;
	document.getElementById('finaltotal2').innerHTML = parseInt(a) + parseInt(b) + parseInt(c) + parseInt(e) + parseInt(f) + parseInt(g) + parseInt(h);

}

function removeItem5(){
	document.getElementById('art5').innerHTML =  "";
	document.getElementById('art-5').innerHTML =  "";
	document.getElementById('art-55').innerHTML =  "";
	document.getElementById('art-555').innerHTML =  "";
	document.getElementById('art-5555').innerHTML =  "";

	var a = Number(document.getElementById('art-111').innerHTML) ;
	var b = Number(document.getElementById('art-222').innerHTML) ;
	var c = Number(document.getElementById('art-333').innerHTML) ;
	var d = Number(document.getElementById('art-444').innerHTML) ;
	var f = Number(document.getElementById('art-666').innerHTML) ;
	var g = Number(document.getElementById('art-777').innerHTML) ;
	var h = Number(document.getElementById('art-888').innerHTML) ;
	document.getElementById('finaltotal2').innerHTML = parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d) + parseInt(f) + parseInt(g) + parseInt(h);
}

function removeItem6(){
	document.getElementById('art6').innerHTML =  "";
	document.getElementById('art-6').innerHTML =  "";
	document.getElementById('art-66').innerHTML =  "";
	document.getElementById('art-666').innerHTML =  "";
	document.getElementById('art-6666').innerHTML =  "";

	var a = Number(document.getElementById('art-111').innerHTML) ;
	var b = Number(document.getElementById('art-222').innerHTML) ;
	var c = Number(document.getElementById('art-333').innerHTML) ;
	var d = Number(document.getElementById('art-444').innerHTML) ;
	var e = Number(document.getElementById('art-555').innerHTML) ;
	var g = Number(document.getElementById('art-777').innerHTML) ;
	var h = Number(document.getElementById('art-888').innerHTML) ;
	document.getElementById('finaltotal2').innerHTML = parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d) + parseInt(e) + parseInt(g) + parseInt(h);
}

function removeItem7(){
	document.getElementById('art7').innerHTML =  "";
	document.getElementById('art-7').innerHTML =  "";
	document.getElementById('art-77').innerHTML =  "";
	document.getElementById('art-777').innerHTML =  "";
	document.getElementById('art-7777').innerHTML =  "";

	var a = Number(document.getElementById('art-111').innerHTML) ;
	var b = Number(document.getElementById('art-222').innerHTML) ;
	var c = Number(document.getElementById('art-333').innerHTML) ;
	var d = Number(document.getElementById('art-444').innerHTML) ;
	var e = Number(document.getElementById('art-555').innerHTML) ;
	var f = Number(document.getElementById('art-666').innerHTML) ;
	var h = Number(document.getElementById('art-888').innerHTML) ;
	document.getElementById('finaltotal2').innerHTML = parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d) + parseInt(e) + parseInt(f) + parseInt(h);
}


function removeItem8(){
	document.getElementById('art8').innerHTML =  "";
	document.getElementById('art-8').innerHTML =  "";
	document.getElementById('art-88').innerHTML =  "";
	document.getElementById('art-888').innerHTML =  "";
	document.getElementById('art-8888').innerHTML =  "";

	var a = Number(document.getElementById('art-111').innerHTML) ;
	var b = Number(document.getElementById('art-222').innerHTML) ;
	var c = Number(document.getElementById('art-333').innerHTML) ;
	var d = Number(document.getElementById('art-444').innerHTML) ;
	var e = Number(document.getElementById('art-555').innerHTML) ;
	var f = Number(document.getElementById('art-666').innerHTML) ;
	var g = Number(document.getElementById('art-777').innerHTML) ;

	document.getElementById('finaltotal2').innerHTML = parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d) + parseInt(e) + parseInt(f) + parseInt(g);
}

//------------------------------------------------------------------------------------------------------------------

function scrollToSummary() {
	window.scrollTo(0,document.body.scrollHeight);
}

