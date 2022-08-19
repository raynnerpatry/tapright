import { Button } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { GameContext } from '../../store/game-context';
import { Colors } from '../Badge/Constants/colors';
import { ArrowButton, GridContainer } from './styles';

const Controls: React.FC = () => {
  const gameCtx = useContext(GameContext);

  const chosenOptionHandler = (chosenOption: number) => {
    scoreValidation(chosenOption);
  };

  const scoreValidation = (chosenOption: number) => {
    if (gameCtx.state.badgeValue === chosenOption) {
      gameCtx.incrementScore();
    } else {
      gameCtx.gameOver();
    }
  };

  useEffect(() => {
    const keyDownHandler = (event: {
      key: string;
      preventDefault: () => void;
    }) => {
      if (event.key === 'ArrowLeft') {
        scoreValidation(0);
      }
      if (event.key === 'ArrowRight') {
        scoreValidation(1);
      }
    };

    document.addEventListener('keydown', keyDownHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [gameCtx.state]);

  return (
    <>
      {/* <ColorButton
        onClick={chosenOptionHandler.bind(null, 0)}
        color={colors[0]}
      />
      <ColorButton
        onClick={chosenOptionHandler.bind(null, 0)}
        color={colors[1]}
      /> */}

      <GridContainer>
        <div className='grid-item item-up'>
          <ArrowButton disabled>&#8593;</ArrowButton>
        </div>
        <div className='grid-item item-left'>
          <ArrowButton
            onClick={chosenOptionHandler.bind(null, 0)}
            color={Colors[0]}
          >
            &#8592;
          </ArrowButton>
        </div>
        <div className='grid-item item-down'>
          <ArrowButton disabled>&#8595;</ArrowButton>
        </div>
        <div className='grid-item item-right'>
          <ArrowButton
            onClick={chosenOptionHandler.bind(null, 1)}
            color={Colors[1]}
          >
            &#8594;
          </ArrowButton>
        </div>
      </GridContainer>
    </>
  );
};

export default Controls;
