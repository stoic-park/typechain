// // console.log("hello");
// const name = "Stoic-park",
//   age = 30,
//   gender = "male";

const sayHi = (name: string, age: number, gender: string): string => {
  //   console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
  return `Hello ${name}, you are ${age}, you are a ${gender}`;
};

// sayHi(name, age); // ? gender? 붙여주면 optional parameter
// sayHi(name, age, gender);
console.log(sayHi("Stoic-park", 30, "male"));
// sayHi("Stoic-park", "30", "male"); // error

export {};
