import React from "react";

import Layout from "../layout/Layout";
import Carusel from "../components/Carusel";

const About = () => {
  return (
    <Layout pageTitle='About Me'>
      <p>About page</p>
      <Carusel />
    </Layout>
  );
};

export default About;
