let input = prompt(
    "Input a word and if you would like to shout it type it in all caps, if you would like to whipser it type it in all lowercase and if you just want to say it normal type it normally."
  );
  
  if (input.toUpperCase() === input) {
    alert("WHY ARE YOU SHOUTING AT ME!");
    console.log("SHOUTING");
  } else if (input.toLowerCase() === input) {
    alert("I can't hear you why are you whispering?");
    console.log("whisper");
  } else {
    alert(
      "I appreciate you for not shouting or whispering to me I  can hear you clearly:)"
    );
    console.log("Neither");
  }

