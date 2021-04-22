import React from "react";
import times from "lodash/times";
import { MAX_POS } from "../constant";

export default function Game() {
  const elements = [];
  return (
    <div className='game-container'>
      <div className='grid-container'>
        {times(MAX_POS, () => (
          <div className='grid-row'>
            {times(MAX_POS, () => (
              <div className='grid-cell'></div>
            ))}
          </div>
        ))}
      </div>

      <div className='tile-container'>
        <div className ="tile tile-4 tile-position-1-1">
          <div className = "tile-inner">4</div>
        </div>
      </div>

      <div className='tile-container'>
        <div className ="tile tile-4 tile-position-1-4-new">
          <div className = "tile-inner">4</div>
        </div>
      </div>

      <div className='tile-container'>
        <div className ="tile tile-4 tile-position-2-1">
          <div className = "tile-inner">2</div>
        </div>
      </div>
    </div>
  );
}
