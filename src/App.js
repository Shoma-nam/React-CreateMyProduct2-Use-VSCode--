import React from 'react';
import ClubInfoComponent from './ClubInfoComponent'; // クラブ情報コンポーネントをインポート
import GoalComponent from './GoalComponent';

function App() {
  return (
    <div className="App">
      <Header />
      <ClubInfoComponent /> {/* クラブ情報コンポーネントを追加 */}
      <GoalComponent />{/* クラブ情報コンポーネントを追加 */}
      <p>Hello World</p>
    </div>
  );
}

export default App;
