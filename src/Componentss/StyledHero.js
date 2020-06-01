import styled from "styled-components";
import defaultImg from "../imagess/room-1.jpeg";

const styledHero = styled.header`
  min-height: 60vh;
  background: url(${(props) => (props.img ? props.img : defaultImg)})
    center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// const SimpleButton = styled.button`
//   color: red;
//   background: green;
//   font-size: 3rem;
// `;

export default styledHero;
