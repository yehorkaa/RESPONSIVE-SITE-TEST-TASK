import Box from "./components/ui/Box/Box";
import Header from "./components/containers/header/Header";
import IntroSection from "./components/containers/intro-section/IntroSection";
import UsersSection from "./components/containers/users-section/UsersSection";
import styles from "./App.module.scss";

function App() {
  return (
    <Box type="horiz" className={styles.main}>
      <Header />
      <IntroSection />
      <UsersSection />
    </Box>
  );
}

export default App;
