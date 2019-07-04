import React from 'react';
import { Grid, Image, Segment, Placeholder, Container, Header } from 'semantic-ui-react'


const About_Us = () => {

  return (
    <div className="section" style={{ textAlign: 'center', backgroundColor: "#73A288" }}>
      <Container>
        <Grid columns={2} relaxed='very'>
          <Grid.Column>
              <Header as='h2'>About Us</Header>
              <p>Contrary to popular belief, Lorem isn’t simply random text. It has roots in a of classical Latin literature from 45 BC, making it over 2000 years old. Avalon’s leading hotels with gracious island hospitality, thoughtful amenities and distinctive.</p>
              <p>Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage ...</p>
          </Grid.Column>
          <Grid.Column>
            <Placeholder style={{ height: 150, width: 150 }}>
              <Placeholder.Image />
            </Placeholder>
        </Grid.Column>
        </Grid>

        <Grid columns={4} relaxed='very'>
          <Grid.Row>
            <Grid.Column>
              <Segment>
                <Image src='https://via.placeholder.com/50' />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Image src='https://via.placeholder.com/50' />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Image src='https://via.placeholder.com/50' />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Image src='https://via.placeholder.com/50' />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid columns={4} relaxed='very'>
          <Grid.Row>
            <Grid.Column>
              <Segment>
                <Image src='https://via.placeholder.com/50' />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Image src='https://via.placeholder.com/50' />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Image src='https://via.placeholder.com/50' />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Image src='https://via.placeholder.com/50' />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
    )
}

export default About_Us;


