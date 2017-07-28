import './menu.scss'
export default function(array, classNam) {
    const menu = document.createElement('ul');
    menu.className = classNam;
    let listItems = '';
    debugger
    array.forEach(function(item) {
        listItems +='<li>' + item + '</li>';
    });
    menu.innerHTML = listItems;
    return menu;
}