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
  console.log(total); 

  const value = "値";
  console.log(value); 
});

test('文字列の練習1', () => {
  const str1 = "文字列1";
  const str2 = '文字列1';
  const str3 = `文字列
練習中`;
  const str4 = "文字列\n練習中";

  expect(str1).toBe(str2);
  expect(str1 === str2).toBe(true);
  expect(str3).toBe(str4);

  const str5 = "これは${str1}です"
  const str6 = `これは${str1}です`
  expect(str5).toBe("これは${str1}です");
  expect(str6).toBe("これは文字列1です");

});

test('文字列の練習2', () => {
  const str7 = "文字列";
  console.log(`これは${str7}です。`)

});

test('文字列の練習3', () => {
  const str8 = `改行の
限界に挑む`;
  const str9 = "改行の\n限界に挑む"
  expect(str8).toBe(str9);
});


test('オブジェクトの練習', () => {
  const obj= {
    address:"東京都",
    telephone:"03",
    age:24,
    hasLicense:true,
    nested:{value:1}
  }
  expect(obj.address).toBe("東京都");
  expect(obj["telephone"]).toBe("03");
  expect(obj["age"]).toBe(24);
  expect(obj.hasLicense).toBe(true);
  expect(obj.nested.value).toBe(1);
  //"."で掘り下げることができる
});

test('オブジェクトの練習1', () => {
  const array = ["index1",true,{age:24}]

  expect(array[0]).toBe("index1");
  expect(array[1]).toBe(true);
  expect(array[2].age).toBe(24);
});


test('べき乗の練習', () => {
  expect(3 ** 4).toBe(81);
  expect(Math.pow(3,4)).toBe(81);
});

test('分割代入 配列', () => {
  const array = [1,2,3]
  const [a,b,c] = array

  expect(a).toBe(1);
  expect(b).toBe(2);
  expect(c).toBe(3);
});

test('分割代入 オブジェクト1', () => {
  const obj ={
    "key" : "value"
  };

  const key = obj.key
  expect(key).toBe("value");
});


test('分割代入 オブジェクト2', () => {
  const obj ={
    "key1" : "value1",
    "key2" : "value2"
  };

  const {key1,key2} = obj;
  expect(key1).toBe("value1");
  expect(key2).toBe("value2");
  expect({key1,key2}).toStrictEqual(obj)
});



function addPrefix(text, prefix) {
  // `prefix`が指定されていない場合は"デフォルト:"を付ける
  const pre = typeof prefix === "string" ? prefix : "デフォルト:";
  return pre + text;
}

test('三項演算子', () => {
  expect(typeof "文字列").toBe("string");
  expect(typeof undefined).toBe("undefined");
  expect(addPrefix("abc") ).toBe("デフォルト:abc");
  expect(addPrefix("abc","d") ).toBe("dabc");
});
