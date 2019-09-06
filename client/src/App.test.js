import React from 'react';
import {render} from '@testing-library/react';
import 'jest-dom/extend-expect';
import App from './App';
import PlayerList from './Components/PlayerList';

test('App renders without crashing', () => {
  render(<App />);
});

test('contains player name', async () => {
  const {getByTestText} = await render(<PlayerList />);
  getByTestText(/player/i);
});

test('contains player searches', async () => {
  const {getByTestText} = await render(<PlayerList />);
  getByTestText(/searches/i);
});