const humanCatDogYears = (number) => {

  let hcdy = [];

      hcdy.push(number);

  const cat = function (number) {

      if (number === 1) {
          hcdy.push(15);
      } else if (number === 2) {
          hcdy.push(24);
      } else {

      let dy = ( number - 2 ) * 4;
        let res = dy + 24;
        hcdy.push(res);
    };
};

  const dog = function (number) {

    if (number === 1) {
        hcdy.push(15);
    } else if (number === 2) {
        hcdy.push(24);
    } else {

    let dy = ( number - 2 ) * 5;
      let res = dy + 24;
      hcdy.push(res);
};
};
cat(number);
dog(number);
return hcdy;
};

module.exports = humanCatDogYears;
