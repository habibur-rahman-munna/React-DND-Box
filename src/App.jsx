import React, { useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DropContainer from "./DropContainer";
import "./index.css";

const App = () => {
  const defaultData = {
    box1: [
      { id: "1", text: "Item 1" },
      { id: "2", text: "Item 2" },
      { id: "3", text: "Item 3" },
    ],
    box2: [
      { id: "4", text: "Item 4" },
      { id: "5", text: "Item 5" },
      { id: "6", text: "Item 6" },
    ],
    box3: [
      { id: "7", text: "Item 7" },
      { id: "8", text: "Item 8" },
      { id: "9", text: "Item 9" },
    ],
  };

  const [containers, setContainers] = useState(
    JSON.parse(localStorage.getItem("dragDropData")) || defaultData
  );

  useEffect(() => {
    localStorage.setItem("dragDropData", JSON.stringify(containers));
  }, [containers]);

  const moveItem = (containerId, fromIndex, toIndex) => {
    const updated = [...containers[containerId]];
    const [moved] = updated.splice(fromIndex, 1);
    updated.splice(toIndex, 0, moved);

    setContainers((prev) => ({ ...prev, [containerId]: updated }));
  };

  const moveBetweenContainers = (from, to, fromIndex) => {
    const fromItems = [...containers[from]];
    const toItems = [...containers[to]];
    const [moved] = fromItems.splice(fromIndex, 1);
    toItems.push(moved);

    setContainers((prev) => ({
      ...prev,
      [from]: fromItems,
      [to]: toItems,
    }));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen w-full bg-gray-100 text-gray-800 flex items-center justify-center py-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.keys(containers).map((box) => (
              <DropContainer
                key={box}
                id={box}
                items={containers[box]}
                moveItem={moveItem}
                moveBetweenContainers={moveBetweenContainers}
              />
            ))}
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default App;
