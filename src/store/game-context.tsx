import React, { useState, useReducer } from 'react';
import gameReducer, {
  INITIAL_STATE,
  GameActions,
  GameState,
} from './game-reducer';

type GameContextObj = {
  state: GameState;
  incrementScore: () => void;
  gameOver: () => void;
  resetGame: () => void;
  updateBadge: (value: number) => void;
};

export const GameContext = React.createContext<GameContextObj>({
  state: INITIAL_STATE,
  incrementScore: () => {},
  gameOver: () => {},
  resetGame: () => {},
  updateBadge: (value: number) => {},
});

const GameContexProvider: React.FC<{ children?: React.ReactNode }> = (
  props
) => {
  const [state, dispatch] = useReducer(gameReducer, INITIAL_STATE);

  const updateLocalScore = () => {
    const localScore = localStorage.getItem('score');
    if (!localScore) {
      localStorage.setItem('score', JSON.stringify(state.score.toString()));
      return;
    }

    if (state.score <= +localScore) return;

    localStorage.setItem('score', JSON.stringify(state.score.toString()));
  };

  const incrementScore = () => {
    dispatch({
      type: GameActions.INCREMENT,
      payload: { ...state, score: state.score + 1 },
    });
  };

  const gameOver = () => {
    updateLocalScore();
    dispatch({
      type: GameActions.GAMEOVER,
      payload: { ...state, isGameOver: true },
    });
  };

  const resetGame = () => {
    dispatch({
      type: GameActions.RESET,
      payload: { ...state, score: 0, isGameOver: false },
    });
  };

  const updateBadge = (value: number) => {
    dispatch({
      type: GameActions.UPDATEBADGE,
      payload: { ...state, badgeValue: value },
    });
  };

  state.isGameOver;

  const contextValue: GameContextObj = {
    state: state,
    incrementScore,
    gameOver,
    resetGame,
    updateBadge,
  };

  return (
    <GameContext.Provider value={contextValue}>
      {props.children}
    </GameContext.Provider>
  );
};

export default GameContexProvider;
