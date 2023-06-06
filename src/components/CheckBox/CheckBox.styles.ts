import styled from '@emotion/styled';

export const CheckBoxFlex = styled.div({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  flexWrap: 'nowrap',
  padding: '8px 0 8 16px',
  '&:first-of-type': {
    padding: '16px 0 8px 16px',
  },

  '&:last-child': {
    padding: '8px 0 16px 16px',
  },
});

export const CheckBoxArea = styled.input<{ didChecked?: boolean }>(
  {
    height: '16px',
    width: '16px',
    position: 'relative',
    marginRight: '8px',
    WebkitAppearance: 'none',
    border: '1px solid #BAD8F5',
    cursor: 'pointer',
    borderRadius: '2px',
    '&::before': {
      position: 'absolute',
      content: '""',
      height: '16px',
      width: '16px',
      borderRadius: '2px',
      top: '-1px',
      left: '-1px',
    },
  },
  ({ didChecked }) => ({
    backgroundColor: didChecked ? '#459DF5' : 'white',
  })
);

export const Label = styled.label({});
