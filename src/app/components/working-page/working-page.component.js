import './working-page.component.css'
import { Component } from '../../../core/component'
/**
 * Рабочая страница
 */
export default class WorkingPageComponent  extends Component{
  constructor() {
    super('working-page');
  }

  getTodayDate() {

  }
}

function dateHandler(date) {
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const day = date.toDateString().slice(8, 10);
}