import './style.css';
import GreetingPageComponent from './app/components/greeting-page/greeting-page.component';
import WorkingPageComponent from './app/components/working-page/working-page.component';

const greetingPage = new GreetingPageComponent();
console.log(greetingPage.show());
const workingPage = new WorkingPageComponent();
workingPage.hide();