'use client';

import { useCountTada } from '../_store/tada';
import Counter from './components/Counter';
import Description from './components/Description';

const CountProvider = useCountTada.TadaProvider;

const CounterPage = () => {
  return (
    <>
      <Counter id={0} selector="counter-default" />
      <Counter id={1} selector="counter-default" />
      <CountProvider initialState={{ count: 10 }}>
        <Counter id={2} selector="counter-10" />
        <Counter id={3} selector="counter-10" />
        <CountProvider initialState={{ count: 20 }}>
          <Counter id={4} selector="counter-20" />
        </CountProvider>
      </CountProvider>
      <Description />
    </>
  );
};

export default CounterPage;
