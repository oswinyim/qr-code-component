import styled from "styled-components";

const Wrapper = styled.div`
  background-color: white;
  border-radius: 32px;
  padding: 2rem;
  position: relative;
  width: 375px;

  @media only screen and (max-width: 425px) {
    width: 270px;
  }
`;
const Card = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default Card;
