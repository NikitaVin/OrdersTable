import styled from '@emotion/styled';

export const GridContainer = styled.div({});

export const TableHead = styled.div({});

export const TableRow = styled.div<{ backGroundColor?: string }>(
  {
    borderBottom: '1px solid #EBF0F5',
    display: 'grid',
    gridTemplateColumns: '0fr 0.3fr 1fr 1fr 0.7fr 1fr 50%',
    columnGap: 0,
  },
  ({ backGroundColor }) => ({
    background: backGroundColor,
  })
);

export const TableBody = styled.div({});
