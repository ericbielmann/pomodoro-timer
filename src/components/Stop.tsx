import Button from '@mui/material/Button';

type StopProps = {
  handleStopTimer: React.MouseEventHandler<HTMLButtonElement>;
};

function Stop({ handleStopTimer }: StopProps) {
  return (
    <Button
      variant="contained"
      // onClick={handleStopTimer}
      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
        handleStopTimer(e)
      }
    >
      Stop
    </Button>
  );
}

export default Stop;
