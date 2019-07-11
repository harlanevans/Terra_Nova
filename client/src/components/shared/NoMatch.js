import React from './node_modules/react';
import { Link } from './node_modules/react-router-dom';
import { Container, Message} from './node_modules/semantic-ui-react'

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
