import React, { Component } from 'react'
import { Container } from '@material-ui/core'
import { Carousel } from 'react-responsive-carousel'

class DemoCarousel extends Component {
  render() {
    return (
      <Container maxWidth="xs">
        <Carousel
          stopOnHover={true}
          swipeable={true}
          transitionTime={350}
          showStatus={true}
          showIndicators={true}
          deslizable={true}
          dynamicHeight={true}
          showThumbs={true}
          autoPlay={true}
          emulateTouch={true}
          infiniteLoop={true}
          useKeyboardArrows={true}
          interval={5000}
        >
          <div>
            <img src="https://source.unsplash.com/random" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="https://source.unsplash.com/random" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="https://source.unsplash.com/random" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </Container>
    )
  }
}

export default DemoCarousel
