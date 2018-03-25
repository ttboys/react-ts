import {Action, Reducer} from "redux"

export interface Handlers<S, A> {
  [key: string]: ActionReducer<S, A>

  default?: ActionReducer<S, A>
}

export type ActionReducer<S, A> = (state: S) => (action: A) => S

export type DefaultState<S> = () => S

const handlersOf = <S, A>(handlers: Handlers<S, A>) => ({
  default: (state: S) => () => state,
  ...handlers
})

const createReducer = <S, A extends Action>(defaultState: S) => (handlers: Handlers<S, A>) =>
  (state: S = defaultState, action: A) =>
    (handlers[action.type] || handlers.default)(state)(action)

export const reducerOf = <S, A extends Action>(handlers: Handlers<S, A>) =>
  (defaultState: DefaultState<S>): Reducer<S> =>
    createReducer(defaultState())(handlersOf(handlers))

