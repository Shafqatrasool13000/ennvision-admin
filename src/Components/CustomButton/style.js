import styled from "styled-components";

export const CustormButtonContainer = styled.div`

  width: ${(props) => props.width};
 
  .ant-btn {
    border: none;
    outline: none;
    background-color: ${(props) => props.bgcolor};
    color: ${(props) => props.color};
    padding: ${(props) => props.padding};
    font-size: ${(props)=>props.fontSize};
    border-radius: 4px;
    width: -moz-available;
    width: -webkit-fill-available;
    height: auto;
    font-family: ${(props)=>props.fontFamily};
    cursor: pointer;
    &:hover {
    outline: none;
    }
  }
`;
