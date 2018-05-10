printFizzBuzzes();


function printFizzBuzzes(){

  for (var i = 1; i < 100; i++){
    var result = i + "";

    if ((i % 3) == 0){
      result = (result + " Fizz");
    }

    if ((i % 5) == 0){
      result = (result + " Buzz");
    }

    if(i == 0){
      result = "" + i;  
    }

  console.log (result);
  }

}