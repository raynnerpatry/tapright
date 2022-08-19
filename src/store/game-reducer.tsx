export interface GameState {
  score: number;
  isGameOver: boolean;
  badgeValue: number;
}

interface GameAction {
  type: GameActions;
  payload: GameState;
}

export enum GameActions {
  INCREMENT = 'INCREMENT',
  RESET = 'RESET',
  GAMEOVER = 'GAMEOVER',
  UPDATEBADGE = 'UPDATEBADGE',
}

export const INITIAL_STATE: GameState = {
  score: -1,
  isGameOver: true,
  badgeValue: 0,
};

const gameReducer = (state: GameState, action: GameAction) => {
  const { type, payload } = action;
  switch (type) {
    case GameActions.INCREMENT:
      return {
        ...state,
        score: payload.score,
      };
    case GameActions.RESET:
      return {
        ...state,
        score: payload.score,
        isGameOver: payload.isGameOver,
      };
    case GameActions.GAMEOVER:
      return {
        ...state,
        isGameOver: true,
      };
    case GameActions.UPDATEBADGE:
      return {
        ...state,
        badgeValue: payload.badgeValue,
      };
    default:
      throw new Error();
  }
};

export default gameReducer;
