import { Box, Button, Chip, Divider, Grid, Typography } from '@mui/material';
import { useContext } from 'react';
import './App.css';
import Badge from './components/Badge';
import Controls from './components/Controls';
import { GameContext } from './store/game-context';

function App() {
  const gameCtx = useContext(GameContext);

  const beginHandler = () => {
    gameCtx.resetGame();
  };

  const highScore = JSON.parse(localStorage.getItem('score') || '0');

  return (
    <div className='App'>
      <header>
        <img
          src='../src/assets/tapright.svg'
          alt='Tap Right'
          style={{ maxWidth: '100%' }}
        />
      </header>
      <main>
        <Chip label={`High Score: ${highScore}`} variant='outlined' />

        <Typography
          variant='h4'
          component='p'
          fontWeight='500'
          textTransform='uppercase'
        >
          {`Score: ${gameCtx.state.score < 0 ? 0 : gameCtx.state.score}`}
        </Typography>
        <Badge />

        <div className='card'>
          {!gameCtx.state.isGameOver && <Controls />}
          {gameCtx.state.isGameOver && (
            <>
              <Button variant='outlined' onClick={beginHandler}>
                Start
              </Button>
              <Typography paddingTop='10px' variant='caption' display='block'>
                Use arrow keys or tap colored buttons to select the right color
                before circle got filled.
              </Typography>
            </>
          )}

          {gameCtx.state.isGameOver && gameCtx.state.score > -1 && <p>Fail</p>}
        </div>
      </main>
    </div>
  );
}

export default App;
