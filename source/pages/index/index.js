import './index.scss';
import 'normalize.css';

import '../../components/shemeStrapping/schemeStrapping';
import '../../components/preventer/index';
import Preventer from'../../components/preventer/Preventer';

import Cork from './components/Cork';
import CoilTubings from './components/CoilTubings';
import Tubes from './components/Tubes';
import PressureTesting from './components/PressureTesting.js';

var coilTubings = new CoilTubings();
var tubes = new Tubes();

exports.tubes = tubes;
exports.coilTubings = coilTubings;

var cork = new Cork();
exports.cork = cork;


//
let rivgValveConsol = (el) => {
    let open = ~el.target.className.indexOf('Of')?'1':'0';
    return 'RivgCodeinterpreter(SetChenjPer([' + el.target.id + ']////' + open +');)EndCode';
}

// schemeStrapping
var schemeStrappings =  [].slice.call(document.querySelectorAll('.schemeStrapping'));
schemeStrappings.forEach(schemeStrapping => {
    schemeStrapping.addEventListener('click', (val) => console.log(rivgValveConsol(val)) , false );
})

// превентор
let preventer = new Preventer();
exports.preventer = preventer;

// опресовка
let pressureTesting = new PressureTesting();
exports.pressureTesting = pressureTesting;










//////////////////////// удалить после сборки ////////////////////////////////////

 // промывка включить выключить
var buttonPotok = document.querySelector('button#potok');
buttonPotok.onclick = () => {
    // промывка включить выключить
    tubes.waterFlow();
};


/////// aspo

var aspoInput = document.querySelector('input#aspoInput');
aspoInput.onchange = () => {
    // position aspo
    tubes.aspoPosition(300);
    tubes.aspoShow();
};

var aspoHideButton = document.querySelector('button#aspoHide');
aspoHideButton.onclick = () => {
    //
    tubes.aspoHide();
};

var aspoShowButton = document.querySelector('button#aspoShow');
aspoShowButton.onclick = () => {
    //
    tubes.aspoShow();
};


///////////  cork
var i = 0;
var buttonWashed = document.querySelector('button#washed');
buttonWashed.onclick = () => {
    // промывка включить выключить
    cork.washed();
};


///////// трубы
// ползунки
var tubeRange = document.querySelector('#tubeRange');
var coilTubingRange = document.querySelector('#coilTubingRange');



read("mousedown");
read("mousemove");


function read(evtType) {
    tubeRange.addEventListener(evtType, function () {
        window.requestAnimationFrame(function () {
            // само движение
            tubes.position(tubeRange.value);
        });
    });

    coilTubingRange.addEventListener(evtType, function () {
        window.requestAnimationFrame(function () {
            // само движение
            coilTubings.position(coilTubingRange.value);
        });
    });
}
