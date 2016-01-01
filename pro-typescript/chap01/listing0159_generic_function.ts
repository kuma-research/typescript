function reverseList<T> (list: T[]): T[] {
  var reversedList: T[] = [];
  for (var i = (list.length-1); i >= 0; i--) {
    reversedList.push(list[i]);
  }
  return reversedList;
}

var letters = ['a', 'b', 'c', 'd'];
var reverseLetters = reverseList(letters);

var errorList = [1, 2, 'a']; // will be inferred as 'any'
var reverseErrorList = reverseList(errorList);