const array = process.argv.slice(2);

function phoneticConversion(array) {
  const bank = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    10: "Ten",
  };

  array = array.map((element) => {
    let phonetic = "";

    for (let i = 0; i < element.length; i++) {
      const digit = element[i];

      phonetic += bank[digit];
    }
    return phonetic;
  });

  console.log(array.join(","));
}

phoneticConversion(array);
