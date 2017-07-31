import './index.scss';
import 'normalize.css';

import Cork from './components/Cork';
import CoilTubings from './components/CoilTubings';
import Tubes from './components/Tubes';

var coilTubings = new CoilTubings();
var tubes = new Tubes();



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


var buttonPotok = document.querySelector('button#potok');


buttonPotok.onclick = () => {
    // промывка включить выключить
    tubes.waterFlow();
};

var cork = new Cork(100);

var buttonWashed = document.querySelector('button#washed');
buttonWashed.onclick = () => {
    // промывка включить выключить
    cork.washed();
};


// aspo
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


 
            // button#aspoShow показать
            // button#aspoHide скрыть