import styled, { css } from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';

export const GroupContainer = styled.div`
  margin: 45px 0;
  position: relative;
`;

const shrinkLabelStyles = css`
  color: ${mainColor};
  font-size: 12px;
  top: -14px;
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: #fff;
  border: 0;
  border-bottom: 1px solid ${subColor};
  border-radius: 0;
  color: ${subColor};
  display: block;
  font-size: 18px;
  margin: 25px 0;
  padding: 10px 10px 10px 5px;
  width: 100%;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelStyles}
  }

  ~ label {
    ${({ value }) => value && shrinkLabelStyles}
  }
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  left: 5px;
  pointer-events: none;
  position: absolute;
  top: 10px;
  transition: 300ms ease all;
`;
