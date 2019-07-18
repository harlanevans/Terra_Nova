import React from 'react';
import { Grid, Image, Card } from 'semantic-ui-react'

const Cabin = ({ beds, baths, max_occupancy, price, image, description }) => (
  <>
  <div class="cabin">
      <Grid.Column width={4}>
        <Card>
          <Image src={image} size="medium"/>
          <Card.Content>
            <Card.Description>{description}</Card.Description>
            <h4>Rooms:{beds}</h4>
            <h4>Baths:{baths}</h4>
            <h4>Max Occupancy:{max_occupancy}</h4>
          </Card.Content>
          <Card.Content extra>
            Starting: ${price}/day
          </Card.Content>
        </Card>
      </Grid.Column>
   </div>
  </>
)

export default Cabin;