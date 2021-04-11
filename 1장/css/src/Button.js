import React from "react";
import Style from "./Button.module.css";
import cn from "classnames";

export default function Button({ size }) {
  console.log("style : ", Style);
  const isBig = size === "big";
  if (size === "big") {
    return <buton className={`${Style.button} ${Style.big}`}>큰 버튼</buton>;
  } else {
    // 조건부 렌더링
    return <button className={cn(Style.Button, { [Style.big]: isBig, [Style.small]: !isBig })}>작은 버튼</button>;
  }
}
