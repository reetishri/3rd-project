import React from 'react'

export default function Carousel() {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
      <div className="carousel-inner" id='carousel'>
        <div className="carousel-caption" style={ { zIndex: "10" }}>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
          </form>
        </div>
        <div className="carousel-item active">
          <img src="https://www.tasteofhome.com/wp-content/uploads/2017/09/exps28800_UG143377D12_18_1b_RMS.jpg?w=1200" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://th.bing.com/th/id/OIP.EDKTGg6cp21xWR1kgkAAvwAAAA?rs=1&pid=ImgDetMain" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://th.bing.com/th/id/OIP.GK9Ktn-gdUpsstMfUiHC7AHaE5?rs=1&pid=ImgDetMain" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}
