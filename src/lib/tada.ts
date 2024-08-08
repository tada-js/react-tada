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

/**
 * Creates a Tada context and provider for managing state.
 * @template T
 * @param {T} initialState - The initial state for the store.
 * @returns {Object} An object containing the TadaProvider component and useTada hook.
 * @example
import { tada } from 'react-tada';

type State {
  count: number;
}

export const useCountTada = tada<State>({ count: 0 });
 */
export const tada = <T>(initialState: T) => {
  const TadaContext = createContext<Store<T>>(createTada(initialState));

  /**
   * TadaProvider component that provides the Tada context to its children.
   * @param {Object} props - The props for the TadaProvider component.
   * @param {T} [props.initialState] - An optional custom initial state.
   * @param {ReactNode} props.children - The child components that will have access to the Tada context.
   * @returns {JSX.Element} The TadaProvider component.
   */
  const TadaProvider = ({
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

  /**
   * A hook to use the Tada state and setState function.
   * @returns {[T, (action: T | ((prev: T) => T)) => void]} An array containing the current state and the setState function.
   */
  function useTada(): [T, Store<T>['setState']];
  /**
   * A hook to use a selected part of the Tada state and setState function.
   * @template S
   * @param {(state: T) => S} selector - A function to select a part of the state.
   * @returns {[S, (action: T | ((prev: T) => T)) => void]} An array containing the selected state and the setState function.
   */
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

  return { useTada, TadaProvider };
};
