const clock = document.querySelector("h2#clock");

const getClock = () => {
    // const date = new Date();
    // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    // clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`


    // padStart()
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0")  
    const minutes = String(date.getMinutes()).padStart(2, "0")  
    const seconds = String(date.getSeconds()).padStart(2, "0")  
    clock.innerText = `${hours}:${minutes}:${seconds}`
}
getClock();
setInterval(getClock, 1000); // 1초마다 호출

// function sayHello() {
//   console.log("hello");
// }
// // 5000 밀리초(5초)마다 sayHello 함수를 반복적으로 호출
// setInterval(sayHello, 5000); 
// //2000 밀리초(2초) 후에 sayHello 함수를 한 번만 호출
// setTimeout(sayHello, 2000); 

