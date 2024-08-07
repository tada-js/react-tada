'use client';

import { useCountTada } from '@/app/_store/tada';
import { useEffect, useRef } from 'react';

interface Props {
  id: number;
  selector?: string;
}

const useCount = useCountTada.useTada;

const Counter = ({ id, selector }: Props) => {
  const [count, setCount] = useCount((state) => state.count);
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <>
      <div className="flex gap-2" data-cy={selector}>
        <h2 className="text-xl">Counter Component : {count}</h2>
        <button
          className="w-8 flex justify-center text-center text-xl rounded-lg bg-slate-400"
          onClick={() => {
            setCount((prev) => ({ ...prev, count: prev.count + 1 }));
          }}
          data-cy={`increment-button-${id}`}
        >
          +
        </button>
        <p>Render Count : {renderCount.current}</p>
      </div>
    </>
  );
};

export default Counter;
