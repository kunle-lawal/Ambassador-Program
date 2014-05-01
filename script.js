//random number generator
function randNum( min, max ) { 
    return Math.random() * ( max - min ) + min;    
}
 
$(document).ready(function() {
    $("#info").hide();
    $("#socInfo").hide();
    $("#end").hide();


    function remove(home, info, socInfo, end){
        if ()
    }

	$("#home").click(function(){
        $("#welcome").fadeIn("slow"); 
        $("#home").css("text-shadow", "0 0 10px white");
        $("#info").fadeOut("fast");
        $("#socInfo").fadeOut("fast");
        $("#end").fadeOut("fast");
    })
});


function fade(In, Out, id, speed){
if(In === true){
 $(id).fadeIn(speed);
} else if (Out === true) {
 $(id).fadeOut(speed);
}
}

fade(true, false, "#welcome", "fast"); 
