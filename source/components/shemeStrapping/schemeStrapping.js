import './schemeStrapping.scss';

var kvds = [].slice.call(document.querySelectorAll('.kvd'));

kvds.forEach(kvd => {
    kvd.addEventListener('click', () => {
        kvd.classList.toggle('kvdOf')
    }, false);
});

var valves = [].slice.call(document.querySelectorAll('.valve'));

valves.forEach(valve => {
    valve.addEventListener('click', () => {
        valve.classList.toggle('valveOf');
        // console.log(valve.className);
        christmasTreeClosed3(valve);
    }, false);
});


// замыкание создание функции и вызов ее же
var christmasTreeClosed3  = (() => {
    var christmasTree3 =  [].slice.call(document.querySelectorAll('.christmasTree_3'));
    return (valve) => {
        if (valve.id === 'christmasTree_3') {
            christmasTree3.forEach(item => item.classList.toggle('christmasTree_3_closed'))
        }
    }
})();

// добавле удаление давления в установках
let pressures = [].slice.call(document.querySelectorAll('.pressure '));
// вывод в консоль
let getPressuresItem = (el) => {
  let parent = el.parentNode.parentNode.className;
  let child = ~el.className.indexOf('buttonPlus')?1:0;

  console.log('RivgCodeinterpreter(SetChenjPer([' + parent + ']////'+ child + ');)EndCode');
};
// сам обработчик
pressures.forEach(pressure => {
    [].slice.call(pressure.children).forEach(item => item.addEventListener('click', getPressuresItem.bind(null,item), false));
});
