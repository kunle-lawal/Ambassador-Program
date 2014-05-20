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


  function persuade(){
    //Hide all the persuading divs
    $("#whatIs").hide();
    $("#whoUse").hide();
    $("#whyUse").hide();
    $("#howUse").hide();
    $("#arrow").hide();
    slow ="1000"
      window.setTimeout(function(){
        $("#whatIs").fadeIn(slow);
      }, 3000);

      window.setTimeout(function(){
        $("#whoUse").fadeIn(slow);
      }, 4000);

      window.setTimeout(function(){
        $("#whyUse").fadeIn(slow);
      }, 5000);

      window.setTimeout(function(){
        $("#howUse").fadeIn(slow);
      }, 6000);

      window.setTimeout(function(){
        window.setInterval(function(){
        $("#arrow").fadeIn(slow);
        $("#arrow").effect("bounce", { times:5 }, 2000);
        },1000);
      },6000);

  };

//run the persuade function
persuade()
  
    window.setInterval(function(){
      var randTestimo = randNum(0, 4);
      
      function getOut(easy, solution, coolTool, loving){
        if(easy === true){
          $("#easy").css({
            color:"#ffffff",
            opacity:"0.1"
          });
        }
        if(solution === true){
          $("#solution").css({
            color:"#ffffff",           
            opacity:"0.1"
          });
        }
        if(coolTool === true){
          $("#coolTool").css({
            color:"#ffffff",
            opacity:"0.1"
          });
        }
        if(loving === true){
          $("#loving").css({
            color:"#ffffff",
            opacity:"0.1"
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

        getOut(true, false, true, true);

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
      
    }, 1.5*1000);
    
  
 /* $(".proclaim").click(function(){
   $(".proclaim").css("transform", "perspective(800px) rotate3d(1, 0, 0, 17deg)");
    $(".proclaim").css("opacity", "0.7");
 });
  */
     var scroll =  $(document).scrollTop();   
  
  
      if(scroll >= 700){
        alert("Hi");  
      }
  
      var click = ["#who", "#what", "#why", "#how"];
      for (var i = 0; i < click.length; i++) {
        $(click[i]).click(function(event) {
      width = 0
      height = 0
      moreInfo = window.setInterval(function(){
        height += 10
        $("#moreInfo").css('height', height + "px");
        
        
        if (height >= 100) {
            height = 100;
            width += 4;
        
            $("#moreInfo").css('width', width + "%");
            if (width >= 48) {
                window.clearInterval(moreInfo)
            };
        };
        
      }, 1000/10)
      
    });
      };


  window.setInterval(function(){
      var top = $(document).scrollTop()

          if(top >= 300){
          $(".navbar").css({
            "height": '12%',
            "margin-top": '-8%',
            "position": "fixed"
          });
          $(".nav").css('margin-top', '-1.4%');
        } else {
          $(".navbar").css({
            "height": '6.2%',
            "margin-top": '-1.2%',
            "position": "relative"
          });
          $(".nav").css('margin-top', '0.6%');
        }
        
        
        
    }, 1000);

    
  $("#signup").click(function(){
    window.open( 'https://docs.google.com/forms/d/1s2Efu7jlggVbvEHfJuJy50OY5h1fgRkHRB8rS-XEzvo/viewform?usp=send_form');
  });

});
