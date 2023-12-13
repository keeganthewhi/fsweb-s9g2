import React from "react";
import { differenceInDays, formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";

const Task = ({ taskObj, onComplete }) => {
  const date = new Date(taskObj.deadline);
  const result = differenceInDays(date, new Date());
  const bgClass = result <= 3 ? "bg-[#ffd9d4]" : "bg-anil_mavisi";
  const distanceText = formatDistanceToNow(date, {
    addSuffix: true,
    locale: tr,
  });
  return (
    <div className="task p-6 bg-white rounded-md leading-6 mt-4 shadow-[0_4px_5px_0px_rgba(0,0,0,0.1)]">
      <h3 className="text-lg text-[#c8781a] ">{taskObj.title}</h3>
      <div className="deadline text-xs pt-1">
        son teslim:{" "}
        <span className={`${bgClass} px-2 py-1 runded-sm inline-block`}>
          {distanceText}
        </span>
      </div>
      <p className="pt-2 px-0 pb-3 text-sm text-[#444]">
        {taskObj.description}
      </p>
      <div>
        {taskObj.people.map((p) => (
          <span
            className="inline-block px-3 py-1.5 text-sm border-solid border-2 border-[#ccc] mr-1 mb-1.5 rounded-[30px]  "
            key={p}
          >
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button
          className="block px-3 py-2 m1-auto bg-[#fecc91] shadow-[0_4px_5px_0_rgba(0 0 0 / 5%)] rounded-sm border-none cursor-pointer"
          onClick={() => onComplete(taskObj.id)}
        >
          Tamamlandı
        </button>
      )}
    </div>
  );
};

export default Task;
