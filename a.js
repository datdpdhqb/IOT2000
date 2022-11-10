let timerId = setTimeout(() => console.log("sẽ không được gọi"), 1000);
console.log(timerId); // định danh cho timer

clearTimeout(timerId);
console.log(timerId);