const sum = require('./sum');



test('Constの練習', () => {
  const bookTitle = "ハリーポッター"
  const bookPrice = 3000;

  expect(bookTitle).toBe("ハリーポッター");
  expect(bookPrice).toBe(3000);

  });

test('Constの練習', () => {
  let bookPrice = 3000;
  let bookTitle = "ハリーポッター";
    
  expect(bookTitle).toBe("ハリーポッター");
  expect(bookPrice).toBe(3000);

  bookPrice = 300;
  expect(bookPrice).toBe(300);
});
  

test('Consoleの練習', () => {
  const total = 42+42;
  console.log("total"); // => 1

  const value = "値";
  console.log(value); // => ReferenceError: x is no

});

