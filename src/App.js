import { Container } from "@mui/material";
import { MovieFeed } from "./components/movieFeed";
import { SectionTabs } from "./components/sectionTabs";

function App() {
  return (
    <Container maxWidth="xs">
      <SectionTabs />
    </Container>
  );
}

export default App;
