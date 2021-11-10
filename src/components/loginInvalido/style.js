import styled from "styled-components";

export const DivFlex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const ContainerPopUP = styled.div`
    position: absolute;
    color: white;
    background-color: rgba(255, 255,255, 0.1);
    z-index: 1000;
    text-align: center;
    width:100%;
    height:100%;
    top: 0%;
`;

export const DivFlexAlterada = styled(DivFlex)`
    position: relative;
    padding: 40px;
    box-sizing: border-box;
    flex-direction: column;
    background-color: rgba(255, 255,255, 0.98);
    top:50%;
    left:50%;
    margin: auto 5px;
    width: 300px;
    color: black;
    span{
        margin-bottom: 10px;
        color: "red";
    }

    button{
        background-color: #283266;
        color: white;
        padding: 5px;
        border: 0px;
        margin-top: 20px;
        width: 100%;
    }
`;