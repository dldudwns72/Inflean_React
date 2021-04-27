import React, { useState } from "react";
import times from "lodash/times";
import { MAX_POS } from "../constant";
import { getInitialTileList } from "../util/tile";
import useMoveTile from "../hook/useMoveTile";
import Tile from "./Tile";

export default function Game({ setScore }) {
  const [tileList, setTileList] = useState(getInitialTileList);

  useMoveTile({ tileList, setTileList, setScore });

  return (
    <div className='game-container'>
      <div className='grid-container'>
        {times(MAX_POS,index => (
          <div key = {index} className='grid-row'>
            {times(MAX_POS,index2 => (
              <div key = {index2} className='grid-cell'></div>
            ))}
          </div>
        ))}
      </div>

      <div className='tile-container'>
        {tileList.map(item =>(
          <Tile key = {item.id} {...item}/>
        ))}
        {/* {tileList.map((item) => (
          <div key= {item.id} className={`tile tile-${item.value} tile-position-${item.x}-${item.y}`}>
            <div className='tile-inner'>{item.value}</div>
          </div>
        ))} */}
      </div>
    </div>
  );
}

// import React, { useState } from 'react';
// import times from 'lodash/times';
// import useMoveTile from '../hook/useMoveTile';
// import { getInitialTileList } from '../util/tile';
// import { MAX_POS } from '../constant';
// import Tile from './Tile';

// export default function Game({ setScore }) {
//   const [tileList, setTileList] = useState(getInitialTileList);
//   useMoveTile({ tileList, setTileList, setScore });
//   return (
//     <div className="game-container">
//       <div className="grid-container">
//         {times(MAX_POS, y => (
//           <div key={y} className="grid-row">
//             {times(MAX_POS, x => (
//               <div key={y * MAX_POS + x} className="grid-cell"></div>
//             ))}
//           </div>
//         ))}
//       </div>

//       <div className="tile-container">
//         {tileList.map(item => (
//           <Tile key={item.id} {...item} />
//         ))}
//       </div>
//     </div>
//   );
// }

