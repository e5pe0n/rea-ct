import { FC } from 'react';
import { useHistory } from 'react-router-dom';

const HistoryButtons: FC = () => {
  const history = useHistory();

  return (
    <>
      <button type="button" onClick={() => history.goBack()}>
        Return
      </button>
      <button type="button" onClick={() => history.goForward()}>
        Forward
      </button>
      <button type="button" onClick={() => history.push('/')}>
        Top page
      </button>
    </>
  );
};

export default HistoryButtons;
