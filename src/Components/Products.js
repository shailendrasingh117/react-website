import React from 'react';
import 'swiper/swiper-bundle.css';

function Products() {
  return (
    <div>
    <section className="project container" id="project">
    <h2>Products</h2>
    <div className="project-filter-slider-row">
      <div className="filter row">
        <div className="filter-btn btn-active" data-cat="all">All</div>
        <div className="filter-btn" data-cat="commercial">Wedding</div>
        <div className="filter-btn" data-cat="residential">Gold Rush</div>
        <div className="filter-btn" data-cat="other">Other</div>
      </div>
      <div className="project-slider swiper mySwiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide column" data-type="commercial">
            <a href="www.examplesite.com" className="p-card">
              <div className="slide-img row"><img src="{neonImage}" alt=""/></div>
              <div className="slide-content">
                <h3>Wild Stone Infra Hotel</h3>
                <p>happy happ iuiffhahdjs</p>
              </div>
            </a>
            <a href="www.examplesite.com" className="p-card">
              <div className="slide-img row"><img src="{image18966326}" alt=""/></div>
              <div className="slide-content">
                <h3>Wild</h3>
                <p>happy happ iuiffhahdjsdjjjdsihh zudbfb</p>
              </div>
            </a>
          </div>
          <div className="swiper-slide column" data-type="residential">
            <a href="www.examplesite.com" className="p-card">
              <div className="slide-img row"><img src="{neonImage}" alt=""/></div>
              <div className="slide-content">
                <h3>Wild Stone Infra Hotel</h3>
                <p>happy happ iuiffhahdjs</p>
              </div>
            </a>
            <a href="www.examplesite.com" className="p-card">
              <div className="slide-img row"><img src="{image18966326}" alt=""/></div>
              <div className="slide-content">
                <h3>Wild</h3>
                <p>happy happ iuiffhahdjsdjjjdsihh zudbfb</p>
              </div>
            </a>
          </div>
          <div className="swiper-slide column" data-type="commercial">
            <a href="www.examplesite.com" className="p-card">
              <div className="slide-img row"><img src="{neonImage}" alt=""/></div>
              <div className="slide-content">
                <h3>Wild Stone Infra Hotel</h3>
                <p>happy happ iuiffhahdjs</p>
              </div>
            </a>
            <a href="www.examplesite.com" className="p-card">
              <div className="slide-img row"><img src="{image18966326}" alt=""/></div>
              <div className="slide-content">
                <h3>Wild</h3>
                <p>happy happ iuiffhahdjsdjjjdsihh zudbfb</p>
              </div>
            </a>
          </div>
          <div className="swiper-slide column" data-type="residential">
            <a href="www.examplesite.com" className="p-card">
              <div className="slide-img row"><img src="{neonImage}" alt=""/></div>
              <div className="slide-content">
                <h3>Wild Stone Infra Hotel</h3>
                <p>happy happ iuiffhahdjs</p>
              </div>
            </a>
            <a href="www.examplesite.com" className="p-card">
              <div className="slide-img row"><img src="{image18966326}" alt=""/></div>
              <div className="slide-content">
                <h3>Wild</h3>
                <p>happy happ iuiffhahdjsdjjjdsihh zudbfb</p>
              </div>
            </a>
          </div>
          <div className="swiper-slide column" data-type="commercial">
            <a href="www.examplesite.com" className="p-card">
              <div className="slide-img row"><img src="{neonImage}" alt=""/></div>
              <div className="slide-content">
                <h3>Wild Stone Infra Hotel</h3>
                <p>happy happ iuiffhahdjs</p>
              </div>
            </a>
            <a href="#" className="p-card">
            <div className="slide-img row">
            <img src='{image18966326}' alt="" />
          </div>
              <div className="slide-content">
                <h3>Wild</h3>
                <p>happy happ iuiffhahdjsdjjjdsihh zudbfb</p>
              </div>
            </a>
          </div>
        </div>
        <div className="project-arrow">
          <div className="swiper-button-prev">Back</div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-next">Next</div>
        </div>
      </div>
    </div>
  </section>    
  </div>
  )
}

export default Products;
