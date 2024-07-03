// import Button from '@mui/material/Button';

// type NextProps = {
//   handleSetState: React.Dispatch<React.SetStateAction<void>>;
// };

// function Next({ handleSetState }: NextProps) {
//   const handleClick = () => {
//     handleSetState();
//   };
//   return (
//     <>
//       <Button variant="contained" onClick={handleClick}>
//         Next
//       </Button>
//     </>
//   );
// }

// export default Next;


import React from 'react';
import Button from '@mui/material/Button';

type NextProps = {
  handleSetState: () => void;
  children: React.ReactNode;
};

function Next({ handleSetState, children }: NextProps) {
  const handleClick = () => {
    handleSetState();
  };
  return (
    <>
      <Button variant="contained" onClick={handleClick}>
        {children}
      </Button>
    </>
  );
}

export default Next;