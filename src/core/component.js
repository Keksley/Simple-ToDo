export class Component {
  /**
   * Конструетор компонента
   * @param {string} $el CSS селектор элемента в HTML 
   */
  constructor($el) {
    /**
     * HTML элемент компонента
     */
    this.el = document.querySelector(`.${$el}`);
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