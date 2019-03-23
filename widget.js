


write = function() {var write = d3.tsv("https://raw.githubusercontent.com/kgronpug/biases/master/biases.tsv", function(data) {

	data = data.filter(function(d){return d.Category == "Decision-making, belief, and behavioral biases"});
//	console.log(data[Math.floor(Math.random()*data.length)].Name);
//	console.log(data[Math.floor(Math.random()*data.length)].Description);
//	console.log(data[Math.floor(Math.random()*data.length)].Category);

	randomNumber = Math.floor(Math.random()*data.length)

	biasName = data[randomNumber].Name;
	biasDesc = data[randomNumber].Description;
//	biasCat = data[Math.floor(Math.random()*data.length)].Category;

	document.getElementById('name').innerHTML = biasName
	document.getElementById('desc').innerHTML = biasDesc
//	document.getElementById('cat').innerHTML = biasCat
	
});
};


//onload = function() { write(); }
//var inter = setInterval(function() { write(); }, 7500);

//setTimeout(write(), 500);

write2 = function() {var write = d3.tsv("https://raw.githubusercontent.com/kgronpug/biases/master/biases.tsv", function(data) {

	data = data.filter(function(d){return d.Category == "Decision-making, belief, and behavioral biases"});
//	console.log(data[Math.floor(Math.random()*data.length)].Name);
//	console.log(data[Math.floor(Math.random()*data.length)].Description);
//	console.log(data[Math.floor(Math.random()*data.length)].Category);

	randomNumber = Math.floor(Math.random()*data.length)

	biasName = data[randomNumber].Name;
	biasDesc = data[randomNumber].Description;


	$('#name').fadeOut('slow', function() { 
			$(this).text(data[randomNumber].Name).fadeIn('slow');
	});
	$('#desc').fadeOut('slow', function() { 
			$(this).text(data[randomNumber].Description).fadeIn('slow');
	});	

});
};



onload = function() { write2(); }

var inter = setInterval(function() {write2(); }, 7500);











