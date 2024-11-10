import React from "react";
const Register = React.lazy(() => import("./pages/Register"));

import "./App.css";
function App() {
  return (
    <>
      <div className=" bg-white  flex items-center justify-center">
        <Register />
      </div>
    </>
  );
}

export default App;
