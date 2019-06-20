#!/usr/bin/node
import { car, cdr, cons } from 'hexlet-pairs';


const nodFunc = (func) => {
  const firstNumber = car(cdr(func()));
  const seconNumber = cdr(cdr(func()));
  const nDel = `${firstNumber} ${seconNumber}`;
  const searchDelitel = (c, b) => {
    // eslint-disable-next-line no-plusplus
    for (let i = b; i >= 1; i--) {
      if (c % i === 0 && b % i === 0) {
        return `${i}`;
      }
    }
  };
  const pairnNodDel = cons(nDel, searchDelitel(firstNumber, seconNumber));
  return pairnNodDel;
};

/*const nodFunc = (a) => {
  let x = '';
  let y = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; a[i] !== ' '; i++) {
    x += a[i];
  }
  // eslint-disable-next-line no-plusplus
  for (let j = x.length + 1; j < a.length; j++) {
    y += a[j];
  }
  console.log(`${x} ${y}`);
  // eslint-disable-next-line consistent-return
  const searchDelitel = (c, b) => {
    // eslint-disable-next-line no-plusplus
    for (let i = b; i >= 1; i--) {
      if (c % i === 0 && b % i === 0) {
        return `${i}`;
      }
    }
  };
  return searchDelitel(x, y);
};*/

export { nodFunc };
