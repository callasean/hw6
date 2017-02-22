var count1 = 0;

function myfunction()
{

count1++;

document.getElementById('pep').innerHTML = "Amount: $" + count1;

}
function myfunction2()
{

count1--;

document.getElementById('pep').innerHTML = "Amount: $" + count1;

}

var count2 = 0;

function myfunction3()
{

count2++;

document.getElementById('jalap').innerHTML = "Amount: $" + count2;

}
function myfunction4()
{

count2--;

document.getElementById('jalap').innerHTML = "Amount: $" + count2;

}

var count3 = 0;

function myfunction5()
{

count3++;

document.getElementById('onion').innerHTML = "Amount: $" + count3;
}
function myfunction6()
{

count3--;

document.getElementById('onion').innerHTML = "Amount: $" + count3;

}
function total()
{

document.getElementById('total').innerHTML = "Total: $";
document.getElementById('total').innerHTML += count1 + count2 + count3;
}

function reset()
{
	location.reload()
	// count1-count1;
	// count2-count2;
	// count3-count3;
// document.getElementById('total').innerHTML = "Total: $";
// document.getElementById('total').innerHTML += count1 - count1 + count2 - count2 + count3 - count3;
// document.getElementById('pep').innerHTML = "Amount: $"
// document.getElementById('pep').innerHTML +=- count1 + count1;
// document.getElementById('jalap').innerHTML = "Amount: $"
// document.getElementById('jalap').innerHTML +=- count2 + count2;
// document.getElementById('onion').innerHTML = "Amount: $"
// document.getElementById('onion').innerHTML +=- count3 + count3;
}

// function Order() {
  
//   var myString = document.getElementById("order");
// 	// var Order = myString.split(",");
// 	var text = "";
// 	var i;
// 	for (i = 0; i < myString.length ; i++) {
// 		text += x.elements[i].value + "<br>";
// 	}
  
//  //  for (var i=0; i<Order.length; i++) {
// 	// 	Order[i] = Order[i].trim();

// 	// 	console.log(Order[i]);
// 	// }
// }

function order() {
	var x = document.getElementById("frm1");
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
    document.getElementById("demo").innerHTML += "<hr>";
    document.getElementById("demo").innerHTML += "Subtotal:" + "<br>";
    document.getElementById("demo").innerHTML += "$";
    document.getElementById("demo").innerHTML += count1 + count2 + count3 + "<br>" + "<br>";
    document.getElementById("demo").innerHTML += "Total:" + "<br>";
    document.getElementById("demo").innerHTML += "$";
    document.getElementById("demo").innerHTML += count1 + count2 + count3 * "1.15";
    document.getElementById("break").innerHTML = "";
}








