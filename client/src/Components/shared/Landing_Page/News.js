import React from 'react';
import { Grid, Image, Container } from 'semantic-ui-react';
import Card from 'react-bootstrap/Card';


// const GridExampleDividedPhrase = () => (

//   <Card className="bg-white">
// <Container>
//   <h1> News </h1>
//   <hr className="our-events-hr"/>

  
//   <Grid columns='three' divided>
//     <Grid.Row>
//       <Grid.Column>
//         <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
//       </Grid.Column>
//       <Grid.Column>
//         <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
//       </Grid.Column>
//       <Grid.Column>
//         <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
//       </Grid.Column>
//     </Grid.Row>

//     <Grid.Row>
//       <Grid.Column>
//         <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
//       </Grid.Column>
//       <Grid.Column>
//         <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
//       </Grid.Column>
//       <Grid.Column>
//         <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
//       </Grid.Column>
//     </Grid.Row>
//   </Grid>
//   </Container>
//   </Card>
// )

// export default GridExampleDividedPhrase

const GridExampleCelled = () => (

  <Card className="bg-white">
   <Container>
  <h1> News </h1>
  <hr className="our-events-hr"/>

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
    <Grid.Row >
      <Grid.Column style={{padding: '.3em'}}>
      <h1>06</h1>
        </Grid.Column>
      <Grid.Column>
        |
        </Grid.Column>
      <Grid.Column>
        <h4>August 2017</h4>
        </Grid.Column>
     </Grid.Row> 
     <Grid.Row>
       <h4>Mother Earth Hosts Our Travels</h4>
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
