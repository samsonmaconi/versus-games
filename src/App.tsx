import React from "react";
import "./App.css";
import { Menu, QnACard, SliderContainer } from "./components";

function App() {
  return (
    <div>
      <div className="container mx-auto flex h-screen flex-col sm:flex-row">
        <Menu className="order-2 sm:order-1" />
        <div className="order-1 flex w-full flex-1 sm:order-2">
          <SliderContainer className="flex-1" />
          <div className="hidden flex-1 bg-white md:flex">
            {/* <QnACard /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
