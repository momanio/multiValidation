import "./App.css";
import { Card } from "@nextui-org/react";
import MultiSteps from "./components/MultiSteps";

const App = () => {
  return (
    <>
      <div className="container w-full rounded-xl ">
        <Card className="card">
          <MultiSteps />
        </Card>
      </div>
    </>
  );
};

export default App;
