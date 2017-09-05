export default class PressureTesting {
  constructor() {
    this.pressureTesting1 = [].slice.call(document.querySelectorAll('.pressureTesting_1'));
    this.pressureTesting2 = [].slice.call(document.querySelectorAll('.pressureTesting_2'));
  }

  isClosed() {
    return document.querySelector('.christmasTree_3_closed');
  }

  // прессовка
  // 1 до первой задвижке
  // 2 до второй задвижки
  // 3 полная промывка
  //  любой другой сброс до нуля
  testing(number){
    switch (number) {
      case 3:
        this.pressureTesting1.forEach(item => item.className = 'pressureTesting_1' );
        this.pressureTesting2.forEach(item => item.className = 'pressureTesting_2' );
        break;
      case 2:
        this.pressureTesting1.forEach(item =>item.className ='pressureTesting_1' );
        this.pressureTesting2.forEach(item => item.className ='pressureTesting_2 pressureTesting_2_2' );
        break;
      case 1:
        this.pressureTesting1.forEach(item =>item.className ='pressureTesting_1' );
        this.pressureTesting2.forEach(item => item.className ='pressureTesting_2 pressureTesting_2_1' );
        break;
      default:
        this.pressureTesting1.forEach(item => item.className = 'pressureTesting_empty pressureTesting_1' );
        this.pressureTesting2.forEach(item => item.className = 'pressureTesting_empty pressureTesting_2' );
    }
  }
}
