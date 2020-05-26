import './style.css';
import GreetingPageComponent from './app/components/greeting-page/greeting-page.component';
import WorkingPageComponent from './app/components/working-page/working-page.component';

const greetingPage = new GreetingPageComponent();
const workingPage = new WorkingPageComponent();

const startButton = greetingPage.el.querySelector('.greeting-page__btn');
startButton.addEventListener('click', () => {
    greetingPage.hide();
    workingPage.show();
})