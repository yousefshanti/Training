/*  console.log('Hello, World!');
for (let i = 0; i < 100; i++) {

  if (i % 3 === 0 && i % 5 === 0) {
    console.log("InfiniteTiers");
  }

  else if (i % 3 === 0) {
    console.log("Infinite");
  }

  else if (i % 5 === 0) {
    console.log("Tiers");
  }
  else {
    console.log(i);
  }
}

 let m = new Map([
     ["name", "Sourav"],
     ["age", 23],
     ["job", "Engineer"]
 ]);
 console.log(m);
 const obj = {};

 // Add a key named "toString" to the object.
 obj.toString = function () {
     return "Custom toString method";
 };

 // Attempt to call the custom `toString` method.
 console.log(obj.toString()); // Output: "Custom toString method"

 // Delete the custom `toString` property.
 delete obj.toString;

 // Call the default `toString` method from Object.prototype.
 console.log(obj.toString()); // Output: "[object Object]"
 */
 function fetchData() {
   return new Promise(function(resolve, reject) {
     setTimeout(function() {
       const data = "بيانات من السيرفر";
       resolve(data);
     }, 2000);
   });
 }

 console.log("طلبنا البيانات...");

 fetchData()
   .then(function(result) {
     console.log("النتيجة: " + result);
   })
   .catch(function(error) {
     console.log("خطأ: " + error);
   });

 console.log("كمّلنا شغل ثاني بالأثناء");
