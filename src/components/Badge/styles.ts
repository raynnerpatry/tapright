import styled, { css, keyframes } from 'styled-components';

const growAnimation = keyframes`
  0% { transform: scale(0);}
  100 {transform: scale(1);}
`;
const growAnimationUpdate = keyframes`
  from { transform: scale(0);}
  to {transform: scale(1);}
`;

const animationRule = css`
  ${(props: { toggle: boolean }) =>
    props.toggle ? growAnimation : growAnimationUpdate} 2s;
`;

export const ColorBadge = styled.div`
  margin: auto;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: ${(props: { color: string }) => props.color};
  opacity: 1;
  transform: scale(1);
  animation: ${animationRule};
`;
