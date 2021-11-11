import { Container } from "@mui/material";
import { SectionTabs } from "./components/sectionTabs";
import { MovieDataProvider } from "./contexts/movieDataContext";

function App() {
  return (
    <MovieDataProvider>
      <Container maxWidth="xs">
        <SectionTabs />
      </Container>
    </MovieDataProvider>
  );
}

export default App;
