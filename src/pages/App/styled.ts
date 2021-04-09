import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  width: 25%;
  background: #fff;
  height: 100%;
  border-radius: 15px;
  position: relative;
  margin-top: 30px;
  margin-bottom: 30px;
  @media(max-width: 600px){
    width: 90%;
  }
`

export const Title = styled.h1`
  font-size: 20px;
`

export const Head = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
`

export const Footer = styled.footer`
  width: 100%;
  bottom: 0;
`

export const Group = styled.div`
  min-height: 400px !important;
`

export const Loading = styled.div`
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`