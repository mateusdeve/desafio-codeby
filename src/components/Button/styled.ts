import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`


export const Btn = styled.button`
  background: #3A74F2;
  font-weight: 500;
  width: 90%;
  color: #fff;
  border-radius: 5px;
  padding: 13px;
  cursor: pointer;
  outline: none;
  transition: all .4s;
  border: 1px solid #3A74F2;

  &:hover{
    transition: all .4s;
    background: transparent;
    color: #3A74F2;
  }
`

export const BtnOutline = styled.button`
  font-weight: 500;
  width: 90%;
  margin-bottom: 50px;
  border-radius: 5px;
  padding: 13px;
  cursor: pointer;
  outline: none;
  transition: all .4s;
  border: 1px solid #3A74F2;

  background: transparent;
  color: #3A74F2;

  &:hover{
    transition: all .4s;
    background: #3A74F2;
    color: #fff;
  }
`