import styled from "styled-components";

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: ${props => props.active ? 'block' : 'none'};
`

const CloseButton = styled.button`
  position: fixed;
  top: 0;
  right: 0;
  margin: 1rem;
  padding: 1rem;
  height: 1rem;
  width: 1rem;
  background-color: rgba(0,0,0, 0);
  border:none;
  
  :before{
  content: 'X';
  font-weight: 800;
  }
  `
const Checkbox = styled.input`
      appearance: none;
      -webkit-appearance: none;
      background-color: #fafafa;
      border: 1px solid #cacece;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
      padding: 9px;
      border-radius: 3px;
      display: inline-block;
      position: relative;

      &:active {
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px 1px 3px rgba(0, 0, 0, 0.1);
      }

      &:checked:active {
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px 1px 3px rgba(0, 0, 0, 0.1);
      }

      &:checked {
        background-color: #e9ecee;
        border: 1px solid #adb8c0;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05), inset 15px 10px -12px rgba(255, 255, 255, 0.1);
        color: #99a1a7;
      }

      &:checked:after {
        font-family: "Font Awesome 5 Free";
        content: '\\f00c';
        font-weight: 900;
        font-size: 14px;
        position: absolute;
        top: 0px;
        left: 3px;
        color: #99a1a7;
      }

    
`


export {Modal, CloseButton, Checkbox}