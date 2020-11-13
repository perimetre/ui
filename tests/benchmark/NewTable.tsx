import React from 'react';
import Display from '../../src/components/ui/Display';
import Text from '../../src/components/ui/Text';
import Spacing from '../../src/components/ui/Spacing';

type NewTableProps = {
  rows: {
    id: string;
    column1: string;
    column2: string;
    column3: { [key: string]: string };
    column4: string;
    link1: string;
    link2: string;
  }[];
};

const NewTable: React.FC<NewTableProps> = ({ rows }) => {
  return (
    <table>
      {rows &&
        rows.map((row, index) => {
          return (
            <React.Fragment key={row.id}>
              {index === 0 && (
                <thead>
                  <tr>
                    <Text.TH>
                      <Display display="flex" alignItems="center" cursor="pointer">
                        <Text.Span fontSize="text-base" color="title" fontWeight="bold" userSelect="none">
                          Column 1
                        </Text.Span>
                      </Display>
                    </Text.TH>
                    <Text.TH>
                      <Display display="flex" alignItems="center" cursor="pointer">
                        <Text.Span fontSize="text-base" color="title" fontWeight="bold" userSelect="none">
                          Column 2
                        </Text.Span>
                        <span>icon</span>
                      </Display>
                    </Text.TH>

                    <Text.TH
                      style={{ width: '420px' }}
                      fontSize="text-base"
                      color="title"
                      fontWeight="bold"
                      userSelect="none"
                    >
                      Column 3
                    </Text.TH>

                    <th style={{ width: '140px' }}>
                      <Display display="flex" alignItems="center" cursor="pointer">
                        <Text.Span fontSize="text-base" color="title" fontWeight="bold" userSelect="none">
                          Column 4
                        </Text.Span>
                        <span>icon</span>
                      </Display>
                    </th>
                    <th style={{ width: '90px' }} />
                  </tr>
                </thead>
              )}
              <tbody>
                <tr>
                  <Text.TD fontSize="text-base" color="paragraph" fontWeight={600}>
                    {row.column1}
                  </Text.TD>
                  <Text.TD fontSize="text-base" color="paragraph" fontWeight={600}>
                    {row.column2}
                  </Text.TD>
                  <td>
                    <Spacing marginVertical="px8">
                      {Object.entries(row.column3).map((x, index) => (
                        <Text.Div key={`${x[1] || index}`} fontSize="text-base" color="paragraph">
                          {x[1] as string}
                        </Text.Div>
                      ))}
                    </Spacing>
                    <Text.Span fontSize="text-base" color="paragraph">
                      {Object.entries(row.column3)
                        .map((x) => x[1])
                        .join(' | ')}
                    </Text.Span>
                  </td>
                  <Text.TD fontSize="text-base" color="paragraph">
                    {row.column4}
                  </Text.TD>
                  <td>
                    <Display display="flex" alignItems="center" justifyContent="center">
                      <a>{row.link1}</a>
                      <a>{row.link2}</a>
                    </Display>
                  </td>
                </tr>
              </tbody>
            </React.Fragment>
          );
        })}
    </table>
  );
};

export default NewTable;
