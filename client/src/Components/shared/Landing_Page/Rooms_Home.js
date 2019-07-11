import React from 'react';
import { Container, Card, Placeholder, Header} from 'semantic-ui-react'


class Rooms_Home extends React.Component {

  render () {
  return (
    
    <div className="section" style={{ textAlign: 'center', backgroundColor: "#8CC152" }}>
      <Container>
        <div>
        <Header as='h2'>Our Rooms</Header>
        </div>
        <p>When you host a party or family reunion, the special celebrations let you strengthen bonds with</p>

        <Card.Group itemsPerRow={3}>
          <Card>
            <Card.Content>
              <Placeholder>
                <Placeholder.Image rectangular />
              </Placeholder>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Placeholder>
                <Placeholder.Image rectangular />
              </Placeholder>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Placeholder>
                <Placeholder.Image rectangular />
              </Placeholder>
            </Card.Content>
          </Card>
        </Card.Group>
        <Card.Group itemsPerRow={3}>
          <Card>
            <Card.Content>
              <Placeholder>
                <Placeholder.Image rectangular />
              </Placeholder>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Placeholder>
                <Placeholder.Image rectangular />
              </Placeholder>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Placeholder>
                <Placeholder.Image rectangular />
              </Placeholder>
            </Card.Content>
          </Card>
        </Card.Group>
      </Container>
    </div>

  )
  }
}

export default Rooms_Home;