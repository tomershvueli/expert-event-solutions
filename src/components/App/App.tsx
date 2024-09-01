import React from "react";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="flex justify-center">
      <Routes>
        <Route
          path="/"
          element={<div className="w-full max-w-[467px] mx-auto"></div>}
        />
      </Routes>
    </div>
  );
};
export default App;
