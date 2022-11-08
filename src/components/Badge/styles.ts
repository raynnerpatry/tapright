import styled, { css, keyframes } from 'styled-components';

const growAnimation = keyframes`
  0% { transform: scale(0);}
  100 {transform: scale(1);}
`;
const growAnimationUpdate = keyframes`
  from { transform: scale(0);}
  to {transform: scale(1);}
`;

const animationName = css`
  ${(props: { toggle: boolean }) =>
    props.toggle ? growAnimation : growAnimationUpdate};
`;

const color = css`
  ${(props: { color: string }) => props.color};
`;

const animationDuration = css`
  ${(props: { duration: number }) => props.duration}s
`;

export const ColorBadge = styled.div`
  margin: auto;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: ${color};
  opacity: 1;
  transform: scale(1);
  animation-name: ${animationName};
  animation-duration: ${animationDuration};
`;

export const WrapperBadge = styled.div`
  margin: auto;
  width: 200px;
  height: 200px;
  background: #00000030;
  border-radius: 50%;
`;
