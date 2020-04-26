export class Component {
  /**
   * Конструетор компонента
   * @param {string} $el CSS селектор элемента в HTML 
   */
  constructor($el) {
    this.$el = document.querySelector($el);
  }

  /**
   * Метод "показать элемент"
   */
  show() {
    // TODO реализовать функцию show
  };

  /**
   * Метод "скрыть элемент"
   */
  hide() {
    // TODO реализовать функцию hide
  };
}