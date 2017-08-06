import './schemeStrapping.scss';

var kvds =  [].slice.call(document.querySelectorAll('.kvd'));

kvds.forEach(kvd =>{
    kvd.addEventListener('click',()=>{
         kvd.classList.toggle('kvdOf')
    },false);
});

var valves = [].slice.call(document.querySelectorAll('.valve'));

valves.forEach(valve =>{
    valve.addEventListener('click',()=>{
         valve.classList.toggle('valveOf')
    },false);
});

console.log('in schemeStrapping.js');
