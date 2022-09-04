import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../../components/header/header";
import SideNav from "../../components/side-navigation/side-navbar";
import SecondaryHeader from "../../components/secondary-header/secondary-header";

import HomePage from "../../pages/home/home-page";
import NewReleasePage from "../../pages/new-release-page/new-release-page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <SecondaryHeader />
        <SideNav />
        <Container fluid className="page">
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/new-release" element={<NewReleasePage />} />
            <Route path="/about" />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
