import React from './node_modules/react';
import Cabin from './Cabin';
import { Grid, Image } from './node_modules/semantic-ui-react'
import { Link } from './node_modules/react-router-dom';

const CabinList = ({ cabins }) => (
  <div>
    
         <Grid>
         <Grid.Row>
           {
         cabins.map( cabin =>
        <Link to={`/makereservation/${cabin.id}`}>
        <Cabin
        key={cabin.id}
        {...cabin}
        />
        </Link>
        )
         }
           </Grid.Row>
       </Grid>
    
    
  </div>
)

export default CabinList;