import { useEffect} from "react";
import "./App.css";
import Granim from "granim";
import HeaderPart from "./Components/HeaderPart";
import Body from "./Components/Body";

function App() {
  useEffect(() => {
    new Granim({
      element: "#canvas-basic",
      // direction: 'radial',
      direction: 'diagonal',
      isPausedWhenNotInView: true,
      opacity: [1, 1],
      states: {
        "default-state": {
          gradients: [
            [
              { color: "#000000", pos: 0.2 },
              { color: "#3d7ba8", pos: 0.8 },
              { color: "#1f1f1f", pos: 1 },
            ],
            // [
            //   { color: "#1f1f1f", pos: 0.2 },
            //   { color: "#1f1f1f", pos: 0.8 },
            //   { color: "#1f1f1f", pos: 1 },
            // ],
            [
              { color: "#1f1f1f", pos: 0 },
              { color: "#5e2975", pos: 0.2 },
              { color: "#1f1f1f", pos: 0.75 },
            ],
            [
              { color: "#1f1f1f", pos: 0.2 },
              { color: "#1f1f1f", pos: 0.8 },
              { color: "#000000", pos: 1 },
            ],
          ],
          transitionSpeed: 5000,
        },
      },
    });
  }, []);


  return (
    <div className="main-comp bg-slate-900 w-full  relative">
      <canvas id="canvas-basic" className=""  />
      <div className="table-comp">
      <HeaderPart/>
      <Body/>
      </div>
    </div>
  );
}

export default App;
