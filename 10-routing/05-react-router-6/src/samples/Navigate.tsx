import { useNavigate, Navigate } from 'react-router-dom';

const Direction: FC<{ shouldGoHome: boolean }> = ({ shouldGoHome }) => {
  const navigate = useNavigate();

  if (shouldGoHome) navigate('/');

  return (
    <>
      <button type="button" onClick={() => navigate(-2)}>
        Go back 2 times
      </button>
      <button type="button" onClick={() => navigate(-1)}>
        Go back
      </button>
      <button type="button" onClick={() => navigate(1)}>
        Go forward
      </button>
      <button type="button" onClick={() => navigate(2)}>
        Go forward 2 times
      </button>
    </>
  );
};
