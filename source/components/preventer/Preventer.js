


// preventers.forEach(preventer => {
//     preventer.addEventListener('click', () => {

//         preventer.querySelector('.preventer_empty').classList.toggle('preventer_empty_closed');
        
//         console.log('asdfs');


//     }, false);
// });

export default class Preventer {
    constructor() {
        this.preventers =  [].slice.call(document.querySelectorAll('.preventer'));
    }

    close(number){
        this.preventers.filter(item => ~item.className.indexOf(number)).forEach(el => el.querySelector('.preventer_empty').classList.add('preventer_empty_closed'));
    }

    open(number){
        this.preventers.filter(item => ~item.className.indexOf(number)).forEach(el => el.querySelector('.preventer_empty').classList.remove('preventer_empty_closed'));
    }
}
