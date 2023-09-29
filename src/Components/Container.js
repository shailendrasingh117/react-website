import React from 'react'

function Container() {
  return (
    <div>
    <section>
    <div className="hero swiper mySwiper">
        <div className="swiper-wrapper">
            <div className="swiper-slide">
                <div className="container row">
                    <h1>Exquisite Jewelry Creations</h1>
                    <div className="row">
                        <div>
                            <h3> Discover Our Latest Collections</h3>
                            <p>Elegance, Craftsmanship, Beauty</p>
                            <a href="#" className="btn">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
    
            
            <div className="swiper-slide">
                <div className="container row">
                    <h1>Elevate Your Style with Jewelry.</h1>
                    <div className="row">
                        <div>
                            <h3>Handcrafted with Precision</h3>
                            <p>From Diamonds to Gemstones</p>
                            <a href="#" className="btn">Explore Collections</a>
                        </div>
                    </div>
                </div>
            </div>
    
            
            <div className="swiper-slide">
                <div className="container row">
                    <h1>Celebrate Moments with Jewelry.</h1>
                    <div className="row">
                        <div>
                            <h3>Customize Your Own Piece</h3>.
                            <p>Make Memories Last Forever</p>
                            <a href="#" className="btn">Create Your Design</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    

    <div className="hero-arrow row">
        <div className="swiper-button-prev">
             Next
        </div>
        <div className="swiper-button-next">
            Back 
        </div>
      </div>
  </div>
 </section>
    </div>
  )
}

export default Container
