import React from "react";

export default function Header() {
  return (
    <div className='heading'>
      <h1 className='title'>2048</h1>
      <div className='scores-container'>
        <div className='score-container'>
          1616
          <div className='score-addition'>+16</div>
        </div>
        <div className='best-container'>1616</div>
      </div>
    </div>
  );
}
