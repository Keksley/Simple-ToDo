import './working-page.component.css'
import { Component } from '../../../core/component'
import daysDictionary from '../../../assets/days'
/**
 * Рабочая страница
 */
export default class WorkingPageComponent  extends Component{
  constructor() {
    super('working-page');
  }

  getTodayDate() {
    return dateHandler(new Date);
  }
}

function dateHandler(date) {
  const monthNumber = date.getMonth() + 1;
  const year = date.getFullYear();
  const day = date.toDateString().slice(8, 10);
  const month = `${monthNumber}`.length === 1 ? `0${monthNumber}` : `${monthNumber}`;
  console.log(day);
  
  const weekday = daysDictionary[date.toDateString().slice(0, 3)];
  return `${weekday} ${day}.${month}.${year}`;
}