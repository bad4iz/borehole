/**
 * удаляем выделение текста
 *
 *
 * Комментарии:
 Opera не дает обрабатывать событие dblclick, так что в этом браузере все равно возможно выделить текст двойным кликом.
 Ctrl+A:
 В Opera длительное (2-3 секунды) удержание данной комбинации вызывает выделение текста до ее отпускания. Причем если первым отжать клавишу А а потом Ctrl, то выделение пропадает. Иначе остается.
 Safari не обрабатывает keydown для клавиш при зажатом Ctrl. Потому выделение текста пропадает только после отпускания клавиш. Причем для этого браузера характерно поведение Opera, в плане порядка отпускания клавиш (если первым отжать Ctrl, то выделение останется).

 Выделении текста двойным кликом:
 Safari & FireFox выделяют слово, и сразу снимают выделение. То есть присутствует эффект кратковременного выделения текста.
 Opera не дает запретить поведение по умолчанию. Она выделяет слово и вызывает контекстное меню.

 *
 * @param element
 */
export default function preventSelection(element){
  var preventSelection = false;

  function addHandler(element, event, handler){
    if (element.attachEvent)
      element.attachEvent('on' + event, handler);
    else
    if (element.addEventListener)
      element.addEventListener(event, handler, false);
  }
  function removeSelection(){
    if (window.getSelection) { window.getSelection().removeAllRanges(); }
    else if (document.selection && document.selection.clear)
      document.selection.clear();
  }
  function killCtrlA(event){
    var event = event || window.event;
    var sender = event.target || event.srcElement;

    if (sender.tagName.match(/INPUT|TEXTAREA/i))
      return;

    var key = event.keyCode || event.which;
    if (event.ctrlKey && key == 'A'.charCodeAt(0))  // 'A'.charCodeAt(0) можно заменить на 65
    {
      removeSelection();

      if (event.preventDefault)
        event.preventDefault();
      else
        event.returnValue = false;
    }
  }

  // не даем выделять текст мышкой
  addHandler(element, 'mousemove', function(){
    if(preventSelection)
      removeSelection();
  });
  addHandler(element, 'mousedown', function(event){
    var event = event || window.event;
    var sender = event.target || event.srcElement;
    preventSelection = !sender.tagName.match(/INPUT|TEXTAREA/i);
  });

  // борем dblclick
  // если вешать функцию не на событие dblclick, можно избежать
  // временное выделение текста в некоторых браузерах
  addHandler(element, 'mouseup', function(){
    if (preventSelection)
      removeSelection();
    preventSelection = false;
  });

  // борем ctrl+A
  // скорей всего это и не надо, к тому же есть подозрение
  // что в случае все же такой необходимости функцию нужно
  // вешать один раз и на document, а не на элемент
  addHandler(element, 'keydown', killCtrlA);
  addHandler(element, 'keyup', killCtrlA);
}