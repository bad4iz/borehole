import './schemeStrapping.scss';

var kvds = document.querySelectorAll('.kvd');

kvds.forEach(kvd =>{
    kvd.addEventListener('click',()=>{
         kvd.classList.toggle('kvdOf')
    },false);
});

var valves = document.querySelectorAll('.valve');

valves.forEach(valve =>{
    valve.addEventListener('click',()=>{
         valve.classList.toggle('valveOf')
    },false);
});

console.log('in schemeStrapping.js');
