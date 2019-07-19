import React from 'react';
import { Grid, Image, Container } from 'semantic-ui-react'
import Card from 'react-bootstrap/Card';


const GridExampleRelaxed = () => (

  
  <Card className="bg-white" style={{padding: '90px 0'}}>
<Container>
  <h1> Our Events </h1>
  <div style={{ color: "#8A691E"}}>
      <h3> ──────────── </h3>
  </div>
  
  <div style={{ padding: '20px 0'}}>
  <Grid container columns={3}>
    <Grid.Column>
      <Image 
      src='https://images.unsplash.com/photo-1437136356837-2d4d9a9083ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=664&q=80' 
      style={{width: '100%', height: '95%'}}
      />
  <Card.ImgOverlay className='text-white event-words'>
    <div>
      <h3> EVENTS </h3>
    </div>
    <div>
     <h1>Wedding day</h1>
    </div>
  </Card.ImgOverlay>
  </Grid.Column>
  
    <Grid.Column>
      <Image src='https://images.unsplash.com/photo-1557835251-cf8c711abd7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' 
      style={{width: '100%', height: '95%'}}
      />
    <Card.ImgOverlay className='text-white event-words'>
     <div>
       <h3> EVENTS </h3>
     </div>
     <div>
      <h1>Golf cup 2017</h1>
     </div>
   </Card.ImgOverlay>
   </Grid.Column>
  
    <Grid.Column >
      <Image src='https://images.unsplash.com/photo-1525914813433-886dc018469d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80' 
      style={{width: '100%', height: '95%'}}
      />
    <Card.ImgOverlay className='text-white event-words'>
    <div>
      <h3> EVENTS </h3>
    </div>
    <div>
      <h1>Beach sports</h1>
    </div>
  </Card.ImgOverlay>
  </Grid.Column>
  </Grid>
  </div>
  </Container>
</Card>

)

export default GridExampleRelaxed

const styles = {
  card: {
    margin: '500px',
    width: '600px',
    height: '-5px',
    fontSize: '50px',
    fontStyle: 'vendera'
  },

}

const colors = [
'white',
]
