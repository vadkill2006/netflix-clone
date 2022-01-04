import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Row from "./Row";

const Home = () => {
  return (
    <div>
      {/* Nav */}
      <Nav />
      {/* End Nav */}
      {/* Header */}
      <Header />
      {/* Header */}
      <Row title="NETFLIX ORGINALS" movieType="netflix-originals" />
      <Row title="TRENDING NOW" movieType="trending-now" />
      <Row title="TOP RATED" movieType="top-rated" />
      <Row title="ACTION MOVIES" movieType="action-movies" />
      <Row title="HORRER MOVIES" movieType="horror-movies" />
      <Row title="ROMANCE MOVIES" movieType="romance-movies" />
      <Row title="DOCUMENTRIES MOVIES" movieType="documentaries-movies" />
    </div>
  );
};

export default Home;
