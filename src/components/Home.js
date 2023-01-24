import styled from "styled-components"
import VideoHome from "./VideoHome"


const Home = () => {
  return (
    <HomeSection>
      <VideoHome/>
    </HomeSection>
  )
}

export default Home


const HomeSection = styled.div`
  width: 100%;
  height: 100%;
  max-height: 90vh;
  overflow-y: hidden;
`;
