import React  ,{FC}from "react";
import styled from "styled-components";

const Button = styled.button`

  padding: 10px 20px;
  border: none;
  border-radius: 5px;

`

const  StyledComponent:FC<any> = (props) => {
    return <>
    <p> Use  StyledComponent  </p>
    <Button>按钮</Button>
    </>
}

export default StyledComponent;