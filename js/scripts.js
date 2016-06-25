function removeSmallest(numbers) {
  debugger;
  var lowNumber = 0;
  var Module = (function () {
    return {
      getSmallestNumber: function () {
        var min = Math.min.apply(null, numbers);
        return min
      },
      removeSmallestNumber: function () {
        for (var j = 0; j < numbers.length; j++){
          if (numbers[j] === lowNumber){
            numbers.splice(j, 1);
            break;
          }
        }
        return numbers;
      }
    };
  })();
  lowNumber = Module.getSmallestNumber();
  result = Module.removeSmallestNumber();
  return result;
}

$(document).ready(function(){
  $('.myForm').submit(function(event){
    event.preventDefault();
    $('#result').empty();
    var input = $('#input').val();
    var myArray = input.split(""); //I don't understnd why the value of myArray keeps getting changed
    for (var i = 0; i < myArray.length; i++) { //this converts the array of strings to intergers
      myArray[i] = +myArray[i];
    }
    var param1 = myArray;
    var param2 = myArray;
    var result = removeSmallest(param1, param2);
    $('#result').append(result);
  });
});
