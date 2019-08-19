import React from "react";
import ReactDOM from "react-dom";
import { Counter } from "@ui/Counter";

const render = () => {
  ReactDOM.render(
    <Counter initialState={777} />,
    document.getElementById("root")
  );
};

if (module.hot) {
  module.hot.accept("@ui/Counter", render());
}

render();
