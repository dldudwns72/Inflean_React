import { useEffect } from "react";
import { addKeyObserver,removeKeyCallback } from "../util/keyboard";

export default function useMoveTile(tileList,setTileList) {
  function moveAndAdd({x, y}) {}

  function moveUP() {
    moveAndAdd({ x: 0, y: 1 });
  }

  function moveDown() {}

  function moveLeft() {}

  function moveRight() {}

  useEffect(() => {
    addKeyObserver("up", moveUP);
    addKeyObserver("down", moveDown);
    addKeyObserver("left", moveLeft);
    addKeyObserver("right", moveRight);

    return () => {
        removeKeyCallback("up", moveUP);
        removeKeyCallback("down", moveDown);
        removeKeyCallback("left", moveLeft);
        removeKeyCallback("right", moveRight);
    };
  });
}
