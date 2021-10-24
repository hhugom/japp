import { keyframes } from 'styled-components';
import styled from 'styled-components/native';

const loaderColor = '#fff';
const loaderSize = '14.6rem';
const loaderOffset = '1.7rem';
const loaderTiming = 'ease-in-out';

const pulsA = keyframes`
  0% { box-shadow: inset 0 0 0 ${loaderOffset} ${loaderColor}; opacity: 1; }
  50%, 100% { box-shadow: inset 0 0 0 0 ${loaderColor}; opacity: 0; }
}
`;

const pulsB = keyframes`
  0%, 50% { box-shadow: 0 0 0 0 ${loaderColor}; opacity: 0; }
  100% { box-shadow: 0 0 0 ${loaderOffset} ${loaderColor}; opacity: 1; }
`;

export const Loader = styled.View`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: ${loaderSize};
  margin-top: ${loaderSize} / 2;
  margin-bottom: ${loaderSize} / 2;
  &:before,
  &:after {
    content: '';
    position: absolute;
    border-radius: 50%;
    animation-duration: 1.8s;
    animation-iteration-count: infinite;
    animation-timing-function: ${loaderTiming};
    filter: drop-shadow(0 0 ${loaderOffset} / 2.25 rgba(${loaderColor}, 0.75));
  }
  &:before {
    width: 100%;
    padding-bottom: 100%;
    box-shadow: inset 0 0 0 ${loaderOffset} ${loaderColor};
    animation-name: ${pulsA};
  }
  &:after {
    width: calc(100% - ${loaderOffset} * 2);
    padding-bottom: calc(100% - ${loaderOffset}* 2);
    box-shadow: 0 0 0 0 ${loaderColor};
    animation-name: ${pulsB};
  }
`;
