$(document).ready(function(){
  
  var maxLength = 40;
  
  var length = 0;
  
  var socInfo = ["Socrative is a smart student response system that empowers teachers by engaging their classrooms with a series of educational exercises and games. Our apps are super simple and take seconds to login. Socrative runs on tablets, smartphones, and laptops.", "Teachers login through their device and select an activity which controls the flow of questions and games. Students simply login with their device and interact real time with the content.","Student responses are visually represented for multiple choice, true/false and Short Answer questions. For pre-planned activities a teacher can view reports online as a google spreadsheet or as an emailed Excel file."]

  function randNum( min, max ) {
    return Math.random() * ( max - min ) + min;
  }
  
  function gid(id){
      return document.getElementById(id)
  }
  
  var sepe = window.setInterval(function(){
    length += 10;
    $("#seperate").css("width", length +"%");
    
    if(length >= 40){
      window.clearInterval(sepe);
      $("#seperate").css("width", "40%");
    }
  }, 1000/10);


  gid("smart").innerHTML = socInfo[0];


 /* function runSocinfo(){
    //var randTestimo = randNum(0, 3);
    socChange = 0;    
console.log(socChange);

    changeSoc = window.setInterval(function(){
      socChange++;

      if(socChange >= 5 && socChange < 10){
        gid("smart").innerHTML = socInfo[1];
      } else if(socChange >= 10 && socChange < 15){
        gid("smart").innerHTML = socInfo[2];
      } else if(socChange >= 15){
        gid("smart").innerHTML = "Socrative is a smart student response system that empowers teachers by engaging their classrooms with a series of educational exercises and games. Our apps are super simple and take seconds to login. Socrative runs on tablets, smartphones, and laptops."

        window.clearInterval(changeSoc)
        window.clearInterval(runSocinfoCheck)
      }
    }, 1000);
  }


  runSocinfoCheck = window.setInterval(function(){
    var top = $(document).scrollTop()

    if(top >= 800){
      runSocinfo();
    }  

  }, 1000);*/

  topCheck = window.setInterval(function(){
        var top = $(document).scrollTop()

          if(top >= 200){
          $(".navbar").css({
            "height": '12%',
            "margin-top": '-8%',
            "position": "fixed"
          });
          $(".nav").css('margin-top', '-1.4%');
          $("img").css('margin-top', '0%');
        } else {
          $(".navbar").css({
            "height": '6.2%',
            "margin-top": '-1.2%',
            "position": "relative"
          });
          $(".nav").css('margin-top', '0.6%');
          $("img").css('margin-top', '2%');
        }    
        
        console.log(top);

    }, 1000);



  var next = 4

  $("#arrow1").click(function(){

    console.log("next: " + next);
    if(next === 4){
      next--
    }
    if(next < 1){
      gid("smart").innerHTML = socInfo[1]
      next = 4;
      next--
    } else if(next === 1){
      next--
      gid("smart").innerHTML = socInfo[0]
    } else if(next === 2) {
      next--
      gid("smart").innerHTML = socInfo[1]
    } else if(next === 3 ){
      next--
      gid("smart").innerHTML = socInfo[2]
    }
  });

  $("#arrow2").click(function(){

    console.log("next: " + next);
    if(next >= 4){
      gid("smart").innerHTML = socInfo[1]
      next = 0;
      next++;
    } else if(next === 1){
      next++;
      gid("smart").innerHTML = socInfo[0]
    } else if(next === 2) {
      next++;
      gid("smart").innerHTML = socInfo[1]
    } else if(next === 3 ){
      next++;
      gid("smart").innerHTML = socInfo[2]
    }
  });

//Goes to socrative information
$("#socInfoNav").click(function(){
  var top = $(document).scrollTop()

  $('html,body').animate({
    scrollTop: $("#infos").offset().top + -190
  }, 2000);

  if(top >= 700){
    $('html,body').animate({
      scrollTop: $("#infos").offset().top + -90
    }, 2000);
  }
});

//Goes back to the top or home page
  $("#home").click(function(){
    $('html,body').animate({
      scrollTop: $("#homeGo").offset().top + -190
    }, 1400);
  });


//Goes to the signup section
  $("#signup").click(function(){
    var top = $(document).scrollTop()


    $('html,body').animate({
      scrollTop: $("#signupA").offset().top + -190
    }, 1400);

    if(top >= 700){
      $('html,body').animate({
        scrollTop: $("#signupA").offset().top + -90
      }, 2000);
  }
  });


//Goes to the section about "US"
  $("#about").click(function(event) {
    var top = $(document).scrollTop()

    $('html,body').animate({
      scrollTop: $("#usInfos").offset().top + -190
    }, 1400);

    if(top >= 700){
      $('html,body').animate({
        scrollTop: $("#usInfos").offset().top + -90
      }, 2000);
  }
  });

  $("#formc").hover(function() {
    $("#highlight").animate({left: 500}, 1300)
  }, function() {                           
    $("#highlight").animate({left: -490}, 1300)
  });

});
 
