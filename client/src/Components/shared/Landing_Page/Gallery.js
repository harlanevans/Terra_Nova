import React from 'react';
import { Container, Header, Icon, Grid, Divider } from 'semantic-ui-react'
import "./Gallery.css";




const Gallery = () => {

  return (
    <div style={{ textAlign: 'center', backgroundColor: "#73A299" }}>
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column width={6} style={{ textAlign: 'center'}}></Grid.Column>
            <Grid.Column width={4} style={{ textAlign: 'center'}}>
              <Header as='h2' style={{ color: 'white' }}>Our Gallery</Header>
                  <Divider horizontal>
                    <Icon name='square full' size='large' color='brown' />
                  </Divider>              
            </Grid.Column>
            <Grid.Column width={6} style={{ textAlign: 'center'}}></Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <div className='gallery_nav'>
              <ul>
                <li>HOTEL & GROUND</li>
                <li>ROOMSUITE</li>
                <li>BATHROOM</li>
                <li>DINING</li>
              </ul>
            </div>
          </Grid.Row>
        </Grid>
      </Container>



        <div className="container">
          <div className="row">
            <div className="col-4@sm col-3@md">
              <div className="filters-group">
                <label htmlFor="filters-search-input" className="filter-label">Search</label>
                <input className="textfield filter__search js-shuffle-search" type="search" id="filters-search-input" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12@sm filters-group-wrap">
              <div className="filters-group">
                <p className="filter-label">Filter</p>
                <div className="btn-group filter-options">
                  <button className="btn btn--primary" data-group="space">Space</button>
                  <button className="btn btn--primary" data-group="nature">Nature</button>
                  <button className="btn btn--primary" data-group="animal">Animal</button>
                  <button className="btn btn--primary" data-group="city">City</button>
                </div>
              </div>
              <fieldset className="filters-group">
                <legend className="filter-label">Sort</legend>
                <div className="btn-group sort-options">
                  <label className="btn active">
                    <input type="radio" name="sort-value" defaultValue="dom" defaultChecked /> Default
                  </label>
                  <label className="btn">
                    <input type="radio" name="sort-value" defaultValue="title" /> Title
                  </label>
                  <label className="btn">
                    <input type="radio" name="sort-value" defaultValue="date-created" /> Date Created
                  </label>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
        <div className="container">
          <div id="grid" className="row my-shuffle-container">
            <figure className="col-3@xs col-4@sm col-3@md picture-item" data-groups="[&quot;nature&quot;]" data-date-created="2017-04-30" data-title="Lake Walchen">
              <div className="picture-item__inner">
                <div className="aspect aspect--16x9">
                  <div className="aspect__inner">
                    <img src="https://images.unsplash.com/photo-1493585552824-131927c85da2?ixlib=rb-0.3.5&auto=format&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=284&h=160&fit=crop&s=6ef0f8984525fc4500d43ffa53fe8190" srcSet="https://images.unsplash.com/photo-1493585552824-131927c85da2?ixlib=rb-0.3.5&auto=format&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=284&h=160&fit=crop&s=6ef0f8984525fc4500d43ffa53fe8190 1x, https://images.unsplash.com/photo-1493585552824-131927c85da2?ixlib=rb-0.3.5&auto=format&q=55&fm=jpg&dpr=2&crop=entropy&cs=tinysrgb&w=284&h=160&fit=crop&s=6ef0f8984525fc4500d43ffa53fe8190 2x" alt="A deep blue lake sits in the middle of vast hills covered with evergreen trees" />
                  </div>
                </div>
                <div className="picture-item__details">
                  <figcaption className="picture-item__title"><a href="https://unsplash.com/photos/zshyCr6HGw0" target="_blank" rel="noopener">Lake Walchen</a></figcaption>
                  <p className="picture-item__tags hidden@xs">nature</p>
                </div>
              </div>
            </figure>
            <figure className="col-3@xs col-8@sm col-6@md picture-item picture-item--overlay" data-groups="[&quot;city&quot;]" data-date-created="2016-07-01" data-title="Golden Gate Bridge">
              <div className="picture-item__inner">
                <img src="https://images.unsplash.com/photo-1467348733814-f93fc480bec6?ixlib=rb-0.3.5&auto=format&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=584&h=329&fit=crop&s=2590c736835ec6555e952e19bb37f06e" srcSet="https://images.unsplash.com/photo-1467348733814-f93fc480bec6?ixlib=rb-0.3.5&auto=format&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=584&h=329&fit=crop&s=2590c736835ec6555e952e19bb37f06e 1x, https://images.unsplash.com/photo-1467348733814-f93fc480bec6?ixlib=rb-0.3.5&auto=format&q=55&fm=jpg&dpr=2&crop=entropy&cs=tinysrgb&w=584&h=329&fit=crop&s=2590c736835ec6555e952e19bb37f06e 2x" alt="Looking down over one of the pillars of the Golden Gate Bridge to the roadside and water below" />
                <div className="picture-item__details">
                  <figcaption className="picture-item__title"><a href="https://unsplash.com/photos/RRNbMiPmTZY" target="_blank" rel="noopener">Golden Gate Bridge</a></figcaption>
                  <p className="picture-item__tags hidden@xs">city</p>
                </div>
              </div>
            </figure>
            <figure className="col-3@xs col-4@sm col-3@md picture-item" data-groups="[&quot;animal&quot;]" data-date-created="2016-08-12" data-title="Crocodile">
              <div className="picture-item__inner">
                <div className="aspect aspect--16x9">
                  <div className="aspect__inner">
                    <img src="https://images.unsplash.com/photo-1471005197911-88e9d4a7834d?ixlib=rb-0.3.5&auto=format&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=284&h=160&fit=crop&s=bd8b952c4c983d4bde5e2018c90c9124" srcSet="https://images.unsplash.com/photo-1471005197911-88e9d4a7834d?ixlib=rb-0.3.5&auto=format&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=284&h=160&fit=crop&s=bd8b952c4c983d4bde5e2018c90c9124 1x, https://images.unsplash.com/photo-1471005197911-88e9d4a7834d?ixlib=rb-0.3.5&auto=format&q=55&fm=jpg&dpr=2&crop=entropy&cs=tinysrgb&w=284&h=160&fit=crop&s=bd8b952c4c983d4bde5e2018c90c9124 2x" alt="A close, profile view of a crocodile looking directly into the camera" />
                  </div>
                </div>
                <div className="picture-item__details">
                  <figcaption className="picture-item__title"><a href="https://unsplash.com/photos/YOX8ZMTo7hk" target="_blank" rel="noopener">Crocodile</a></figcaption>
                  <p className="picture-item__tags hidden@xs">animal</p>
                </div>
              </div>
            </figure>
            <figure className="col-3@xs col-4@sm col-3@md picture-item picture-item--h2" data-groups="[&quot;space&quot;]" data-date-created="2016-03-07" data-title="SpaceX">
              <div className="picture-item__inner">
                <div className="aspect aspect--16x9">
                  <div className="aspect__inner">
                    <img src="https://images.unsplash.com/photo-1457364559154-aa2644600ebb?ixlib=rb-0.3.5&auto=format&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=284&h=160&fit=crop&s=3d0e3e8d72fc5667fd9fbe354e80957b" srcSet="https://images.unsplash.com/photo-1457364559154-aa2644600ebb?ixlib=rb-0.3.5&auto=format&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=284&h=160&fit=crop&s=3d0e3e8d72fc5667fd9fbe354e80957b 1x, https://images.unsplash.com/photo-1457364559154-aa2644600ebb?ixlib=rb-0.3.5&auto=format&q=55&fm=jpg&dpr=2&crop=entropy&cs=tinysrgb&w=284&h=160&fit=crop&s=3d0e3e8d72fc5667fd9fbe354e80957b 2x" alt="SpaceX launches a Falcon 9 rocket from Cape Canaveral Air Force Station" />
                  </div>
                </div>
                <div className="picture-item__details">
                  <figcaption className="picture-item__title"><a href="https://unsplash.com/photos/GDdRP7U5ct0" target="_blank" rel="noopener">SpaceX</a></figcaption>
                  <p className="picture-item__tags hidden@xs">space</p>
                </div>
                <p className="picture-item__description">SpaceX launches a Falcon 9 rocket from Cape Canaveral Air Force Station</p>
              </div>
            </figure>
            <figure className="col-3@xs col-4@sm col-3@md picture-item" data-groups="[&quot;city&quot;]" data-date-created="2016-06-09" data-title="Crossroads">
              <div className="picture-item__inner">
                <div className="aspect aspect--16x9">
                  <div className="aspect__inner">
                    <img src="https://images.unsplash.com/photo-1465447142348-e9952c393450?ixlib=rb-0.3.5&auto=format&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=284&h=160&fit=crop&s=7d97e22d36a9a73beb639a936e6774e9" srcSet="https://images.unsplash.com/photo-1465447142348-e9952c393450?ixlib=rb-0.3.5&auto=format&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=284&h=160&fit=crop&s=7d97e22d36a9a73beb639a936e6774e9 1x, https://images.unsplash.com/photo-1465447142348-e9952c393450?ixlib=rb-0.3.5&auto=format&q=55&fm=jpg&dpr=2&crop=entropy&cs=tinysrgb&w=284&h=160&fit=crop&s=7d97e22d36a9a73beb639a936e6774e9 2x" alt="A multi-level highway stack interchange in Puxi, Shanghai" />
                  </div>
                </div>
                <div className="picture-item__details">
                  <figcaption className="picture-item__title"><a href="https://unsplash.com/photos/7nrsVjvALnA" target="_blank" rel="noopener">Crossroads</a></figcaption>
                  <p className="picture-item__tags hidden@xs">city</p>
                </div>
              </div>
            </figure>
            <figure className="col-6@xs col-8@sm col-6@md picture-item picture-item--overlay" data-groups="[&quot;space&quot;,&quot;nature&quot;]" data-date-created="2016-06-29" data-title="Milky Way">
              <div className="picture-item__inner">
                <img src="https://images.unsplash.com/photo-1467173572719-f14b9fb86e5f?ixlib=rb-0.3.5&auto=format&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=584&h=329&fit=crop&s=e641d6b3c4c2c967e80e998d02a4d03b" srcSet="https://images.unsplash.com/photo-1467173572719-f14b9fb86e5f?ixlib=rb-0.3.5&auto=format&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=584&h=329&fit=crop&s=e641d6b3c4c2c967e80e998d02a4d03b 1x, https://images.unsplash.com/photo-1467173572719-f14b9fb86e5f?ixlib=rb-0.3.5&auto=format&q=55&fm=jpg&dpr=2&crop=entropy&cs=tinysrgb&w=584&h=329&fit=crop&s=e641d6b3c4c2c967e80e998d02a4d03b 2x" alt="Dimly lit mountains give way to a starry night showing the Milky Way" />
                <div className="picture-item__details">
                  <figcaption className="picture-item__title"><a href="https://unsplash.com/photos/_4Ib-a8g9aA" target="_blank" rel="noopener">Milky Way</a></figcaption>
                  <p className="picture-item__tags hidden@xs">space, nature</p>
                </div>
              </div>
            </figure>
            <figure className="col-6@xs col-8@sm col-6@md picture-item picture-item--h2" data-groups="[&quot;space&quot;]" data-date-created="2015-11-06" data-title="Earth">
              <div className="picture-item__inner">
                <div className="aspect aspect--16x9">
                  <div className="aspect__inner">
                    <img src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-0.3.5&auto=format&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=584&h=329&fit=crop&s=f4856588634def31d5885dc396fe9a2e" srcSet="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-0.3.5&auto=format&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=584&h=329&fit=crop&s=f4856588634def31d5885dc396fe9a2e 1x, https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-0.3.5&auto=format&q=55&fm=jpg&dpr=2&crop=entropy&cs=tinysrgb&w=584&h=329&fit=crop&s=f4856588634def31d5885dc396fe9a2e 2x" alt="NASA Satellite view of Earth" />
                  </div>
                </div>
                <div className="picture-item__details">
                  <figcaption className="picture-item__title"><a href="https://unsplash.com/photos/yZygONrUBe8" target="_blank" rel="noopener">Earth</a></figcaption>
                  <p className="picture-item__tags hidden@xs">space</p>
                </div>
                <p className="picture-item__description">NASA Satellite view of Earth</p>
              </div>
            </figure>
            <figure className="col-3@xs col-4@sm col-3@md picture-item picture-item--h2" data-groups="[&quot;animal&quot;]" data-date-created="2015-07-23" data-title="Turtle">
              <div className="picture-item__inner">
                <div className="aspect aspect--16x9">
                  <div className="aspect__inner">
                    <img src="https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-0.3.5&auto=format&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=284&h=160&fit=crop&s=bc4e1180b6b8789d38c614edc8d0dd01" srcSet="https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-0.3.5&auto=format&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=284&h=160&fit=crop&s=bc4e1180b6b8789d38c614edc8d0dd01 1x, https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-0.3.5&auto=format&q=55&fm=jpg&dpr=2&crop=entropy&cs=tinysrgb&w=284&h=160&fit=crop&s=bc4e1180b6b8789d38c614edc8d0dd01 2x" alt="A close up of a turtle underwater" />
                  </div>
                </div>
                <div className="picture-item__details">
                  <figcaption className="picture-item__title"><a href="https://unsplash.com/photos/L-2p8fapOA8" target="_blank" rel="noopener">Turtle</a></figcaption>
                  <p className="picture-item__tags hidden@xs">animal</p>
                </div>
                <p className="picture-item__description">A close up of a turtle underwater</p>
              </div>
            </figure>
            <figure className="col-3@xs col-4@sm col-3@md picture-item" data-groups="[&quot;nature&quot;]" data-date-created="2014-10-12" data-title="Stanley Park">
              <div className="picture-item__inner">
                <div className="aspect aspect--16x9">
                  <div className="aspect__inner">
                    <img src="https://images.unsplash.com/uploads/1413142095961484763cf/d141726c?ixlib=rb-0.3.5&auto=format&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=284&h=160&fit=crop&s=6141097da144d759176d77b4024c064b" srcSet="https://images.unsplash.com/uploads/1413142095961484763cf/d141726c?ixlib=rb-0.3.5&auto=format&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=284&h=160&fit=crop&s=6141097da144d759176d77b4024c064b 1x, https://images.unsplash.com/uploads/1413142095961484763cf/d141726c?ixlib=rb-0.3.5&auto=format&q=55&fm=jpg&dpr=2&crop=entropy&cs=tinysrgb&w=284&h=160&fit=crop&s=6141097da144d759176d77b4024c064b 2x" alt="Many trees stand alonside a hill which overlooks a pedestrian path, next to the ocean at Stanley Park in Vancouver, Canada" />
                  </div>
                </div>
                <div className="picture-item__details">
                  <figcaption className="picture-item__title"><a href="https://unsplash.com/photos/b-yEdfrvQ50" target="_blank" rel="noopener">Stanley Park</a></figcaption>
                  <p className="picture-item__tags hidden@xs">nature</p>
                </div>
              </div>
            </figure>
            <figure className="col-3@xs col-4@sm col-3@md picture-item" data-groups="[&quot;animal&quot;]" data-date-created="2017-01-12" data-title="Astronaut Cat">
              <div className="picture-item__inner">
                <div className="aspect aspect--16x9">
                  <div className="aspect__inner">
                    <img src="https://images.unsplash.com/photo-1484244233201-29892afe6a2c?ixlib=rb-0.3.5&auto=format&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=284&h=160&fit=crop&s=98423596f72d9f0913a4d44f0580a34c" srcSet="https://images.unsplash.com/photo-1484244233201-29892afe6a2c?ixlib=rb-0.3.5&auto=format&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=284&h=160&fit=crop&s=98423596f72d9f0913a4d44f0580a34c 1x, https://images.unsplash.com/photo-1484244233201-29892afe6a2c?ixlib=rb-0.3.5&auto=format&q=55&fm=jpg&dpr=2&crop=entropy&cs=tinysrgb&w=284&h=160&fit=crop&s=98423596f72d9f0913a4d44f0580a34c 2x" alt="An intrigued cat sits in grass next to a flag planted in front of it with an astronaut space kitty sticker on beige fabric." />
                  </div>
                </div>
                <div className="picture-item__details">
                  <figcaption className="picture-item__title"><a href="https://unsplash.com/photos/FqkBXo2Nkq0" target="_blank" rel="noopener">Astronaut Cat</a></figcaption>
                  <p className="picture-item__tags hidden@xs">animal</p>
                </div>
              </div>
            </figure>
            <figure className="col-3@xs col-8@sm col-6@md picture-item picture-item--overlay" data-groups="[&quot;city&quot;]" data-date-created="2017-01-19" data-title="San Francisco">
              <div className="picture-item__inner">
                <img src="https://images.unsplash.com/photo-1484851050019-ca9daf7736fb?ixlib=rb-0.3.5&auto=format&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=584&h=329&fit=crop&s=05325a7cc678f7f765cbbdcf7159ab89" srcSet="https://images.unsplash.com/photo-1484851050019-ca9daf7736fb?ixlib=rb-0.3.5&auto=format&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=584&h=329&fit=crop&s=05325a7cc678f7f765cbbdcf7159ab89 1x, https://images.unsplash.com/photo-1484851050019-ca9daf7736fb?ixlib=rb-0.3.5&auto=format&q=55&fm=jpg&dpr=2&crop=entropy&cs=tinysrgb&w=584&h=329&fit=crop&s=05325a7cc678f7f765cbbdcf7159ab89 2x" alt="Pier 14 at night, looking towards downtown San Francisco's brightly lit buildings" />
                <div className="picture-item__details">
                  <figcaption className="picture-item__title"><a href="https://unsplash.com/photos/h3jarbNzlOg" target="_blank" rel="noopener">San Francisco</a></figcaption>
                  <p className="picture-item__tags hidden@xs">city</p>
                </div>
              </div>
            </figure>
            <figure className="col-3@xs col-4@sm col-3@md picture-item" data-groups="[&quot;nature&quot;,&quot;city&quot;]" data-date-created="2015-10-20" data-title="Central Park">
              <div className="picture-item__inner">
                <div className="aspect aspect--16x9">
                  <div className="aspect__inner">
                    <img src="https://images.unsplash.com/photo-1445346366695-5bf62de05412?ixlib=rb-0.3.5&auto=format&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=284&h=160&fit=crop&s=1822bfd69c4021973a3d926e9294b70f" srcSet="https://images.unsplash.com/photo-1445346366695-5bf62de05412?ixlib=rb-0.3.5&auto=format&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=284&h=160&fit=crop&s=1822bfd69c4021973a3d926e9294b70f 1x, https://images.unsplash.com/photo-1445346366695-5bf62de05412?ixlib=rb-0.3.5&auto=format&q=55&fm=jpg&dpr=2&crop=entropy&cs=tinysrgb&w=284&h=160&fit=crop&s=1822bfd69c4021973a3d926e9294b70f 2x" alt="Looking down on central park and the surrounding builds from the Rockefellar Center" />
                  </div>
                </div>
                <div className="picture-item__details">
                  <figcaption className="picture-item__title"><a href="https://unsplash.com/photos/utwYoEu9SU8" target="_blank" rel="noopener">Central Park</a></figcaption>
                  <p className="picture-item__tags hidden@xs">nature, city</p>
                </div>
              </div>
            </figure>
            <div className="col-1@sm col-1@xs my-sizer-element" />
          </div>
        </div>




    </div>
  )
}

export default Gallery;