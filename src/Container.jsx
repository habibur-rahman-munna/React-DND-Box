// import React from "react";
// import { useDrop } from "react-dnd";
// import DraggableItem from "./DraggableItem";

// const Container = ({ id, title, items, setItems, itemType }) => {
//   const [{ isOver }, drop] = useDrop(() => ({
//     accept: itemType,
//     drop: (item) => {
//       setItems((prevItems) =>
//         prevItems.map((prevItem) =>
//           prevItem.id === item.id ? { ...prevItem, container: id } : prevItem
//         )
//       );
//     },
//     collect: (monitor) => ({
//       isOver: monitor.isOver(),
//     }),
//   }));

//   return (
//     <div
//       ref={drop}
//       className="p-20 rounded-xl border-1 min-h-[200px]  "
//     >
//       <h2 className="text-lg font-semibold mb-4 text-center ">
//         {title}
//       </h2>

//       <div className="">
//         {items.length > 0 ? (
//           items.map((item) => (
//             <DraggableItem
//               key={item.id}
//               id={item.id}
//               text={item.text}
//               itemType={itemType}
//             />
//           ))
//         ) : (
//           <p className="text-gray-500 text-center italic text-sm">
//             Drop items here
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Container;










