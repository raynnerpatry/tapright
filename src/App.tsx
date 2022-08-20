import { Button } from '@mui/material';
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

  return (
    <div className='App'>
      <h1>TapRight</h1>
      <h2>Score: {gameCtx.state.score < 0 ? 0 : gameCtx.state.score}</h2>
      <h3>High Score: {JSON.parse(localStorage.getItem('score') || '0')}</h3>
      <Badge />
      <div className='card'>
        {!gameCtx.state.isGameOver && <Controls />}
        {gameCtx.state.isGameOver && (
          <Button variant='outlined' onClick={beginHandler}>
            Start
          </Button>
        )}
        <p>Use arrow keys to select the right color.</p>
        {gameCtx.state.isGameOver && gameCtx.state.score > -1 && <p>Fail</p>}
      </div>
    </div>
  );
}

export default App;
