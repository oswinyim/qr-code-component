import styled from "styled-components";
import "./App.css";
import Card from "./components/Card";
import qrImage from "./assets/img/image-qr-code.png";

const Wrapper = styled.div`
  background-color: #d6e1ef;
  font-size: 15px;
  width: 100%;
  height: 100vh;
  font-family: "Outfit", sans-serif;
  display: grid;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  text-align:center;

  img {
    border-radius: 16px;
    width: 100%;
  }
  h1 {
    font-weight: 700;
  }

  p {
    font-weight: 400;
    color: gray;
    width: 75%;
    margin: auto;
  }
  @media only screen and (max-width: 425px) {
    font-size: 12px;
    p {
      width: 90%;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Card>
        <ContentWrapper>
          <img src={qrImage} alt="" />
          <h1>Improve your front-end skills by building projects</h1>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </ContentWrapper>
      </Card>
    </Wrapper>
  );
}

export default App;
