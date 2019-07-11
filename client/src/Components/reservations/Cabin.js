import React from './node_modules/react';
import { Grid, Image } from './node_modules/semantic-ui-react'

const Cabin = ({ beds, baths, max_occupancy }) => (
  <>
  <div class="cabin">
      <Grid.Column width={4}>
        <Image src='https://images.unsplash.com/photo-1506974210756-8e1b8985d348?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80' size="medium"/>
        <h4>Rooms:{beds}</h4>
        <h4>Baths:{baths}</h4>
        <h4>Max Occupancy:{max_occupancy}</h4>
      </Grid.Column>
   </div>
  </>
)

export default Cabin;