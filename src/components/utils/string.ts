export const normalizePrice = (price: string) => {
  let result = '';
  let tmp = '';
  let counter = 0;
  price
    .split('')
    .reverse()
    .forEach((e, i) => {
      console.log({tmp, result, counter});

      if (counter == 3) {
        result = result + tmp + ' ';
        tmp = '';
        counter = 0;
      }
      counter = counter + 1;
      tmp = tmp + e;
    });
  console.log(result, 'result');
  result += tmp;
  result = result.split('').reverse().join('');
  return result;
};
