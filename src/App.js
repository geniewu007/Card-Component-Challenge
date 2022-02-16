import Card from "./components/Card";
import { GlobalStyles } from "./components/styles/Global";
import { StyledContainer } from "./components/styles/Container.styled";


function App() {
  return (
    <>
      <GlobalStyles />
        <StyledContainer>
          <Card />
        </StyledContainer>
        <p style={{fontSize: '10px', fontWeight: '500', textAlign: 'center'}}>Challenge by Frontend Mentor. Coded by Genie Wu.</p>
    </>
    
  );
}

export default App;
