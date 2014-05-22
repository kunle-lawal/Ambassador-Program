$(document).ready(function(){
  $("#ready").sortable();
  
  $("#start").click(function(){
    window.open( 'https://docs.google.com/forms/d/1s2Efu7jlggVbvEHfJuJy50OY5h1fgRkHRB8rS-XEzvo/viewform?usp=send_form');
  });
  
  $("#signup").click(function(){
    
  });
  
  var sepe = window.setInterval(function(){
    length += 10;
    $("#seperate").css("width", length +"%");
    
    if(length >= 40){
      window.clearInterval(sepe);
    }
  }, 1000/10);  

  
});
   
