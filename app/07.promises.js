console.log('Topic: Promises');
// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".

// const promise = new Promise((resolve,reject) => {
//     console.log("Promise is created");
// });

// console.log(promise);


// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

// const promise = new Promise((resolve,reject) => {
//     resolve(1);
// });

// promise.then(result => {console.log("Promise Data")})


// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль

// const promise = new Promise((resolve,reject) => {
//     reject(1);
// });

// promise.then(result => {console.log("Promise Data")}).catch(error => {console.log("Promise Error")})


// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль


// const promise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve(1);
//     }, 3000);
// });

// promise.then(result => {console.log("Promise Data")});


// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три кнопки и три обработчика события click для этих кнопок
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.

// const handlePromise = {
//     promise:null,
//     resolve:null,
//     reject:null,
//     onSuccess: function(paramName){
//         console.log(`Promise is resolved with data: ${paramName}`);
//     },
//     onError: function(paramName){
//         console.log(`Promise is rejected with error: ${paramName}`);
//     },
// };

// var button1 = document.getElementById("btn-create-promise");
// button1.addEventListener('click', 
//  	function(event) { 
//         const promise = new Promise((resolve,reject) => {
//             handlePromise.resolve = resolve;
//             handlePromise.reject = reject;     
//             resolve("my data");
//         });

//         handlePromise.promise = promise;
//  	});

// var button2 = document.getElementById("btn-resolve-promise");
// button2.addEventListener('click', 
//     function(event) { 
//         handlePromise.promise.then(handlePromise.onSuccess);
//     });

// var button3 = document.getElementById("btn-reject-promise");
// button3.addEventListener('click', 
//  	function(event) { 
//         handlePromise.promise.then(handlePromise.onError);
//  	});



// Task 06
// Используйте предыдущее задание. Продублируйте строчку с методом then

// var button2 = document.getElementById("btn-resolve-promise");
// button2.addEventListener('click', 
//     function(event) { 
//         handlePromise.promise.then(handlePromise.onSuccess);
//         handlePromise.promise.then(handlePromise.onSuccess);
//     });

// var button3 = document.getElementById("btn-reject-promise");
// button3.addEventListener('click', 
//  	function(event) { 
//         handlePromise.promise.then(handlePromise.onError);
//         handlePromise.promise.then(handlePromise.onError);
//  	});


// Task 07
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и зарегистрируйте созданные функции.

// function onSuccess(param){
//     return `${param} Misha`;
// };

// function print(param){
//     console.log(param);
// };

// const promise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve("My name is");
//     }, 1000);
// });

// promise.then(onSuccess).then(print);

// Task 08
// Используйте предыдущий код. Добавьте в функци onSuccess генерацию исключения
// Обработайте даное исключение, используя catch. Обратите внимание,
// что метод print при этом не выполняется.

// function onSuccess(param){
//     throw Error("Something happened");
//     return `${param} Misha`;
// };

// function errorHandler(){
//     console.log("ERROR!");
// }

// function print(param){
//     console.log(param);
// };

// const promise = new Promise((resolve,reject) => {
// //    throw Error("Promise error");
//     setTimeout(() => {
//         resolve("My name is");
//     }, 1000);
// });

// promise.then(onSuccess).then(print).catch(errorHandler);


// Task 09
// Напишите функцию getPromiseData, которая принимает один параметр - промис. Функция получает
// значение промиса и выводит его в консоль
// Объявите объект со свойтвом name и значением Anna.
// Создайте врапер для этого объекта и вызовите для него функцию getPromiseData

// let obj = {name: "Anna"};
// let wraperObj = {wObj: obj};

// function getPromiseData(promise){
//     console.log(this.wObj);
//     console.log(promise);
// };

// wraperObj.getPromiseData = getPromiseData;

// const promise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         console.log("Resolve promise");

//         resolve("Hello");
//     }, 1000);
// });

// wraperObj.getPromiseData(promise);


// Task 10
// Создайте два промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// а второй промис возвращает объект {age: 16} через 3 с.
// Получите результаты работы двух промисов, объедините свойства объектов
// и выведите в консоль

// let obj1 = {name: "Anna"};
// let obj2 = {age: 16};

// const promise1 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve(1);
//     }, 2000);
// });

// const promise2 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve(1);
//     }, 3000);
// });

// Promise.all([
//     promise1.then(result => {return obj1}),
//     promise2.then(result => {return obj2})
//   ]).then(result => {
//     let res = Object.assign(...result);
//     console.log(res);
//   }
// );


// Task 11
// Используйте предыдущее задание. Пусть теперь второй промис переходит в
// состояние rejected со значением "Promise Error". Измените код, чтобы обработать
// эту ситуацию.

// let obj1 = {name: "Anna"};
// let obj2 = {age: 16};

// const promise1 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve(1);
//     }, 2000);
// });

// const promise2 = new Promise((resolve,reject) => {
//     throw Error("Promise Error");
//     setTimeout(() => {
//         resolve(1);
//     }, 3000);
// });

// Promise.all([
//     promise1.then(result => {return obj1}),
//     promise2.then(result => {return obj2})
//   ]).then(result => {
//             let res = Object.assign(...result);
//             console.log(res);
//           },
//          error => console.log(error)
// );


// Task 12
// Создайте промис, который перейдет в состояние resolve через 5с и вернет строку
// 'Promise Data'.
// Создайте второй промис, который перейдет в состояние rejected по клику на
// кнопку. Добавьте обработчик для кнопки.
// Используя метод race организуйте отмену промиса.

const promise = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(1);
    }, 2000);
});

var button = document.getElementById("btn-cancel-promise");
button.addEventListener('click', 
        function(event) { 
            console.log("Promise has been rejected")
        });

const promise2 = new Promise((resolve,reject) => {

    setTimeout(() => {
        resolve(1);
    }, 10000);



});

//promise.then(result => {return "Promise Data"}).then(result => console.log(result));
//promise.catch(error => console.log("Promise has been rejected"));
