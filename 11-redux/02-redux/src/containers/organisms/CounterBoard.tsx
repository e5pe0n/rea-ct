import { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { add, decrement, increment } from 'actions';
import { CounterState } from 'reducer';
import CounterBoard from 'components/organisms/CounterBoard';

const EnhancedCounterBoard: FC = () => {
  const count = useSelector<CounterState, number>((state) => state.count);
  const dispatch = useDispatch();

  const decrementCallback = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();
      dispatch(decrement());
    },
    [dispatch],
  );

  const incrementCallback = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();
      dispatch(increment());
    },
    [dispatch],
  );

  return (
    <CounterBoard
      count={count}
      add={(amount: number) => dispatch(add(amount))}
      decrement={decrementCallback}
      increment={incrementCallback}
    />
  );
};

export default EnhancedCounterBoard;
