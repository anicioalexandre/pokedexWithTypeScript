import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

// function renderWithRouter(
//   ui,
//   {
//     route = '/',
//     history = createMemoryHistory({ initialEntries: [route] }),
//   } = {}
// ) {
//   (<Router history={history}>{ui}</Router>), history;
// }
const renderWithRouter = (component, initialEntries = ['/']) => (
  <Router history={createMemoryHistory({ initialEntries })}>{component}</Router>
);

export default renderWithRouter;
