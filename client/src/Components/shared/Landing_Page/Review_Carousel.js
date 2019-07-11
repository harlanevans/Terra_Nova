import React from './node_modules/react';
import Carousel from './node_modules/react-bootstrap/Carousel';


class Review_Carousel extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
    <Carousel
      activeIndex={index}
      direction={direction}
      onSelect={this.handleSelect}
      indicators={false}
      fade={true}
    >
    
    <Carousel.Item>
          <img
            className="d-block w-100"
            // src="https://images.unsplash.com/photo-1465146633011-14f8e0781093?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
            alt="First slide"
            style={{width: '100%', height: '25rem', backgroundColor: '#525659'}}
            
          />
       <Carousel.Caption>
            <h3> Dwight Schrute</h3>
            <p>Terra nova, i would rather stay at my farm.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    <Carousel.Item>
      <img
        className="d-block w-100"
        // src="https://images.unsplash.com/photo-1465146633011-14f8e0781093?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
        alt="Second slide"
        style={{width: '100%', height: '25rem', backgroundColor: '#525659'}}
       />
    
    <Carousel.Caption>
      <h3> Jim Halpert  </h3>
      <p> Terra Nova 2 </p>
    </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
      className="d- block w-100"
      // src="https://images.unsplash.com/photo-1465146633011-14f8e0781093?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
      alt="Third Slide"
      style={{width: '100%', height: '25rem', backgroundColor: '#525659'}}
      />
    <Carousel.Caption>
      <h3> Micheal Scott </h3>
      <p> Terra Nova 3 is great </p>
    </Carousel.Caption>
    </Carousel.Item>
    </Carousel>

    );
  }
}

export default Review_Carousel;
