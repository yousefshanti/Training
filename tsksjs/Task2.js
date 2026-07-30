/* var companies = {
  "hardware": ["company1", "globalTech", "company2"],
  "software": ["Asal", "InfiniteTiers", "Exhausted"],
  "networking": ["company3", "company4", "company5"]
};
let bestCompany = companies.software[1];
console.log(bestCompany);
 *//*
 function checkAge() {
   const input = document.getElementById("age");
   const message = document.getElementById("msg");
   const button = document.getElementById("btn");

   button.disabled = true;   // نبدأ بتعطيل الزر
   message.innerHTML = "";

   try {
     let value = input.value;

     if (value.trim() === "") throw new Error("الحقل فاضي");
     if (isNaN(value))        throw new Error("لازم يكون رقم");

     value = Number(value);

     if (value < 18) throw new Error("العمر أقل من 18");
     if (value > 120) throw new Error("العمر غير منطقي");

     message.innerHTML = "✅ تم القبول: " + value;

   } catch (err) {
     message.innerHTML = "❌ " + err.message;

   } finally {
     button.disabled = false;  // بيرجع الزر شغال بكل الأحوال
     input.value = "";         // بيفضّي الحقل بكل الأحوال
   }
 }
 *//*
 function add(a, b) {
   let result = a + b;
   return result;
 }

console.log(add(10, 5));
console.log(add(10, 50));
console.log(add(10, 500));
 */
/*  function processUser(name, callback) {
   console.log("Processing " + name);
   callback(name);
 }

 processUser("Yousef", function(name) {
   console.log(name + " done!");
 }); */
/*
 const person = {
   name: "Yousef",
   greet: function() {
     console.log(this.name); // "Yousef" - لأنو استُدعيت عبر person
   }
 };
 person.greet();

 const greetFn = person.greet;
 greetFn(); // undefined - لأنو الاستدعاء صار بدون context
 *//*
 function createCounter() {
   let count = 0;

   return function() {
     count++;
     return count;
   };
 }

 const counter1 = createCounter();
 console.log(counter1()); // 1
 console.log(counter1()); // 2
 console.log(counter1()); // 3

 const counter2 = createCounter(); // نسخة جديدة كلياً
 console.log(counter2()); // 1 (ما بتأثر على counter1)
 */
/*  const car = { brand: "Toyota", model: "Corolla", year: 2023 };

 // for...in - على الـ keys
 for (let key in car) {
   console.log(key + ": " + car[key]);
 }

  // Object.keys() - بيرجع array بالـ keys
 console.log(Object.keys(car)); // ["brand", "model", "year"]

 // Object.values() - بيرجع array بالـ values
 console.log(Object.values(car)); // ["Toyota", "Corolla", 2023]

 // Object.entries() - بيرجع array من [key, value] pairs
 console.log(Object.entries(car));
 // [["brand","Toyota"], ["model","Corolla"], ["year",2023]]

 Object.entries(car).forEach(([key, value]) => {
   console.log(`${key} = ${value}`);
 }); */
 fetch("index.json")
   .then(response => response.json())
   .then(value => console.log(value));
