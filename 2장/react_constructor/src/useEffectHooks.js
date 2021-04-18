import React, { useEffect, useState } from "react";
import useUser from './useUser'
const useEffectHooks = ({userId}) => {
  const user = useUser(userId)
  
  return (
    <div>
      {!user && <p>사용자 정보를 가져오는중 ...</p>}
      {user && (
        <>
          <p>{`name is ${user.name}`}</p>
          <p>{`age is ${user.age}`}</p>
        </>
      )}
    </div>
  );
};



export default useEffectHooks;
