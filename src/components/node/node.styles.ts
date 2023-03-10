import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  gap: 10px;
  background-color: #d1d1d1;
  padding: 10px;
  border-radius: 5px;
  width: fit-content;
`;

export const ChildrenWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 30px;
  gap: 10px;
`;

export const Input = styled.input`
  height: 40px;
  outline: none;
  padding: 5px;
  font-size: 20px;
  border-radius: 5px;
`;

export const Button = styled.button`
  height: 40px;
  width: 40px;
  cursor: pointer;
  font-size: 20px;
  border-radius: 5px;
`;
