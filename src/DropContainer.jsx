import React from "react";
import { useDrop } from "react-dnd";
import DraggableItem from "./DraggableItem";

const ItemType = "LIST_ITEM";

const DropContainer = ({
  id,
  items,
  moveItem,
  moveBetweenContainers,
  onItemClick,
}) => {
  const [, drop] = useDrop({
    accept: ItemType,
    drop: (draggedItem) => {
      if (draggedItem.containerId !== id) {
        moveBetweenContainers(draggedItem.containerId, id, draggedItem.index);
      }
    },
  });

  return (
    <div
      ref={drop}
      className="p-4 rounded-lg shadow-md bg-white border border-gray-300 min-h-[300px]"
    >
      <h2 className="text-lg font-bold mb-4 text-center">{id.toUpperCase()}</h2>
      <ul className="list-none space-y-3">
        {items.map((item, index) => (
          <DraggableItem
            key={item.id}
            item={item}
            index={index}
            moveItem={moveItem}
            containerId={id}
            onItemClick={onItemClick}
          />
        ))}
      </ul>
    </div>
  );
};

export default DropContainer;
