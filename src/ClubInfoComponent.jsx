import React from 'react';
import emblem from './assets/emblem.png'; // エンブレムの画像をインポート

function ClubInfoComponent() {
  return (
    <div className="club-info">
      <h1>arsenal</h1>
      <img src={emblem} alt="クラブのエンブレム" width="100" />
    </div>
  );
}

export default ClubInfoComponent;

