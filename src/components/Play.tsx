import Button from '@mui/material/Button';

type PlayProps = {
  handleStartTimer: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
};

function Play({ handleStartTimer, text }: PlayProps) {
  return (
    <Button onClick={handleStartTimer} variant="contained">
      {text}
    </Button>
  );
}

export default Play;
