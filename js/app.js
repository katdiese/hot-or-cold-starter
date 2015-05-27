$(document).ready(function(){
	console.log("ready!");
  
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
 
  var correctAnswer = Math.floor((Math.random() * 100) + 1 );
  console.log(correctAnswer);
  var count = 0;
  
 $(".button").click(function(event) {
   event.preventDefault();
   var guess = $(".text").val();
   
   if(guess.length >= 1 && guess <= 100)
    {
      count++;
      $("#count").html(count);
      $("#guessList").append("<li>" + guess + "</li>");
      $(".text").val("");    
    }
   else 
    {
      alert("Please enter a number between 1 and 100");
      return;
    }
   
   if( guess == correctAnswer) {
      alert("YOU'VE LITERALLY CAUGHT ON FIRE!!! SOMEONE GET A FIRE EXTINGUISHER!!!(you win)");
      location.reload(false);
    }
   else if(guess <= correctAnswer - 46) 
    {
        $("#feedback").html("<h3>Colder than a Polar Bear's backside</h3>");
    }
   else if(guess >= correctAnswer + 46) 
    {
      $("#feedback").html("<h3>Colder than a Polar Bear's backside</h3>");
    }
   else if(guess <= correctAnswer - 21 && guess >= correctAnswer - 45) 
    {
      $("#feedback").html("<h3>Cold!</h3>");
    }
   else if(guess >= correctAnswer + 21 && guess <= correctAnswer + 45)
    {
      $("#feedback").html("<h3>Cold!</h3>");
    }
   else if (guess <= correctAnswer - 10 && guess >= correctAnswer -20) 
    {
      $("#feedback").html("<h3>Cold-ish</h3>");        
    }
   else if (guess >= correctAnswer + 10 && guess <= correctAnswer + 20)
    {
      $("#feedback").html("<h3>Cold-ish</h3>");
    }
   else if(guess <= correctAnswer - 5 && guess >= correctAnswer - 9) 
    {
      $("#feedback").html("<h3>Pretty Warm</h3>");
    }
   else if(guess >= correctAnswer + 5 && guess <= correctAnswer + 9)
    {
      $("#feedback").html("<h3>Pretty Warm</h3>");
    }
   else if(guess <= correctAnswer - 2 && guess >= correctAnswer - 4) 
    {
      $("#feedback").html("<h3>Burning up!!</h3>");
    }
   else if(guess >= correctAnswer + 2 && guess <= correctAnswer + 4)
    { 
      $("#feedback").html("<h3>Burning up!!</h3>");
    }
   else if(guess <= correctAnswer - 1)
    {
      $("#feedback").html("<h3>YOU'RE ON FIRE!!!</h3>");
    }
   else if(guess >= correctAnswer + 1)
    {
      $("#feedback").html("<h3>YOU'RE ON FIRE!!!</h3>");
    }
    
  });
  
    
  $(".new").click(function(e){
    location.reload(false);
  });
  

});

