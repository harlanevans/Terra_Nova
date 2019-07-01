import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Message} from 'semantic-ui-react'

const NoMatch = () => (
  <div>
    <Container className="noMatch">

      <Message>
        <Message.Header>404 page not found</Message.Header>
        <p>
          <Link to = '/'> Home </Link>
        </p>
      </Message>

      
    </Container>
  </div>
) 

export default NoMatch;
