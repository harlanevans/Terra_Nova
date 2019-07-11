import React from './node_modules/react';
import { Link } from './node_modules/react-router-dom'
import { Image, Container, Grid, List, Divider, Icon, Input } from './node_modules/semantic-ui-react';

const Footer = () => {

  const handleLinkTo = () => {
    window.location.assign('/Under_Construction')
  }

  return(
    
    <>
      <div style={{backgroundColor: "#73A288", paddingTop: '20px', paddingBottom: '20px' }}>
        <Container>
          <Grid.Row >
            <Icon name='envelope outline' size='large' circular='true' bordered='true' color='brown' />
            <Input icon={<Icon name='arrow circle right' inverted circular link />} placeholder='Your Email Address' />
          </Grid.Row>
        </Container>
      </div>

      <div style={{backgroundColor: "#193E34", paddingTop: '20px', paddingBottom: '20px'}}> 
        <Container>
          <Grid>

            <Grid.Row>
              <Grid.Column width={4} verticalAlign='top'>
                <Image src = '../../../images/TN_horizontal_white_transparent-p-500.png'
                    size='medium'/>
              </Grid.Column>
              <Grid.Column width={4} verticalAlign='top'>
                <List link animated className="footerList">
                  <List.Item as='a' onClick={handleLinkTo}>Site Map</List.Item>
                  <List.Item as='a' onClick={handleLinkTo}>Terms & Conditions</List.Item>
                  <List.Item as='a' onClick={handleLinkTo}>Privacy Policy</List.Item>
                  <List.Item as='a' onClick={handleLinkTo}>Help</List.Item>
                  <List.Item as='a' onClick={handleLinkTo}>Affiliate</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={4} verticalAlign='top'>
                <List link animated className="footerList">
                  <List.Item as='a' onClick={handleLinkTo}>Our Location</List.Item>
                  <List.Item as='a' onClick={handleLinkTo}>Career</List.Item>
                  <Link to="/About_us">
                  <List.Item as='a'>About Us</List.Item>
                  </Link>
                  <List.Item as='a' onClick={handleLinkTo}>Contact Us</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={4} verticalAlign='top'>
                <List link animated className="footerList">
                  <List.Item as='a' onClick={handleLinkTo}>FAQS</List.Item>
                  <List.Item as='a' onClick={handleLinkTo}>News</List.Item>
                  <Link to="/Gallery">
                  <List.Item as='a'>Photo & Video</List.Item>
                  </Link>
                  <List.Item as='a' onClick={handleLinkTo}>Restaurant</List.Item>
                  <List.Item as='a' onClick={handleLinkTo}>Gift Card</List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
            <Divider />
            <Grid.Row>
              <Grid.Column width={8}>
                <div class="footerList">
                Copyright <Icon name='copyright outline' /> 2019 by <a href="https://www.devpointlabs.com/">DevPointStudiosLLC</a>
                </div>
              </Grid.Column>
              <Grid.Column width={8}>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    </>

  )
}

export default Footer;