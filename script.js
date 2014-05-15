$(document).ready(function(){
  
  var maxLength = 40;
  
  var length = 0;
  
  function randNum( min, max ) {
    return Math.random() * ( max - min ) + min;
}

  function changePages(){
    $("#home").click(function(event) {
      $(this).css("box-shadow", "inset 1px 10px 18px 3px rgba(0, 0, 0, 0.89)");
    });
  }

  changePages();

  
  var sepe = window.setInterval(function(){
    length += 10;
    $("#seperate").css("width", length +"%");
    
    if(length >= 40){
      window.clearInterval(sepe);
    }
  }, 1000/10);
  
  
    window.setInterval(function(){
      var randTestimo = randNum(0, 4);
      
      function getOut(easy, solution, coolTool, loving){
        if(easy === true){
          $("#easy").css({
            color:"#ffffff",
            opacity:"0"
          });
        }
        if(solution === true){
          $("#solution").css({
            color:"#ffffff",
            opacity:"0"
          });
        }
        if(coolTool === true){
          $("#coolTool").css({
            color:"#ffffff",
            opacity:"0"
          });
        }
        if(loving === true){
          $("#loving").css({
            color:"#ffffff",
            opacity:"0"
          });
        }
      }
      
      
      if(randTestimo <= 1){
        $("#easy").css({
          color:"#5f625a",
          opacity:"0.7"
        });
        getOut(false, true, true, true);
      } else if(randTestimo <= 2 && randTestimo >= 1.09){
        $("#solution").css({
          color:"#5f625a",
          opacity:"0.7"
        });
        getOut(ture, false, true, true);
      } else if(randTestimo <= 3 && randTestimo >= 2.09){
        $("#coolTool").css({
          color:"#5f625a",
          opacity:"0.7"
        });
        getOut(true, true, false, true);
      } else if(randTestimo <= 4 && randTestimo >= 3.09){
        $("#loving").css({
          color:"#5f625a",
          opacity:"0.7"
        });
        getOut(true, true, true, false);
      }
      
    }, randNum(1, 10)*1000);
    
  
 /* $(".proclaim").click(function(){
   $(".proclaim").css("transform", "perspective(800px) rotate3d(1, 0, 0, 17deg)");
    $(".proclaim").css("opacity", "0.7");
 });
  */
     var scroll =  $(document).scrollTop();   
  
  
      if(scroll >= 700){
        alert("Hi");  
      }
  
 
});  
   
   
