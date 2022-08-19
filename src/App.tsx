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
      <Badge />
      <div className='card'>
        {/* {!gameCtx.state.isGameOver && <Controls />} */}
        <Controls />
        {gameCtx.state.isGameOver && (
          <Button variant='outlined' onClick={beginHandler}>
            Start
          </Button>
        )}
        {gameCtx.state.isGameOver && gameCtx.state.score > -1 && <p>Fail</p>}
      </div>
    </div>
  );
}

export default App;
