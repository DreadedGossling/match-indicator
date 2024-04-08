import { useState } from 'react';
import './App.css';
import ScoreIndicator from 'react-score-indicator';
import Paper from '@mui/material/Paper';

function App() {
  const [score, setScore] = useState(1)
  const [text, setText] = useState("Not A Good Match")

  const handleChange = (e) => {
    const number = e.target.value
    if (number < 1) {
      setScore(1)
    }
    else if (number > 36) {
      setScore(36)
    }
    else {
      setScore(number)
    }

    if (number <= 9) {
      setText("Not A Good Match")
    }
    else if (number > 9 && number <= 18) {
      setText("May Be A Good Match")
    }
    else if (number > 18 && number <= 27) {
      setText("Good Match")
    }
    else if (number > 27) {
      setText("Perfect Match")
    }
  }

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

          <div className='score'>
            <label htmlFor="score">Try Changing The Number Here : </label>
            <input type="number"
              value={score}
              onChange={handleChange}
              min={1}
              max={36}
              className='input'
            />
          </div>

          <hr className='line2' />
          <span className='details'>Details</span>

          <p className='detailText'>{text}</p>

        </div>

      </Paper>

      <div className='indicator' style={{ transform: `rotate(${180 + score * 5}deg)` }}>
        <div className='circle'></div>
        <div className='line'></div>
      </div>

    </div >
  );
}

export default App;
