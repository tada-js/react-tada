import {
  createContext,
  useContext,
  useSyncExternalStore,
  useRef,
  createElement,
} from 'react';
import type { ReactNode } from 'react';
import { createTada } from './createTada';

type Store<T> = {
  getState: () => T;
  setState: (action: T | ((prev: T) => T)) => void;
  subscribe: (callback: () => void) => () => void;
};

export const tada = <T>(initialState: T) => {
  const TadaContext = createContext<Store<T>>(createTada(initialState));

  const StoreProvider = ({
    initialState: customInitialState,
    children,
  }: {
    initialState?: T;
    children: ReactNode;
  }) => {
    const ref = useRef<Store<T>>();
    if (!ref.current) {
      ref.current = createTada(
        customInitialState !== undefined ? customInitialState : initialState
      );
    }
    return createElement(
      TadaContext.Provider,
      { value: ref.current },
      children
    );
  };

  function useTada(): [T, Store<T>['setState']];
  function useTada<S>(selector: (state: T) => S): [S, Store<T>['setState']];

  function useTada<S>(selector?: (state: T) => S) {
    const { getState, setState, subscribe } = useContext(TadaContext);
    const selectedState = useSyncExternalStore(
      subscribe,
      () => (selector ? selector(getState()) : getState()),
      () => (selector ? selector(getState()) : getState())
    );
    return [selectedState, setState] as const;
  }

  return { useTada, StoreProvider };
};
