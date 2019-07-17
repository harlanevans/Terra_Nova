import React from 'react';
import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';


const Under_Construction = () => {

  return (
    <div>
      <Card className="bg-dark text-white">
        <Card.Img src="https://images.unsplash.com/photo-1516972810927-80185027ca84?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          style={{ width: '100%', height: '50rem' }}
        />

        <Card.ImgOverlay>
          <div style={styles.column}>

            <div style={styles.row}>

              <h1 style={styles.card}> 
              Page under construction </h1>
            </div>

            <div style={styles.row}>
              <h2 style={styles.card}>
                Check back in at a later time
              </h2>
            </div>
          </div>
        </Card.ImgOverlay>
      </Card>
    </div>
  )
}

export default Under_Construction;

const styles = {
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: '100px',
    fontStyle: 'vendera',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    paddingTop: '8em'
  },
  card: {
    backgroundColor: 'darkGreen',
    margin: '100px',
    width: '600px',
    height: '-5px',
    fontSize: '50px',
    fontStyle: 'vendera'
  },

}