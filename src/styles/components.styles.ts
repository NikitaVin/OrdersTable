import styled from '@emotion/styled';

export const MarginContainer = styled.div<{ left?: number }>({}, ({ left }) => ({
  marginLeft: left,
}));
