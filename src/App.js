import * as React from 'react';
import './App.css';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import TransitionAlerts from './TransitionAlerts';
import AppResult from './AppResult';
import AppResult2 from './AppResult2';

function App() {
  const [loading, setLoading] = React.useState(false);
  const [values, setValues] = React.useState({});

  const setHandleSelectRow = (year, secCode) => {
    handleLoading(true);

    console.log('3秒待つ');
    const ms = 3000;
    setTimeout(() => {
      console.log(year + '年\n' + secCode);
      setValues({ ...values, year: year.toString(), secCode: secCode.toString() });

      console.log('3秒経った');
      handleLoading(false);
    }, ms);
  };

  const handleReset = () => {
    setValues({}); // APIの結果をリセット
  }

  const handleLoading = (newLoading) => {
    setLoading(newLoading);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          テスト画面：ヘッダー
        </p>
      </header>
      <main  className="App-main">
        <TransitionAlerts severity={"info"} text={"銘柄別詳細一覧は業種別単語分析一覧から業種を選択して検索してください"} />
        <br />
        {loading ?(
          <Box
            sx={{
              width: '100%',
              height: 700,
              borderRadius: 1,
              backgroundColor: '#e0e0e0',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CircularProgress sx={{ padding: 1, margin: 2 }}/>
          </Box>
        ):(
          Object.keys(values).length === 0 ? (
            <AppResult setHandleSelectRow={setHandleSelectRow}/>
          ):(
            <AppResult2 handleReset={handleReset} year={values.year} secCode={values.secCode}/>
          )
        )}
      </main>
      <footer className="App-footer">
        <p>
          テスト画面：フッター
        </p>
      </footer>
    </div>
  );
}

export default App;
