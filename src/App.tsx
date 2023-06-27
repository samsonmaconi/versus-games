import React from "react";
import "./App.css";
import { Menu, QnACard, SliderContainer } from "./components";
import { useMockApi } from "./api/useMockApi";

function App() {
  useMockApi();

  return (
    <div>
      <div className="mx-auto flex h-screen flex-col sm:flex-row">
        <Menu className="order-2 flex-shrink-0 sm:order-1" />
        <div className="relative order-1 flex w-full flex-1 sm:order-2">
          <SliderContainer className="flex-1" />
          <div className="absolute bottom-0 w-full flex-1 bg-transparent text-white md:relative md:bg-white md:text-black">
            <QnACard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(App);
