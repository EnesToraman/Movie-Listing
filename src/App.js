import { Container } from "@mui/material";
import { MovieFeed } from "./components/movieFeed/movieFeed";
import { SectionTabs } from "./components/sectionTabs/sectionTabs";

function App() {
  return (
    <Container maxWidth="xs">
      <SectionTabs />
      <MovieFeed />
    </Container>
  );
}

export default App;
