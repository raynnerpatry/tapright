import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from '../../store/game-context';
import { Colors } from './Constants/colors';
import { ColorBadge } from './styles';

const randomValue = () => {
  return Math.floor(Math.random() * 2);
};

const Badge: React.FC<{
  // scoreCounter: number;
  // option: React.Dispatch<React.SetStateAction<number>>;
}> = (props) => {
  const gameCtx = useContext(GameContext);

  const [toggleAnimation, setToggleAnimation] = useState(false);

  const initialValue = randomValue();
  const initialState = {
    duration: 1,
    color: Colors[initialValue],
    value: initialValue,
  };
  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (gameCtx.state.isGameOver) return;

    setToggleAnimation(!toggleAnimation);
    const newValue = randomValue();
    // props.option(newValue);
    gameCtx.updateBadge(newValue);
    setState({ ...state, color: Colors[newValue], value: newValue });

    const timer = setTimeout(() => {
      gameCtx.gameOver();
    }, 2 * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [gameCtx.state.score, gameCtx.state.isGameOver]);

  return (
    <div>
      <ColorBadge toggle={toggleAnimation} color={state.color} />
    </div>
  );
};

export default Badge;
