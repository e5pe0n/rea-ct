import { FC } from 'react';
import { useHistory, Redirect } from 'react-router-dom';

const Direction: FC<{ shouldGoHome: boolean }> = ({ shouldGoHome }) => {
  const history = useHistory();

  if (shouldGoHome) history.push('/');

  return (
    <>
      <button type="button" onClick={() => history.go(-2)}>
        Go back 2 times
      </button>
      <button type="button" onClick={() => history.goBack()}>
        Go back
      </button>
      <button type="button" onClick={() => history.goForward()}>
        Go forward
      </button>
      <button type="button" onClick={() => history.go(2)}>
        Go forward 2 times
      </button>
    </>
  );
};
