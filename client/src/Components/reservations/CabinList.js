import React from 'react';
import Cabin from './Cabin';
import { Grid, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const CabinList = ({ cabins }) => (
  <div>
    
    <Grid>
      <Grid.Row>
      {
          cabins.map( cabin =>
            
          <Link 
              to={{
              pathname: `/makereservation/${cabin.id}`,
              state: { cabin, },
            }}>
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