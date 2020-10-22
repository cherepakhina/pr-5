$('textarea').keypress(function(){

    if(this.value.length > 256){
        return false;
    }
  
    $("#remainingC").html("Remaining characters : " + (160 - this.value.length));
  });​

