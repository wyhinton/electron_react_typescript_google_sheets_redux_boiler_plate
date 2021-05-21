import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import { useStoreState, useStoreActions } from './hooks';
import BeautifulDnd from './componets/BeautifulDnd';

const Hello = () => {
  return <div></div>;
};

export default function App() {
  const [displayText, setDisplayText] = useState({ val: 'empty' } as any);
  const fetch_sheet_data = useStoreActions(
    (actions) => actions.appData.fetch_google_sheet
  );

  const sheet_data = useStoreState((state) => state.appData.google_sheet_data);
  return (
    <div>
      <button
        onMouseUp={() => {
          fetch_sheet_data();
          setDisplayText(sheet_data);
        }}
      >
        FETCH DATA
      </button>
      <button onMouseUp={() => setDisplayText({ val: 'empty' })}>CLEAR</button>
      <br></br>
      {JSON.stringify(displayText)}
      <BeautifulDnd />
    </div>
  );
}
