const UpdatedComponent = (OriginalComponent) => {
  function NewComponent(props) {
    // const [counter, setCounter] = useState(10);
    return <OriginalComponent name='LogRocket' />;
  }
  return NewComponent;
};

export default UpdatedComponent;
