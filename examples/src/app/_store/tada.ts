import { tada } from 'react-tada';

interface CountState {
  count: number;
}

export const useCountTada = tada<CountState>({ count: 0 });
