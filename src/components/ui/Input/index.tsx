import styled from 'styled-components';
import { InputHTMLAttributes } from 'react';

const WrapperInput = styled.div`
  display: flex;
  gap: 5px;
  height: 30px;
  justify-content: center;
  align-items: center;
  font-family: monospace;
  background-color: #151515;
  padding: 0 5px;
  input {
    font-family: monospace;
    border-radius: 0;
    border: none;
    padding: 2px 3px;
  }
`;

const Input = (props: JSX.IntrinsicAttributes & InputHTMLAttributes<HTMLInputElement> & { label: string }) => {
  return (
    <WrapperInput>
      <label>{props.label}</label>
      <input {...props} />
    </WrapperInput>
  );
};

export default Input;
