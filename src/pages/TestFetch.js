import React from "react";
import { graphql } from "gatsby";

const TestFetch = ({ data }) => {
  return (
    <ul>
      {data.allFile.nodes.map((node) => (
        <li>{node.name}</li>
      ))}
    </ul>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default TestFetch;
