import './index.scss';
import 'normalize.css';

import '../../components/shemeStrapping/schemeStrapping';
import '../../components/preventer/index';
import Preventer from'../../components/preventer/Preventer';

// 
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

var i = 0;
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



// schemeStrapping
var schemeStrappings =  [].slice.call(document.querySelectorAll('.schemeStrapping'));
schemeStrappings.forEach(schemeStrapping => {
    schemeStrapping.addEventListener('click', (val) => console.log(val.target.id), false );
})


// превентор
let preventer = new Preventer();

exports.preventer = preventer;
