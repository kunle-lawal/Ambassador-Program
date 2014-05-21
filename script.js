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
  
  /*var click = ["#who", "#what", "#why", "#how"];
    for (var i = 0; i < click.length; i++) {
        $(click[i]).click(function(event) {
      width = 0
      height = 0
      moreInfo = window.setInterval(function(){
        height += 10
        $("#moreInfo").css('height', height + "px");
        
        
        if (height >= 20) {
            height = 100;
            width += 4;
        
            $("#moreInfo").css('width', width + "%");
            if (width >= 48) {
                window.clearInterval(moreInfo)
            };
        };
        
      }, 1000/10)
      
    });
  };*/


var index = 0;
var text = "This program is geared towards students who wish to see tehnoology grow and shape the future, students like you!" ;
var text2 = "The ambassador program is meant to assist socrative classrooms by deligating student to help in their classrooms with socrative related issues"
var text3 = "Why is this important? Well your future, this program can be a part of your college resume, you can gain valuable skills, and be a part of a something BIG!"
var text4 = "Feeling pumped, well scroll down the page to sign up and become a part of this valuable expirience, Get Started Today!"
// Here you can put in the text you want to make it type.
//first we do who 
who = function(){
  document.getElementById('moreInfo').innerHTML += text.charAt(index);
  index += 1;
  var t = setTimeout('who()',40);
  // The time taken for each character here is 100ms. You can change it if you want.
}

//Now what
what = function(){
  document.getElementById('moreInfo').innerHTML += text2.charAt(index);
  index += 1;
  var t2 = setTimeout('what()',40);
  // The time taken for each character here is 100ms. You can change it if you want.
}

//now why
why = function(){
  document.getElementById('moreInfo').innerHTML += text3.charAt(index);
  index += 1;
  var t3 = setTimeout('why()',40);
  // The time taken for each character here is 100ms. You can change it if you want.
}

//now how
how = function(){
  document.getElementById('moreInfo').innerHTML += text4.charAt(index);
  index += 1;
  var t4 = setTimeout('how()',40);
  // The time taken for each character here is 100ms. You can change it if you want.
}

//Now make click atrributes for all the buttons
$("#who").click(function(event) {
  who();

});

$("#what").click(function(event) {
  what();
  document.getElementById('moreInfo').innerHTML += text2.charAt(index);
  index += 1;
  var t2 = setTimeout('what()',40);
});

$("#why").click(function(event) {
  why();

});

$("#how").click(function(event) {
  how();

});




topCheck = window.setInterval(function(){
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
