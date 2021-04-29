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
    const elementString = String(element);
    let phonetic = "";

    for (let i = 0; i < elementString.length; i++) {
      const digit = elementString[i];

      phonetic += bank[digit];
    }
    return phonetic;
  });

  return array.join(",");
}

phoneticConversion([3, 25, 209]);
