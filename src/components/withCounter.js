import { useState } from 'react';

const UpdatedComponent = (OriginalComponent) => {
  function NewComponent(props) {
    const [counter, setCounter] = useState(10); // create a Hook
    return (
      <OriginalComponent
        counter={counter} //export our counter hook
        //now create an 'incrementSize' function
        incrementCounter={() => setCounter((counter) => counter + 1)}
      />
    );
  }
  return NewComponent;
};

export default UpdatedComponent;
