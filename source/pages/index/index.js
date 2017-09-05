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
};

// schemeStrapping
var schemeStrappings =  [].slice.call(document.querySelectorAll('.schemeStrapping'));
schemeStrappings.forEach(schemeStrapping => {
    schemeStrapping.addEventListener('click', (val) => console.log(rivgValveConsol(val)) , false );
});

// превентор
let preventer = new Preventer();
exports.preventer = preventer;

// опресовка
let pressureTesting = new PressureTesting();
exports.pressureTesting = pressureTesting;


function vis() {
    let valves = [].slice.call(document.querySelectorAll('.valve'));
    let kvds = [].slice.call(document.querySelectorAll('.kvd'));

    valves.forEach(valve => {
        let p = document.createElement('p');
        p.innerText = valve.id;
        p.style.transform = 'rotate(-90deg) ';
        p.style.position = 'relative';
        p.style.left = '-30px';
        valve.appendChild(p)
    })
    kvds.forEach(valve => {
        let p = document.createElement('p');
        p.innerText = valve.id;
        p.style.transform = 'rotate(0deg) ';
        p.style.position = 'relative';
        p.style.top = '-30px';
        valve.appendChild(p)
    })

}

exports.vis = vis;