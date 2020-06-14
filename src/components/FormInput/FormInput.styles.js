import styled, { css } from 'styled-components';

export const ShrinkMixin = css`
  top: -14px;
  font-size: 12px;
  color: black;
`;

export const StyledLabel = styled.label`
  color: gray;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  ${props => props.shrink ? ShrinkMixin : null}
`;

export const StyledInput = styled.input`
  background: none;
  background-color: white;
  color: grey;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid grey;
  margin: 25px 0;

  &[type='password'] {
    letter-spacing: 0.3em;
  }

  &:focus {
    outline: none;
  }

  &:focus ~ ${StyledLabel} {
    ${ShrinkMixin}
  }
`;

export const StyledContainer = styled.div`
  position: relative;
  margin: 45px 0;
`;