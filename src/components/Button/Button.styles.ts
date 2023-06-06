import styled from '@emotion/styled';

export const ButtonStyle = styled.button<{
  margin?: string;
  padding?: string;
  iconForButton?: string;
}>(
  {
    height: '32px',
    width: '113px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    border: '0px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  ({ color }) => ({
    backgroundColor: color,
  }),
  ({ margin }) => ({
    margin: margin,
  }),
  ({ padding }) => ({
    padding: padding,
  }),
  ({ iconForButton }) => ({
    width: iconForButton === 'pencil' ? 'auto' : '',
  })
);

export const ButtonSpan = styled.span(
  {
    marginLeft: '8px',
    fontSize: '13px',
    whiteSpace: 'nowrap',
  },

  ({ color }) => ({
    color: color,
  })
);
