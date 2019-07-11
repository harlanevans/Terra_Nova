import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


class Main_Carousel extends React.Component {
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
      < div className = "section">
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
            src="https://images.unsplash.com/photo-1530604019387-c6ca7cced91d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
            alt="Welcome to Terra Nova"
            style={{width: '100%', height: '100%'}}
            
          />
       <Carousel.Caption>
            <div className="carouselTitle"> Welcome to Terra Nova</div>
            <div className="carouselTitle2"> Cabins</div>
            <div className="carouselSubtTitle"> ------HOTELS  &  RESORTS------</div>
            <p>Terra nova cabins</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://images.unsplash.com/photo-1482463084673-98272196658a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
        alt="Second slide"
        style={{width: '100%', height: '100%'}}
       />
    
    <Carousel.Caption>
      <h3> Second slide label </h3>
      <p> Terra Nova 2 </p>
    </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
      className="d- block w-100"
      src="https://images.unsplash.com/photo-1504643039591-52948e3ddb47?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
      alt="Third Slide"
      style={{width: '100%', height: '100%'}}
      />
    <Carousel.Caption>
      <h3> Third label </h3>
      <p> Terra Nova 3 </p>
    </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
    </div>

    );
  }
}

export default Main_Carousel;

