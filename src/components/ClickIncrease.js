import { useState } from 'react';
import withCounter from './withCounter.js';

function ClickIncrease(props) {
  const [fontSize, setFontSize] = useState(10); // set initial value of hook to 10
  return (
    <div>
      <button onClick={() => setFontSize((size) => size + 1)}>
        Increase with click
      </button>
      <p style={{ fontSize }}>Size of font in onClick function: {fontSize}</p>
      <p>Value of 'name' in ClickIncrease: {props.name}</p>
    </div>
  );
}

export default withCounter(ClickIncrease);
