//console.log('Topic: Objects');

// Task 01
// RU: Создать функцию-конструктор Tune(title, artist) для создания объектов
//     с публичными свойствами title, artist и методом concat().
//     Метод должен возвращать конкатенацию значений свойств title и artist.
//     Создать несколько объектов. Вызвать их метод concat().
// EN: Create function-constructor Tune(title, artist) for creating objects
//     with public properties title, artist and method concat().
//     Mathod should return the concatenation of values of propeties title and artist.
//     Create a few objects. Call their method concat().

// Task 02
// RU: Создать функцию-конструктор Tune(title, artist) для создания объектов
//     с приватными свойствами title, artist и публичным методом concat().
//     Метод должен возвращать конкатенацию значений свойств title и artist.
//     Создать несколько объектов. Вызвать их метод concat().
// EN: Create function-constructor Tune(title, artist) for creating objects
//     with private properties title, artist and method concat().
//     Mathod should return the concatenation of values of propeties title and artist.
//     Create a few objects. Call their method concat().

// Task 03
// RU: Расширить прототип объекта String методом exclaim() если его нет в прототипе.
//     Метод должен добавлять знак восклицания к строке и выводить ее в консоль.
// EN: Extend the prototype of object String with the method exclaim(), if it doesn't exist.
//     Method should add exclaimation mark to the string and disply it in the console.



// if (!String.prototype.hasOwnProperty("explain")){
//    String.prototype.exclaim = function(){
//        console.log(`${this}!`);
//    }
// }
// const str = "hello";
// str.exclaim();

// Task 04
// RU: Создать функцию-конструктор Book(title, author).
//     Добавить два метода: getTitle, getAuthor.
//     Создать функцию-конструктор TechBook(title, author, category).
//     Передать значения title, author функции-конструктору Book.
//     Добавить два метода: getCategory, getBook – возвращает строку со значениями параметров.
//     Для реализации наследования используйте:
//     1. Object.create()
//     2. Class
// EN: Create function-constructor Book(title, author).
//     Add two methods: getTitle, getAuthor.
//     Create function-constructor TechBook(title, author, category).
//     Pass the value of title, author to the function-constructor Book.
//     Add two methods: getCategory, getBook - returns the string with values of all parameters.
//     Implement inheritance using:
//     1. Object.create()
//     2. Class

// class Book {
//     constructor(title, author) {
//       this.title = title;
//       this.author = author;
//     }

//     getTitle(){
//        console.log(this.title)
//     }

//     getAuthor(){
//         console.log(this.author)
//     }
// }

// class TechBook extends Book {
//     constructor(title, author, category) {
//       super(title, author);
//       this.category = category;
//     }

//     getCategory(){
//        console.log(this.category);
//     }

//     getBook(){
//         console.log(`${this.title}`);
//         console.log(`${this.author}`);
//     }
// }

// const book = new Book('tt','aa');
// book.getAuthor();

// const techBook = new TechBook("t","a","c");
// techBook.getCategory();
// techBook.getBook();

// console.log(book);

// function Book(title, author){
//        this.title = title;
//        this.author = author;
// }

// Book.prototype.getTitle=function() {
//     console.log(`${this.title}`)
// }

// Book.prototype.getAuthor=function() {
//     console.log(`${this.author}`)
// }


// function TechBook(title, author, category){
//     Book.apply(this,[title, author])
//     this.category = category;
// }

// TechBook.prototype.getCategory=function() {
//     console.log(`${this.category}`)
// }

// TechBook.prototype = Object.create(Book.prototype);
// TechBook.prototype.constuctor = TechBook;

// const book = new Book('myT','myA');
// book.getAuthor();

// const techBook = new TechBook('myTTT','myAAA', 'myC');
// techBook.getAuthor();
// techBook.getCategory();


// Task 05
// RU: Создайте класс Shape со статическим свойством count.
//     Проинициализируйте это свойство 0.
//     В конструкторе класса увеличивайте count на 1.
//     Создайте производный класс Rectangle. Добавьте метод для подсчета площади.
//     Создайте несколько объектов. Выведите в консоль количество созданных объектов.
// EN: Create class Shape with static property count.
//     Initialize the property count with 0.
//     Increment the value of count by 1 in the constructor.
//     Create derived class Rectangle. Add method to calculate area.
//     Create a few objects. Display the number of created objects in the console.

// class Shape{
//     constructor() {
//         Shape.count++;
//     }
//      getCount(){
//         console.log(Shape.count);
//     }
// }

// Shape.count = 0;

// class Rectangle extends Shape{
//     constructor(width,lenght){
//         super();
//         this.width = width;
//         this.lenght = lenght;
//     }
//     getSquare(){
//         console.log(this.width*this.lenght);
//     }
// }

// const r1 = new Rectangle(5,5);
// const r2 = new Rectangle(5,10);
// const r3 = new Rectangle(5,20);

// r1.getSquare();
// r2.getSquare();
// r3.getSquare();

// console.log(Shape.count);





// Task 06
// RU: Создать функцию-конструктор Person() для конструирования объектов.
//     Добавить два метода: setFirstName() и setLastName().
//     Методы должны вызываться в цепочке, например obj.setFirstName(...).setLastName(...)
// EN: Create function-constructor Person() for creating objects.
//     Add two methods: setFirstName() и setLastName().
//     These methods should be called in chain like this obj.setFirstName(...).setLastName(...)


// function Person(){

// }

// Person.prototype.setFirstName=function(firstName) {
//     this.firstName = firstName;
//     return this;
// }

// Person.prototype.setLastName=function(lastName) {
//     this.lastName = lastName;
//     return this;
// }

// const person = new Person().setFirstName("MyName").setLastName("myLastName");

// console.log(person);

// Task 07
// RU: Cоздать объект data и сконфигурирвать его свойства:
//     1. id: значение = 1, изменяемое.
//     2. type: значение = 'primary', перечисляемое
//     3. category: getter возвращает значение поля _category,
//                  setter устанавливает значение поля _category, перечисляемое, конфигурируемое.
//     Используя for-in вывести свойства объекта в консоль
// EN: Create an object data and configure its properties:
//     1. id: value = 1, writable
//     2. type: value = 'primary', enumerable
//     3. category: getter returns the value of the property _category,
//                  setter sets the value if the property _category, enumerable, configurable.
//     Using for-in display property of an object in the console.


// const data = {};

// Object.defineProperties(data, {
//     id: {
//       value: 1,
//       writable: true
//     },
//     type: {
//         value: "primary",
//         writable: true,
//         enumerable: true
//     },
//     category: {
//         get: function() {
//             return this._category;
//         },

//         set: function(category) {
//            return this._category = category;
//         }, 
//         enumerable: true,
//         configurable: true,
//     }   
//   });

//   console.log(data);

//   for (obj in data){
//       console.log(obj);
//   }

// Task 08
// RU: Создать литерал объекта с двумя свойствами. Запретить расширять объект.
// EN: Create object literal with two properties. Deny extend the object.


// const object = {
//     a:1,
//     b:2
//     };
    
//     Object.preventExtensions(object);

// Task 09 TodoList Application
// RU: Создать классы 'задача' и 'список задач' со следющим функционалом:
//     1. Добавить задачу в список
//     2. Получить и вывести в консоль список всех задач
//        в формате "[new] Task 1", "[completed] Task2"
//     3. Отметить указанную задачу как выполненную
//     4. Удалить задачу из списка
//     5. Отсортировать задачи по алфавиту по возрастанию или по убыванию
//     6. Очистить список задач
// EN: Create classes 'task' and 'task list' with the following features:
//     1. Add task to the list
//     2. Get and display the list of all tasks in the console
//        using the following format "[new] Task 1", "[completed] Task2"
//     3. Check task as a completed task
//     4. Remove task from the list of tasks.
//     5. Sort tasks alphabetically in asc or desc order
//     6. Clear the list of tasks.


// function square(x, y) {
// 	console.log(this);
// 	return x * y;
// }
// let v = square(2, 3);
// console.log(v);
