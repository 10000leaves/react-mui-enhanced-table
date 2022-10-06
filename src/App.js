import * as React from 'react';
import './App.css';
import FullWidthTabs from './FullWidthTabs';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>
          テスト画面：ヘッダー
        </p>
      </header>
      <main  className="App-main">
        <FullWidthTabs/>
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
