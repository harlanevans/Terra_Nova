import React from 'react';
 import { Image } from 'semantic-ui-react';

class Carousel extends React.Component {

  render() {
    return (
      <div className="section" style={{ textAlign: 'center', backgroundColor: "#73A288"}}>
        <Image src='https://images.unsplash.com/photo-1530604019387-c6ca7cced91d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80' fluid />
        
    
      </div>
    )
  }


}


export default Carousel;