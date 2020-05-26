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
    this.el.classList.remove('hidden');
  };

  /**
   * Метод "скрыть элемент"
   */
  hide() {
    this.el.classList.add('hidden');
  };
}