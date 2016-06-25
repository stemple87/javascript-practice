//.sort() and the method I wrote here are sorting the array globally, confused as to why.
var findSmallest = function(sortedArray) {
  var counter = 0;
  for (var i = 0; i < sortedArray.length; i++) {
    counter ++;
    if(sortedArray[i] > sortedArray[i + 1]) {
      var largerNum = sortedArray[i]
      sortedArray.splice(i, 1)
      sortedArray.push(largerNum);
      i -= counter;
      counter = 0;
    }
  }
  return sortedArray[0];
}

var removeSmallest = function(numbers, lowNumber) {
  for (var j = 0; j < numbers.length; j++)
  {
    if (numbers[j] === lowNumber)
    {
      numbers.splice(j, 1);
      break;
    }
  }
  return numbers;
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

    console.log("myArray before methods: " + myArray)
    var smallestNum = findSmallest(param1);
    console.log("myArray after smallestNum Method: " + myArray)
    var result = removeSmallest(param2, smallestNum);
    console.log("myArray after removeSmallest Method: " + myArray)
    $('#result').append(result);
  });
});
