import React, { useState } from "react";
import { Button } from "./Button";

export const HiddenBlock = () => {
  const [isHidden, setIsHidden] = useState(true);

  const handleClick = () => {
    setIsHidden(!isHidden);
    console.log(isHidden)
  };

  return (
    <>
      <Button
        text={isHidden ? "Отобразить" : "Скрыть"}
        buttonStyle={'p-3 max-w-56 bg-sky-500 hover:bg-sky-700 hover:text-white inline-block text-black rounded-lg'}
        onClick={handleClick}
      />
      {!isHidden && <div>
        Блок отображен
      </div>}
    </>
  );
};