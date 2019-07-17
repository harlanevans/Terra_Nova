import React from 'react';
import { Grid, Image, Card } from 'semantic-ui-react'

const Cabin = ({ beds, baths, max_occupancy }) => (
  <>
  <div class="cabin">
      <Grid.Column width={4}>
        <Card>
          <Image src='https://images.unsplash.com/photo-1506974210756-8e1b8985d348?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80' size="medium"/>
          <Card.Content>
            <Card.Description>Located in the heart of Aspen with a unique blend of contemporary luxury and historic heritage, deluxe accommodations, superb amenities, genuine hospitality and dedicated service for an elevated experience in the Rocky Mountains.</Card.Description>
            <h4>Rooms:{beds}</h4>
            <h4>Baths:{baths}</h4>
            <h4>Max Occupancy:{max_occupancy}</h4>
          </Card.Content>
          <Card.Content extra>
            Starting: $10/day
          </Card.Content>
        </Card>
      </Grid.Column>
   </div>
  </>
)

export default Cabin;