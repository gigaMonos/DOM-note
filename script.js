//BOM
/*
const windowWidth = window.innerWidth; //размер окна браузера 
console.log(windowWidth);
console.log(navigator.userAgent); //получае модель браузера
if(navigator.userAgent.includes('Chrome')){
    console.log('This is Chrome');
};
console.log(location.href); //получаем текущий адресс страницы
history.back(); //просмотрер исторрии браузере и передвижение по ней 
history.forward();
//диалоговые окно 
//alert("Hello"); //окно с кнопочкой ОК 
//confirm("Do you want be coder?"); //кнопки ОК и Отмена
prompt("Who you are?"); //ОК, Отмена и поле для ввода текста 

//получаем элимент
const htmlElement = document.documentElement; // весь html обьект
const headElement = document.head;
const bodyElement = document.body;
console.log(htmlElement);
console.log(headElement);
console.log(bodyElement);
//первый и последний дочерний элимент
const firstChild = bodyElement.firstChild;
const lastChild = bodyElement.lastChild; 
console.log(firstChild); //получаем текст, потому что это узел перевода сторки
console.log(lastChild);
//проверка чайлднодс содержит список всех детей включая текстовые узлы
const childNodes = bodyElement.childNodes;
console.log(childNodes); //коллекция
//для проверки наличия узлов дочерных узлов 
//существует также специальная функция 
console.log(bodyElement.hasChildNodes());
for (let node of childNodes){
    console.log(node);
};
//получаем соседние и родительские узлы c 
//const bodyElement = document.body;
const previousSiblingNode = bodyElement.previousSibling; // запрос на предыдущий узел 
//получим невидимый текстовый узел
const nextSiblingNode = bodyElement.nextSibling; //следующий элимент 
const parentNode = bodyElement.parentNode;
console.log(previousSiblingNode);
console.log(nextSiblingNode);
console.log(parentNode);
//получаем коллекцию только с элиментами
const bodyChildren = bodyElement.children;
console.log(bodyChildren); 
//поиск по селектору класса
const elemsOne = document.querySelectorAll('.lesson_list');
console.log(elemsOne);
//поиск по селектору тега
const elemsTwo = document.querySelectorAll('li');
console.log(elemsTwo);
//поиск по смешаному селектора тега и класса 
const elemsThree = document.querySelectorAll('li.lesson_item-list');
console.log(elemsThree);
//поиск по тегу первого уровня вложеность 
const elemsFour = document.querySelectorAll('.lesson_list>li');
console.log(elemsFour);
//поиск по нескольки классам 
const elemsFive = document.querySelectorAll('.lesson_list, .lesson_text');
console.log(elemsFive);
//поиск по вложенным классам 
const elemsSix = document.querySelectorAll('.lesson_list .lesson_text');
console.log(elemsSix);
//поиск по ID
const elemsSeven = document.querySelectorAll('#listItem');
console.log(elemsSeven);
//поиск по атрибуту 
const elemsEigth = document.querySelectorAll('[data-item]');
console.log(elemsEigth);
//поиск по атрибуту со значением 
const elemsNine = document.querySelectorAll('[data-item="85"]');
console.log(elemsNine);
//получаем один элимент, а не массив обьектов
const elemSecond = document.querySelector('.lesson_list');
console.log(elemSecond);
//получчаем елемент по ID 
const elemID = document.getElementById('listItem');
console.log(elemID);
//получаем живой массив 
const elemGet = document.getElementsByTagName('li');
console.log(elemGet);
//живой массив по имени классу
const elemClass = document.getElementsByClassName('lesson_item-list');
console.log(elemClass);
//по имени обьекта
const elemName = document.getElementsByName('list');
console.log(elemName);
//метод Closest ищет предки элемента
const elemClosest = document.querySelector('.lesson_item-sub-list');
const parentNodelist = elemClosest.closest('.lesson_list');
console.log(parentNodelist);
//проверяет соответствие селектору цсс
const elemMaches = document.querySelectorAll('.lesson_item-list');
for(let element of elemMaches){
    if(element.matches('[class$="lesson_item-list_red"]')){
        console.log('red');
    }else if (element.matches('[class$="lesson_item-list_blue"]')){
        console.log("blue");
    }
}

//innerHTML изминние обьектов
const textElement = document.querySelector('.lesson_text');
//перезаписываем содержимое обьекта 
textElement.innerHTML = "Im free";
//получаем содержимое обьекта
const textElementContent = textElement.innerHTML;
console.log(textElementContent);
//добавляем содержимое обьекта
textElement.innerHTML = 
`<p>${textElementContent}</p> 
<p>Work on your free <span class="yellow">time</span> </p>`;
console.log(textElement.innerHTML);
//содержимое обьекта целико OuterHTML
const textOuter = document.querySelector('.lesson_text');
let textLesson = textOuter.outerHTML;
textOuter.outerHTML = "<p>Lets go on party?</p>";
console.log(textLesson);

//полезная возможность текстконтент это записывать текст 
//безопасным способом
const textContentEx = document.querySelector('.lesson_text');

let textResult = textContentEx.textContent;
console.log(textResult);
textContentEx.textContent = "<p>Lets go on party?</p>";
console.log(textContentEx.textContent);
//получаем следующий текст узел, то есть комментарий
let comment = document.querySelector('.lesson');
let getComment = comment.nextSibling;
console.log(getComment);
console.log(getComment.data);
//изминения комментария
getComment.data = "Hello, Im new comment";
console.log(getComment.data);

//обьект возле которого мы хотим разместить новый
let textAdd = document.querySelector('.lesson_text');
//создание нового элемента
let createNewStuff = document.createElement('div');
createNewStuff.innerHTML = `I'ts was amazing party`;
console.log(createNewStuff);
//внедерение обьектa в дерево
//перед обьектом 
//createNewStuff.before(textAdd);
//после обьекта
//createNewStuff.after(textAdd);
//внутри и в начало обьекта
//createNewStuff.prepend(textAdd);
//внутри и в конец обьекта 
textAdd.append(createNewStuff, "hello");

//insertAdjacentHTM 
let textElement = document.querySelector('.lesson_text');
textElement.insertAdjacentHTML(
    'afterbegin',
    `<p>You want be <span class="yellow">
    Free</span> </p>`
);

//insertAdjacentText добавляет просто строку
let textElement = document.querySelector('.lesson_text');
textElement.insertAdjacentText(
    'afterbegin',
    `<p>You want be <span class="yellow">
    Free</span> </p>`
);
//

//создание
let insertElement = document.querySelector('.lesson_text');
let newObject = document.createElement('div');
newObject.innerHTML = "Im crezy";
insertElement.insertAdjacentElement(
    'afterbegin',
    newObject
);
//перенос элемента
let lessonBlock = document.querySelector('.lesson');
let title = document.querySelector('h3');
//переносим title в конец блока lessonBlock
lessonBlock.append(title);
//
let cloneElement = document.querySelector('.lesson_text');
let rezultCloneElement = cloneElement.cloneNode(true);//добавив в скобки true произойдет клонирование вместе 
//содержимым обьекта 
//клонируем один обьект внутрь другого 
let OverClone = document.querySelector('.lesson');
OverClone.append(rezultCloneElement);
//удаляем обьект
rezultCloneElement.remove();
//измнения стилей css
let changeStyle = document.querySelector('.lesson_item-list_red');
console.log(changeStyle);
//className получаем имя классов элемента
let elementClass = changeStyle.className;
//перезаписываем имя класса
changeStyle.className = "red";
//classList
let changeList = document.querySelector('.lesson_item-list_red');
//добавить класс
changeList.classList.add('active');
//удалить класс
changeList.classList.remove('active');
//добавить класс, если его нет. удалить если есть
changeList.classList.toggle('active');
//проверка наличия класса, возвращает тру или фолс
changeList.classList.contains('active');

let element = document.querySelector('.lesson_item-list_red');
//провверка наличия клаас
element.classList.add('active');
if(element.classList.contains('active')){
    console.log("Im Active")
};
//перебор классов в обьекте
elementFor = document.querySelector('.lesson_item-list_red');
elementFor.classList.add('active');
for( let rezultFor of elementFor.classList){
    console.log(rezultFor)
};
//element.style
let cssStyle = document.querySelector('.lesson_item-list_red');
//меняем цвет
cssStyle.style.color = 'red';
//запись свойство из двух и больше слов запис в обычном стиле
cssStyle.style.marginBottom = "30px";
//получаем свойство в консоль 
console.log(cssStyle.style.marginBottom);
//сбрасываем свойство присвоив пустую строку
cssStyle.style.marginBottom = "";
*/
//стандарнтый вариант записи таблицы стилей
let standartStyle = document.querySelector('.lesson_text');
standartStyle.style.cssText = `
    margin-bottom: 30px;
    color:red;
    `;
//получение стилей без атрибута стайл
let getStyle = getComputedStyle(standartStyle);
console.log(getStyle.fontSize);
let elementBefore = getComputedStyle(standartStyle, "::before");
console.log(elementBefore.backgroundColor);
//удобно получить свойство цсс  числом с помощью парсинт
let paddingLeft = parseInt(getStyle.paddingLeft);
console.log(paddingLeft);
//действия с атрибутами 
//проверка наличия атрибута
standartStyle.hasAttribute('name');
//получаем значения атрибута
standartStyle.getAttribute('name');
//устанавливаем значение атрибута 
standartStyle.setAttribute('name', 'value');
//удаляем атрибут
standartStyle.removeAttribute('name');
//проверка
standartStyle.setAttribute('some-attribute', 'some-value');
if (standartStyle.hasAttribute('some-attribute')){
    console.log('yes Im')
};
const empl = 'ex for git';
