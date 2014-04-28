$(document).ready(function() {
	alert("hi");
	function opacity(id, value){
		return $(id).css("opacity", value);
	}
	//random number generator
function randNum( min, max ) { 
    return Math.random() * ( max - min ) + min;    
}
 
	$("#login").click(function(){
		document.getElementById('ambasador').innerHTML = "Ambasador"
	})


	window.setInterval(function(){
		var randCol =  randNum(1, 2)
		if (randCol >= 1 && randCol <= 1.5){
			$("#ambasador").css('color', 'gray');
		}
		if (randCol >= 1.5 && randCol <= 2) {		
			$("#ambasador").css('color', '#003366');
		};
		console.log(randCol);
	}, 1000)

});