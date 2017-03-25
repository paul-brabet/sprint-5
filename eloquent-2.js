/*Challenge 1: Create a looping triangle*/
hashString = '#';

for (var i = 0; i < 7; i++) {
  console.log(hashString);
  hashString += '#';
};


/*Challenge 2: Create a Fizzbuzz game that counts to 100*/
for (var i = 1; i < 101; i++) {
  if ((i % 3 == 0) && (i % 5 == 0)) {
    console.log("Fizzbuzz!");
  }
  else if (i % 3 == 0) {
    console.log("Fizz!");
  }
  else if (i % 5 == 0) {
    console.log("Buzz!");
  }
  else {
    console.log(i);
  }
};


/* Challenge 3: Create a hash grid with a changable size variable*/
var size = 8;

for (var j = 1; j <= size; j++) {
  if (j % 2 == 1 ) {
    var row = "";
    for (var i = 1; i <= size; i++) {
      if (row.length == size) {
        row += "\n";
      }
      else if (i % 2 == 1) {
        row += " ";
      }
      else {
        row += "#";
      }
    };
    console.log(row);
  }
  else {
    var row = "";
    for (var k = 1; k <= size; k++) {
      if (row.length == size) {
        row += "\n";
      }
      else if (k % 2 == 0) {
        row += " ";
      }
      else {
        row += "#";
      }
    };
    console.log(row);
  };
};
