import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from '../../store/game-context';
import { Colors } from './Constants/colors';
import { ColorBadge, WrapperBadge } from './styles';

const randomValue = (): number => {
  return Math.floor(Math.random() * 2);
};

const Badge: React.FC = (props) => {
  const gameCtx = useContext(GameContext);

  const [toggleAnimation, setToggleAnimation] = useState(false);

  const initialValue = randomValue();
  const initialState = {
    duration: 2,
    color: Colors[initialValue],
    value: initialValue,
  };
  const [state, setState] = useState(initialState);

  const calcDuration = (): number => {
    if (gameCtx.state.score === 0) return initialState.duration;
    if (gameCtx.state.score === 10) return 1.5;
    if (gameCtx.state.score === 20) return 1;
    if (gameCtx.state.score === 30) return 0.7;

    return state.duration;
  };

  useEffect(() => {
    if (gameCtx.state.isGameOver) return;

    setToggleAnimation(!toggleAnimation);
    const newValue = randomValue();
    // props.option(newValue);
    gameCtx.updateBadge(newValue);
    setState({
      ...state,
      color: Colors[newValue],
      value: newValue,
      duration: calcDuration(),
    });

    const timer = setTimeout(() => {
      gameCtx.gameOver();
      setState(initialState);
    }, state.duration * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [gameCtx.state.score, gameCtx.state.isGameOver]);

  return (
    <div>
      <WrapperBadge>
        <ColorBadge
          toggle={toggleAnimation}
          color={state.color}
          duration={state.duration}
        />
      </WrapperBadge>
    </div>
  );
};

export default Badge;
