import React from 'react';
import { Divider, Grid, Image, Segment, Container} from 'semantic-ui-react'

const About_Us = () => {

  return (
<Container>
<Grid columns={2} relaxed='very'>
  <Grid.Column>
      <h2>About Us</h2>
      <p>Contrary to popular belief, Lorem isn’t simply random text. It has roots in a of classical Latin literature from 45 BC, making it over 2000 years old. Avalon’s leading hotels with gracious island hospitality, thoughtful amenities and distinctive.</p>
      <p>Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage ...</p>
  </Grid.Column>
  <Grid.Column>
      <img src = "https://via.placeholder.com/150" />
</Grid.Column>
</Grid>

<Grid columns={4} relaxed='very'>
  <Grid.Column>
    <Segment>
      <img src = "https://via.placeholder.com/50" />
    </Segment>
  </Grid.Column>
  <Grid.Column>
    <Segment>
      <img src = "https://via.placeholder.com/50" />
    </Segment>
  </Grid.Column>
  <Grid.Column>
    <Segment>
      <img src = "https://via.placeholder.com/50" />
    </Segment>
  </Grid.Column>
  <Grid.Column>
    <Segment>
      <img src = "https://via.placeholder.com/50" />
    </Segment>
  </Grid.Column>
</Grid>
<Grid columns={4} relaxed='very'>
  <Grid.Column>
    <Segment>
      <img src = "https://via.placeholder.com/50" />
    </Segment>
  </Grid.Column>
  <Grid.Column>
    <Segment>
      <img src = "https://via.placeholder.com/50" />
    </Segment>
  </Grid.Column>
  <Grid.Column>
    <Segment>
      <img src = "https://via.placeholder.com/50" />
    </Segment>
  </Grid.Column>
  <Grid.Column>
    <Segment>
      <img src = "https://via.placeholder.com/50" />
    </Segment>
  </Grid.Column>
</Grid>
</Container>
    )
}

export default About_Us;


