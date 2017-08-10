export default class PressureTesting {
  constructor() {
    this.pressureTesting1 = document.querySelectorAll('.pressureTesting_1');
    this.pressureTesting2 = document.querySelectorAll('.pressureTesting_2');
  }

  isClosed() {
    return document.querySelector('.christmasTree_3_closed');
  }

  // оприсовка
  // 1 до первой задвижке
  // 2 до второй задвижки
  // 3 полная промывкаы
  testing(number){
    if (!this.isClosed()) {return}
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
      this.pressureTesting1.forEach(item => item.classList.add('pressureTesting_empty'));
      this.pressureTesting2.forEach(item => item.classList.remove('pressureTesting_empty'));
    }
  }
}