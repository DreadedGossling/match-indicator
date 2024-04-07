import './App.css';
import ScoreIndicator from 'react-score-indicator';
import Paper from '@mui/material/Paper';

let lineStyle = {
  font: 18
  // transform: rotate(180deg)
}
function App() {
  const score = 27.5;

  return (
    <div className='app'>

      <Paper elevation={3} width={40} className='paper'>

        <div className='container'>
          <span className='score-title'>Match Making</span>
          <hr className='line1' />
          <span className='compatibility-score'>Compatibility Score</span>

          <ScoreIndicator
            value={score}
            maxValue={36}
            width={300}
            lineGap={0}
            lineWidth={65}
            maxAngle={180}
            stepsColors={[
              '#e583af',
              '#6fdb73',
              '#fcbf46',
              '#77a1d2'
            ]}
            textStyle={{ color: "black" }}
          />

          <hr className='line2' />
          <span className='details'>Details</span>
        </div>

      </Paper>

      <div className='indicator'>
        <div className='circle'></div>
        <div className='line'></div>
      </div>

    </div >
  );
}

export default App;
