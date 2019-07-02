import React from 'react';
import { Image, Container, Grid, List, Divider, Icon, Input } from 'semantic-ui-react';

const Footer = () => {

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
                  <List.Item as='a'>Site Map</List.Item>
                  <List.Item as='a'>Terms & Conditions</List.Item>
                  <List.Item as='a'>Privacy Policy</List.Item>
                  <List.Item as='a'>Help</List.Item>
                  <List.Item as='a'>Affiliate</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={4} verticalAlign='top'>
                <List link animated className="footerList">
                  <List.Item as='a'>Our Location</List.Item>
                  <List.Item as='a'>Career</List.Item>
                  <List.Item as='a'>About Us</List.Item>
                  <List.Item as='a'>Contact Us</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={4} verticalAlign='top'>
                <List link animated className="footerList">
                  <List.Item as='a'>FAQS</List.Item>
                  <List.Item as='a'>News</List.Item>
                  <List.Item as='a'>Photo & Video</List.Item>
                  <List.Item as='a'>Restaurant</List.Item>
                  <List.Item as='a'>Gift Card</List.Item>
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