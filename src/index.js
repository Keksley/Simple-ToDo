import { TestComponent } from "./app/components/test/test.component";
import './style.css';
/**
 * Я для простоты показываю хардкодом, но
 * в будущем большая часть логики должна лежать в коде компонентов
 */
const test = new TestComponent;
test.$el.addEventListener('mouseenter', () => {
  test.$el.classList.add('neon');
})
test.$el.addEventListener('mouseleave', () => {
  test.$el.classList.remove('neon');
})