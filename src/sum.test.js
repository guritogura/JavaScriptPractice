const sum = require("./sum");

test("Constの練習", () => {
  const bookTitle = "ハリーポッター";
  const bookPrice = 3000;

  expect(bookTitle).toBe("ハリーポッター");
  expect(bookPrice).toBe(3000);
});

test("Constの練習", () => {
  let bookPrice = 3000;
  let bookTitle = "ハリーポッター";

  expect(bookTitle).toBe("ハリーポッター");
  expect(bookPrice).toBe(3000);

  bookPrice = 300;
  expect(bookPrice).toBe(300);
});

test("Consoleの練習", () => {
  const total = 42 + 42;
  console.log(total);

  const value = "値";
  console.log(value);
});

test("文字列の練習1", () => {
  const str1 = "文字列1";
  const str2 = "文字列1";
  const str3 = `文字列
練習中`;
  const str4 = "文字列\n練習中";

  expect(str1).toBe(str2);
  expect(str1 === str2).toBe(true);
  expect(str3).toBe(str4);

  const str5 = "これは${str1}です";
  const str6 = `これは${str1}です`;
  expect(str5).toBe("これは${str1}です");
  expect(str6).toBe("これは文字列1です");
});

test("文字列の練習2", () => {
  const str7 = "文字列";
  console.log(`これは${str7}です。`);
});

test("文字列の練習3", () => {
  const str8 = `改行の
限界に挑む`;
  const str9 = "改行の\n限界に挑む";
  expect(str8).toBe(str9);
});

test("オブジェクトの練習", () => {
  const obj = {
    address: "東京都",
    telephone: "03",
    age: 24,
    hasLicense: true,
    nested: { value: 1 },
  };
  expect(obj.address).toBe("東京都");
  //ブラケット記法↓
  expect(obj["telephone"]).toBe("03");
  expect(obj["age"]).toBe(24);

  expect(obj.hasLicense).toBe(true);
  expect(obj.nested.value).toBe(1);
  //"."で掘り下げることができる
});

test("オブジェクトの練習1", () => {
  const array = ["index1", true, { age: 24 }];

  expect(array[0]).toBe("index1");
  expect(array[1]).toBe(true);
  expect(array[2].age).toBe(24);
});

test("べき乗の練習", () => {
  expect(3 ** 4).toBe(81);
  expect(Math.pow(3, 4)).toBe(81);
});

test("分割代入 配列", () => {
  const array = [1, 2, 3];
  const [a, b, c] = array;

  expect(a).toBe(1);
  expect(b).toBe(2);
  expect(c).toBe(3);
});

test("分割代入 オブジェクト1", () => {
  const obj = {
    key: "value",
  };

  const key = obj.key;
  expect(key).toBe("value");
});

test("分割代入 オブジェクト2", () => {
  const obj = {
    key1: "value1",
    key2: "value2",
  };

  const { key1, key2 } = obj;
  expect(key1).toBe("value1");
  expect(key2).toBe("value2");
  expect({ key1, key2 }).toStrictEqual(obj);
});

function addPrefix(text, prefix) {
  // `prefix`が指定されていない場合は"デフォルト:"を付ける
  const pre = typeof prefix === "string" ? prefix : "デフォルト:";
  return pre + text;
}

test("三項演算子", () => {
  expect(typeof "文字列").toBe("string");
  expect(typeof undefined).toBe("undefined");
  expect(addPrefix("abc")).toBe("デフォルト:abc");
  expect(addPrefix("abc", "d")).toBe("dabc");
});

test("Number.parentInt,Number.parseFloatの練習", () => {
  expect(Number.parseInt("10", 10)).toBe(10);
  expect(Number.parseInt("10", 10)).not.toBe("10");
  expect(Number.parseInt("10")).toBe(10);
  expect(Number.parseFloat("3.14", 10)).toBe(3.14);
  expect(Number.parseFloat("3.14", 10)).not.toBe("3.14");
  expect(Number.parseFloat("3.14")).toBe(3.14);
  expect(Number.parseInt("3.14", 10)).toBe(3);
  expect(Number.isNaN(Number.parseInt("abc", 10))).toBe(true);
});

test("functionの練習", () => {
  function double(num) {
    return num * 2;
  }
  expect(double(10)).toBe(20);

  function echo(x) {
    return x;
  }
  expect(echo(1)).toBe(1);
  expect(echo()).toBe(undefined);
});

test("デフォルト引数の練習", () => {
  function addPrefix2(text, prefix = "デフォルト:") {
    // `prefix`が指定されていない場合は"デフォルト:"を付ける
    return prefix + text;
  }
  expect(addPrefix2("abc")).toBe("デフォルト:abc");
  expect(addPrefix2("abc", "d")).toBe("dabc");
});
// Mainブランチをしっかり確認する
test("functionとArrow functionの練習", () => {
  const a = function (x) {
    return x * x;
  };
  const b = (x) => {
    return x * x;
  };
  const c = (x) => x * x;
  expect(a(3)).toBe(9);
  expect(b(8)).toBe(64);
  expect(a(11)).toBe(121);
});

test("If/elseIfの練習", () => {
  const A = function (version) {
    if (version === "ES5") {
      return "ECMAScript 5";
    } else if (version === "ES6") {
      return "ECMAScript 2015";
    } else if (version === "ES7") {
      return "ECMAScript 2016";
    }
    return "unknown";
  };

  expect(A("ES5")).toBe("ECMAScript 5");
  expect(A("ES6")).toBe("ECMAScript 2015");
  expect(A("ES7")).toBe("ECMAScript 2016");
  expect(A(3)).toBe("unknown");
});

test("elseの練習1", () => {
  const A = function (year) {
    if (year % 4 === 0) {
      // 4で割り切れる
      if (year % 100 === 0) {
        // 100で割り切れる
        if (year % 400 === 0) {
          // 400で割り切れる
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
  };

  expect(A(2020)).toBe(true);
  expect(A(2023)).toBe(false);
  expect(A(2000)).toBe(true);
  expect(A(2100)).toBe(false);
});

test("elseの練習2", () => {
  const A = function (year) {
    if (year % 400 === 0) {
      // 4で割り切れる
      return true;
    } else if (year % 100 === 0) {
      return false;
    } else if (year % 4 === 0) {
      return true;
    } else {
      return false;
    }
  };

  expect(A(2020)).toBe(true);
  expect(A(2023)).toBe(false);
  expect(A(2000)).toBe(true);
  expect(A(2100)).toBe(false);
});

test("Switchの練習", () => {
  const A = function (version) {
    switch (version) {
      case "ES5":
        return "ECMAScript 5";
      case "ES6":
        return "ECMAScript 2015";
      case "ES7":
        return "ECMAScript 2016";
      default:
        return "unknown";
    }
  };

  expect(A("ES5")).toBe("ECMAScript 5");
  expect(A("ES6")).toBe("ECMAScript 2015");
  expect(A("ES7")).toBe("ECMAScript 2016");
  expect(A(3)).toBe("unknown");
});

test("Switchの練習", () => {
  const A = function (janken) {
    switch (janken % 4) {
      case 0:
        return "あいこ";
      case 1:
        return "ぐー";
      case 2:
        return "ちょき";
      case 3:
        return "パー";
      default:
        return "Unknown";
    }
  };

  expect(A(4)).toBe("あいこ");
  expect(A(1)).toBe("ぐー");
  expect(A(2)).toBe("ちょき");
  expect(A(3)).toBe("パー");
  expect(A("じゃんけんしよう")).toBe("Unknown");
});

test("繰り返し処理1", () => {
  function sum(max) {
    let total = 0;
    for (let i = 0; i < max; i++) {
      total += i + 1;
    }
    return total;
  }

  expect(sum(4)).toBe(10);
  expect(sum(10)).toBe(55);
});

test("繰り返し処理2", () => {
  function sum(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    return total;
  }

  expect(sum([1])).toBe(1);
  expect(sum([])).toBe(0);
  expect(sum([1, 2, 3])).toBe(6);
});

test("break処理", () => {
  function IsEvenIncluded(numbers) {
    let IsEvenIncluded = false;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        IsEvenIncluded = true;
        break;
      }
    }
    return IsEvenIncluded;
  }

  expect(IsEvenIncluded([1])).toBe(false);
  expect(IsEvenIncluded([])).toBe(false);
  expect(IsEvenIncluded([1, 2, 3])).toBe(true);
});

test("breakからreturnの置き換え", () => {
  function IsEvenIncluded(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        return true;
      }
    }
    return false;
  }

  expect(IsEvenIncluded([1])).toBe(false);
  expect(IsEvenIncluded([])).toBe(false);
  expect(IsEvenIncluded([1, 2, 3])).toBe(true);
});

test("someとfilterの練習", () => {
  const array = [1, 2, 3, 4, 5];
  const array1 = [1, 3, 5, 7];
  const array2 = [2, 4, 6, 8];

  //someはコールバック関数
  // function some(callback) {
  //  for(let i = 0; i < array.length; i++) {
  //  if(callback(array[i])) { return true; }
  // }
  //  return false;
  // }
  expect(
    array.some((number) => {
      return number % 2 == 0;
    })
  ).toBe(true);
  expect(
    array1.some((number) => {
      return number % 2 == 0;
    })
  ).toBe(false);
  expect(
    array2.some((number) => {
      return number % 2 == 0;
    })
  ).toBe(true);
  //filterは条件に合うリストを返す
  expect(
    array.filter((number) => {
      return number % 2 == 0;
    })
  ).toStrictEqual([2, 4]);
  expect(
    array1.filter((number) => {
      return number % 2 == 0;
    })
  ).toStrictEqual([]);
  expect(
    array2.filter((number) => {
      return number % 2 == 0;
    })
  ).toStrictEqual([2, 4, 6, 8]);
  expect(
    array.filter((number) => {
      return number % 2 !== 0;
    })
  ).toStrictEqual([1, 3, 5]);
  //returnを使用しない場合は;と{}が不要
  expect(array.filter((number) => number % 2 !== 0)).toStrictEqual([1, 3, 5]);
});

test("オブジェクトの練習", () => {
  const obj = {};
  expect(Object.keys(obj)).toStrictEqual([]);

  const blueGreen = "blue-green";

  const color = {
    red: "red",
    green: "green",
    blue: "blue",
    [blueGreen]: "blue-green",
  };
  expect(Object.keys(color).length).toStrictEqual(4);
  expect(color.red).toBe("red");

  expect(color.green).toBe("green");

  expect(color.blue).toBe("blue");

  const AAA = "あああ";

  const A1 = {
    AAA: AAA,
  };

  const A2 = {
    AAA,
  };
  expect(A1).toStrictEqual(A2);

  color.orange = "orange";
  expect(color.orange).toStrictEqual("orange");

  // color["blue-green"] = "blue-green";
  expect(color["blue-green"]).toStrictEqual("blue-green");
});

//プロパティのチェックの方法
//undefinedでチェックする方法
test("undefinedでチェックする方法", () => {
  const obj = {
    one: 1,
  };
  expect(obj.one).toStrictEqual(1);
  expect(obj.two).toStrictEqual(undefined);
});

//Object.hasOwnを呼び出す練習
test("Object.hasOwnを呼び出す練習", () => {
  const obj = {
    one: 1,
  };
  expect(Object.hasOwn(obj, "one")).toStrictEqual(true);
  expect(Object.hasOwn(obj, "two")).toStrictEqual(false);
});

//Object.keys, Object.values, Object.entiriesを呼び出してテストコードで動きを確認してみる

test("Object.keys, Object.values, Object.entiriesを呼び出してテストコードで動きを確認してみる", () => {
  const obj = {
    one: 1,
    two: 2,
    three: 3,
  };
  expect(Object.keys(obj)).toStrictEqual(["one", "two", "three"]);
  expect(Object.values(obj)).toStrictEqual([1, 2, 3]);
  expect(Object.entries(obj)).toStrictEqual([
    ["one", 1],
    ["two", 2],
    ["three", 3],
  ]);
});

test("Object assignとSpread構文", () => {
  const a = {
    one: 1,
    two: 2,
    three: 3,
  };

  const b = {
    four: 4,
    five: 5,
    three: 30,
  };

  expect(Object.assign({}, a, b)).toStrictEqual({
    one: 1,
    two: 2,
    three: 30,
    four: 4,
    five: 5,
  });
  expect({ ...a, ...b, six: 6 }).toStrictEqual({
    one: 1,
    two: 2,
    three: 30,
    four: 4,
    five: 5,
    six: 6,
  });
});

test("配列の分割代入の練習", () => {
  const array = [1, 2, 3];
  const [first, two, three] = array;

  expect(array[0]).toStrictEqual(first);
  expect(array[1]).toStrictEqual(two);
  expect(array[2]).toStrictEqual(three);
});

test("Indexofの練習", () => {
  const array = [1, 2, 3, "red"];

  expect(array.indexOf(0)).toStrictEqual(-1);
  expect(array.indexOf(1)).toStrictEqual(0);
  expect(array.indexOf("red")).toStrictEqual(3);

  const obj = { blue: "青" };
  const array1 = [1, 2, 3, obj];
  expect(array1.indexOf({ blue: "青" })).toStrictEqual(-1);
  expect(array1.indexOf(obj)).toStrictEqual(3);
});
