import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header} from 'semantic-ui-react'

const NoMatch = () => (
  <div>
    <Container className="noMatch">
      <Header>404 page not found</Header>
      <Link to = '/'> Home </Link>
    </Container>
  </div>
) 

export default NoMatch;
