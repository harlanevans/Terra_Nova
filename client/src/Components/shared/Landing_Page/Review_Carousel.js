import React from 'react';
import { Carousel, Image }from 'react-bootstrap';
import { Grid } from 'semantic-ui-react';


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
      indicators={true}
      fade={true}
      >
    
    <Carousel.Item
    className="flex-row"
    >
       <img
      
        className="d-block w-100"
        src="https://images.unsplash.com/photo-1465146633011-14f8e0781093?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
        alt="Second slide"
        style={{width: '100%', height: '25rem', backgroundColor: '#525659'}}
       />

       <Carousel.Caption className="flex-column">
         <Image style={{ margin: '0 auto'}} src="https://images.unsplash.com/photo-1497501917125-1d703ac4a255?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=80" roundedCircle />

            <h4> "This is the only place to stay in Catalina! 
              I have stayed in the cheaper hotels and they were fine, but this is just the icing on the cake! 
              After spending the day bike riding and hiking to come back and enjoy a glass of wine while looking 
              out your ocean view window and then to top it all off..."
            </h4>
            <h3 className='flex-row'> JULIA ROSE </h3>
            <p className='flex-row'> From Los Angeles, California </p>
      </Carousel.Caption>
    </Carousel.Item>
      
    <Carousel.Item
    className="flex-row"
    >
       <img
        src="https://images.unsplash.com/photo-1465146633011-14f8e0781093?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
        alt="Second slide"
        style={{width: '100%', height: '25rem', backgroundColor: '#525659'}}
        />
    
      <Carousel.Caption 
      className="flex-column"

      >
       <Image style={{ margin: '0 auto'}} src="https://images.unsplash.com/photo-1501028932887-da5de53af865?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=80&q=80" roundedCircle />
      <h4>
      "We had Cabin A, which was newly refurbished and just beautiful. It had a full kitchen and a two decks, as well as sleeping area and new bathroom."
      </h4>
      <h3 className='flex-row'> Jim Halpert  </h3>
      <p className='flex-row'> From Sandy, Utah </p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item
    >
      <img
      src="https://images.unsplash.com/photo-1465146633011-14f8e0781093?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
      alt="Third Slide"
      style={{width: '100%', height: '25rem', backgroundColor: '#525659'}}
      />
    <Carousel.Caption  
    className="flex-column"
    >
      <Image style={{ margin: '0 auto'}} src="https://images.unsplash.com/photo-1501554728187-ce583db33af7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=80&q=80" roundedCircle />

      <h4>
      “We stayed in the Terra Nova cabin back in March and I must say I LOVED this cabin.”
      </h4>
      <h3 className='flex-row'> Micheal Scott </h3>
      <p className='flex-row'> From Scranton, Pennsylvanna </p>
      </Carousel.Caption>
    </Carousel.Item>

    </Carousel>

);
}
}

export default Review_Carousel;
