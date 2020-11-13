/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Profiler, useRef } from 'react';
import { render } from '@testing-library/react';
import LegacyTable from './LegacyTable';
import NewTable from './NewTable';
import * as faker from 'faker';
import { ThemeProvider } from 'styled-components';
import legacyTheme from './../../components/legacy/legacyTheme';
import { sumBy } from 'lodash';

const amountOfRenders = 200000;

const performance: any[] = [];

const profilerCallback = (
  id: any, // the "id" prop of the Profiler tree that has just committed
  phase: any, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  actualDuration: any, // time spent rendering the committed update
  baseDuration: any, // estimated time to render the entire subtree without memoization
  startTime: any, // when React began rendering this update
  commitTime: any, // when React committed this update
  interactions: any // the Set of interactions belonging to this update
) => {
  performance.push({ id, phase, actualDuration, baseDuration, startTime, commitTime, interactions });
};

const getRows = () =>
  Array(6)
    .fill(6)
    .map((_, index) => ({
      id: `${index}`,
      column1: faker.random.words(),
      column2: faker.random.words(),
      column3: {
        a: faker.random.word(),
        b: faker.random.word(),
        c: faker.random.word(),
        d: faker.random.word()
      },
      column4: faker.random.words(),
      link1: faker.random.words(),
      link2: faker.random.words()
    }));

let legacyIdCounter = 1;

const LegacyTableRender = ({ rows }: any) => {
  const id = useRef(legacyIdCounter++); // to ensure we don't remount a different instance
  return <LegacyTable key={id.current} rows={rows} />;
};

let newIdCounter = 1;

const NewTableRender = ({ rows }: any) => {
  const id = useRef(newIdCounter++); // to ensure we don't remount a different instance
  return <NewTable key={id.current} rows={rows} />;
};

it('Checks performance for the legacy table', () => {
  const { rerender } = render(<LegacyTableRender rows={getRows()} />, {
    wrapper: ({ children }) => (
      <ThemeProvider theme={legacyTheme}>
        <Profiler id="legacy" onRender={profilerCallback}>
          {children}
        </Profiler>
      </ThemeProvider>
    )
  });

  for (let i = 0; i < amountOfRenders; i++) {
    rerender(<LegacyTableRender rows={getRows()} />);
  }

  expect(true).toBeTruthy();
});

it('Checks performance for the new table', () => {
  const { rerender } = render(<NewTableRender rows={getRows()} />, {
    wrapper: ({ children }) => (
      <Profiler id="new" onRender={profilerCallback}>
        {children}
      </Profiler>
    )
  });

  for (let i = 0; i < amountOfRenders; i++) {
    rerender(<NewTableRender rows={getRows()} />);
  }

  expect(true).toBeTruthy();
});

afterAll(() => {
  const legacyResults = performance.filter((x) => x.id === 'legacy');
  const newResults = performance.filter((x) => x.id === 'new');
  console.log(
    `Legacy avg(actual): ${sumBy(legacyResults, 'actualDuration') / legacyResults.length}`,
    `New avg(actual): ${sumBy(newResults, 'actualDuration') / newResults.length}`,
    `Legacy avg(base): ${sumBy(legacyResults, 'baseDuration') / legacyResults.length}`,
    `New avg(base): ${sumBy(newResults, 'baseDuration') / newResults.length}`
  );
});
