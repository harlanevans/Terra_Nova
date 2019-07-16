import React from 'react';
import Cabin from './Cabin';
import { Grid, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const CabinList = ({ cabins }) => (
  // Reservations maybe as an array? 
  // To compare start date and end date DB with state start-date end_date
  <div>
    
    <Grid>
      <Grid.Row>

        {/* If cabin has reservation id? */}
        {/* Then if the reservation start_date and end_date === what the user has chosen in state */}
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