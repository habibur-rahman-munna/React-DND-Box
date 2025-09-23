import React from "react";
import { useDrag, useDrop } from "react-dnd";

const ItemType = "LIST_ITEM";

const DraggableItem = ({ item, index, moveItem, containerId, onItemClick }) => {
  const [, ref] = useDrag({
    type: ItemType,
    item: { ...item, index, containerId },
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (draggedItem) => {
      if (
        draggedItem.containerId === containerId &&
        draggedItem.index !== index
      ) {
        moveItem(containerId, draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <li
      ref={(node) => ref(drop(node))}
      onClick={() => onItemClick(item)}
      className="w-full text-[16px] pl-[20px] font-medium bg-gray-100 text-black 
                 border border-gray-300 rounded-md px-6 py-3 capitalize 
                 hover:bg-gray-200 transition-all cursor-pointer"
    >
      {item.text}
    </li>
  );
};

export default DraggableItem;
