import { Button } from "../Button/Button";

const App: React.FC = () => {
  return (
    <Button
      onClick={() => console.log("Button clicked!")}
      buttonText="Submit"
      submitButton={true}
    />
  );
};
export default App;
