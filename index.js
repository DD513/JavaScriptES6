(function () {
  console.log("===Start===");
  console.log("");

  console.log("===Block Scope 塊級作用域 - let, const===");
  // varTest();
  // letTest();
  // constTest();
  console.log("===Block Scope End===");
  console.log("");

  console.log("===JavaScript ES6 Arrow Functions 箭頭函數===");
  // ES6Test();
  console.log("===JavaScript ES6 End===");
  console.log("");

  console.log("===JavaScript ES6 Default Function Parameters===");
  // DefaultTest();
  console.log("===JavaScript ES6 Default End===");
  console.log("");

  console.log("===JavaScript ES6 Spread/Rest Operator===");
  // SpreadTest();
  console.log("===JavaScript ES6 Spread/Rest Operator End===");
  console.log("");

  console.log("===JavaScript ES6 Object Literal Extensions 物件實字的擴展===");
  // ObjectLiteralTest();
  console.log("===JavaScript ES6 Object Literal Extensions End===");
  console.log("");

  console.log("===JavaScript ES6 Octal/Binary Literals 八進位/二進位表示法===");
  // OctalBinaryTest();
  console.log(
    "===JavaScript ES6 Octal/Binary Literals 八進位/二進位表示法 End==="
  );
  console.log("");

  console.log(
    "===JavaScript ES6 Array and Object Destructuring Assignment 陣列和物件的解構賦值==="
  );
  // ObjectDestructuringTest();
  console.log(
    "===JavaScript ES6 Array and Object Destructuring Assignment End==="
  );
  console.log("");

  console.log("===JavaScript ES6 super Keyword===");
  // SuperTest();
  console.log("===JavaScript ES6 super Keyword End===");
  console.log("");

  console.log("===JavaScript ES6 Template Literals 字串樣版===");
  // TemplateLiteralsTest();
  console.log("===JavaScript ES6 Template Literals 字串樣版 End===");
  console.log("");

  console.log("===JavaScript ES6 Promise Object 物件===");
  // PromiseTest();
  console.log("===JavaScript ES6 Promise Object 物件 End===");
  console.log("");

  console.log("");
  console.log("===End===");
})();

// var x = "global";
// let y = "global";
// console.log("global var x=", this.x, "var可以"); // "global"
// console.log("global let y=", this.y, "取不到全域中let值"); // undefined

function varTest() {
  var x = 1;
  {
    var x = 2; // 這裡的 x 與 function 區塊內部的 x 是一樣的，因此會影響 function 區塊內所有的 x
    console.log("function 內：x =", x); // 2
  }
  console.log("function 內：x =", x); // 2
}

function letTest() {
  let y = 1;
  {
    let y = 2; // 這裡的 x 與 function 區塊內部的 x 是不同的，只會作用在這層 block 區塊中
    console.log("function 內：y =", y); // 2
  }
  console.log("function 外：y =", y); // 1
}

function constTest() {
  const A = 10;

  // 會發生錯誤，常數值不能再被改變
  // TypeError: Assignment to constant variable
  A = 10;

  // 陣列是一個有趣的例子
  const ARR = [1, 2];

  // 可以改變陣列裡的內容
  // 因為 ARR 變數值沒有改變，還是指向同一個陣列
  ARR.push(3);

  // [1, 2, 3]
  console.log("ARR = ", ARR);

  // 錯誤，不能改常數值
  // TypeError: Assignment to constant variable
  ARR = 123;

  // 但可以改變陣列裡面的內容
  ARR[0] = 4;

  // [4, 2, 3]
  console.log(ARR);
}

function ES6Test() {
  const dog = "john";
  function origin(dog) {
    console.log("===I'm origin function===", dog);
  }
  Variety = (dog) => {
    console.log("===I'm Variety ES6 function", dog);
  };

  // 傳統標準的函數宣告語法
  var multiply = function (a, b) {
    return console.log("origin : a * b", a * b);
  };

  // 使用 Arrow Functions 的語法
  var multiply2 = (a, b) => console.log("Variety : a * b", a * b);

  origin(dog);
  Variety(dog);
  // 20
  multiply(2, 10);
  multiply2(2, 10);
}

function DefaultTest() {
  // 傳統寫法
  function multiply(a, b) {
    b = typeof b !== "undefined" ? b : 1;
    return console.log("origin:", a * b);
  }

  multiply(5, 2); // 10
  multiply(5, 1); // 5
  multiply(5); // 5

  // ES6寫法

  multiply2 = (a, b = 1) => {
    return console.log("ES6:", a * b);
  };

  multiply2(5, 2); // 10
  multiply2(5, 1); // 5
  multiply2(5); // 5
}

function SpreadTest() {
  function foo(x, y, z) {
    console.log("foo = ", x, y, z);
  }

  var arr = [1, 2, 3];

  // 輸出 1 2 3
  // 等同於執行 foo(1, 2, 3)
  foo(...arr);

  // 例2
  function foo2(a, b, c, d, e) {
    console.log("foo2 = ", a, b, c, d, e);
  }

  var arr2 = [3, 4];

  // 輸出 1 2 3 4 5
  // 等同於執行 foo(1, 2, 3, 4, 5)
  foo2(1, 2, ...arr2, 5);
}

function ObjectLiteralTest() {
  const foo = "foo hi";
  const bar = "bar hi";
  var obj = {
    foo,
    bar,
  };
  var obj2 = {
    foo: foo,
    bar: bar,
  };
  console.log("obj = ", obj);
  console.log("obj2 = ", obj2);

  var prefix = "es6";

  var obj3 = {
    // 計算屬性
    [prefix + " is"]: "cool",

    // 計算方法
    [prefix + " score"]() {
      console.log(100);
    },
  };

  // 顯示 cool
  console.log(obj3["es6 is"]);

  // 顯示 100
  obj3["es6 score"]();
}

function OctalBinaryTest() {
  var oValue = 0o10;

  // 8
  console.log("oValue = ", oValue);

  var bValue = 0b10;

  // 2
  console.log("bValue = ", bValue);
}

function ObjectDestructuringTest() {
  var one = "one";
  var two = "two";
  var three = "three";
  console.log("this is One Two Three = ", one, two, three);

  var foo = ["four", "five", "six"];
  var [four, five, six] = foo;
  // "four"
  console.log(four);

  // "five"
  console.log(five);

  // "six"
  console.log(six);

  var obj = {
    p: [
      "Hello",
      {
        y: "World",
      },
    ],
  };

  var {
    p: [x, { y }],
  } = obj;

  // "Hello"
  console.log("x = ", x);

  // "World"
  console.log("y = ", y);

  const obj4 = {
    name: "apple",
    age: 20,
    birthday: 2000 / 01 / 01,
  };

  // 傳統寫法
  const name = obj4.name;
  const age = obj4.age;
  const birthday = obj4.birthday;

  // "apple , 20 , 2000/01/01"

  // ES寫法 ，前提是要名稱一模一樣
  // const { name, age, birthday } = obj4;
  // "apple , 20 , 2000/01/01"
  console.log(name, age, birthday);
}

function SuperTest() {
  var parent = {
    foo() {
      console.log("Hello from the Parent"); // 2
    },
    a: "a of parent", // 4
  };

  var child = {
    foo() {
      console.log("Hello from the child"); // 1
      super.foo();

      console.log("this is = ", this.a);
      console.log("super is = ", super.a);
    },
    a: "a of child", // 3
  };

  Object.setPrototypeOf(child, parent);

  child.foo();
}

function TemplateLiteralsTest() {
  var str = "string text line 1\n" + "string text line 2";
  var strES6 = `string text line 1 
  string text line 2`;
  console.log("str = ", str);
  console.log("str ES6", strES6);

  var a = 5;
  var b = 10;
  console.log(
    "Origin Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + "."
  );
  console.log(`ES6 Fifteen is ${a + b} and not ${2 * a + b}.`);
}

function PromiseTest() {
  // 宣告 promise 建構式
  let newPromise = new Promise((resolve, reject) => {
    // 傳入 resolve 與 reject，表示資料成功與失敗
    let ran = parseInt(Math.random() * 2); // 隨機成功或失敗
    console.log("Promise 開始");
    if (ran) {
      setTimeout(function () {
        // 3 秒時間後，透過 resolve 來表示完成
        resolve("3 秒時間(fulfilled)");
      }, 3000);
    } else {
      // 回傳失敗
      reject("失敗中的失敗(rejected)");
    }
  });

  newPromise
    .then((data) => {
      // 成功訊息 (需要 3 秒)
      console.log("成功 data = ", data);
    })
    .catch((err) => {
      // 失敗訊息 (立即)
      console.log("失敗 err = ", err);
    });
}
