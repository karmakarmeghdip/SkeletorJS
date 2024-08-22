import { createSignal } from "./lib/primitives.js";
import { Div, Button, Heading, render } from "./lib/components.js";

const counter = createSignal(0);

const increment = () => {
  counter.set(counter.get() + 1);
}

const decrement = () => {
  counter.set(counter.get() - 1);
}

const page = Div({ display: 'flex', flexDirection: 'column', alignItems: 'center' }, [
  Heading(counter),
  Button('Increment', increment, { margin: '10px' }),
  Button('Decrement', decrement, { margin: '10px' })
]);

render(page, document.getElementById('app'));