import React from 'react';
import { Grid, Image, Container } from 'semantic-ui-react';
import Card from 'react-bootstrap/Card';

const GridExampleCelled = () => (

  
  <Card  style={{padding: '90px 0', backgroundColor: "#C96C47", color: 'white'}}>
   <Container>
  <h1> News </h1>
  <div style={{ color: "#8A691E"}}>
      <p> ──────────────── </p>
  </div>

  <Grid divided columns={3}>

  <Grid.Row>

  <Grid.Column width={5} style={{padding: '3em'}}>
      <Grid.Row>
        <h1> 25| August 2017 </h1>
     </Grid.Row> 
     <Grid.Row>
       <h4>Update menu food in Skyline Hotel</h4>
     </Grid.Row>
     <Grid.Row>
      <h7>Read More</h7>
     </Grid.Row>
  </Grid.Column>


   <Grid.Column width={5}  style={{padding: '3em'}}>
    <Grid.Row>
      <h1> 22| August 2017 </h1>
     </Grid.Row> 
     <Grid.Row>
       <h4>Las Maquinas on Tragamonedas</h4>
     </Grid.Row>
     <Grid.Row>
      <h7>Read More</h7>
     </Grid.Row>
   </Grid.Column>
  


  <Grid.Column width={5} style={{padding: '3em'}}>
    <Grid.Row>
      <h1> 06 | August 2017 </h1>
    </Grid.Row> 
     <Grid.Row>
       <h4>Mother Earth Hosts Our Travels </h4>
     </Grid.Row>
     <Grid.Row>
      <h7>Read More</h7>
     </Grid.Row>
  </Grid.Column>


    </Grid.Row>
  </Grid>
  
  </Container>
</Card>

)

export default GridExampleCelled
