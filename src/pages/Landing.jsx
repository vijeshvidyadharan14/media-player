//rafce
import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from  '../assets/music.jpeg'
import feature1 from  '../assets/music1.jpeg'
import feature2 from  '../assets/music2.jpeg'
import feature3 from  '../assets/music3.gif'
import { Card } from 'react-bootstrap'

const Landing = () => {
  return (
    <div style={{paddingTop:'100px'}} className='container'>
      {/* landing part */}
      <div className="row align-items-center">
        <div className="col-lg-5">
          <h3>Welcome to <span className="text-warning">Media Player</span></h3>
          <p style={{textAlign:'justify'}}>Media Player App will allow user to add or remove their uploaded videos from youTube and also allow them to arrange it in different categories by drag and drop. User can also have the provision to manage their watch history as well. What are you waiting for, let starts exploring our site!!!</p>
          <Link to={'/home'} className='btn btn-info'>Get  Started</Link>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <img src={landingImg} alt="Landing Image" className="img-fluid ms-5 w-75" />
        </div>
      </div>
      {/* features part */}
      <div className="my-5">
        <h3 className="text-center">Features</h3>
        <div className="row mt-5">

        <div className="col-lg-4">
            <Card className='p-2' style={{ width: '25rem', height: '34rem' }}>
              <Card.Img variant="top" height={"400px"} src={feature3} />
              <Card.Body>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>
                Users can upload, view and remove the videos.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-4">
            <Card className='p-2' style={{ width: '25rem', height: '34rem' }}>
              <Card.Img variant="top" height={"400px"} src={feature2} />
              <Card.Body>
                <Card.Title>Categorise Videos</Card.Title>
                <Card.Text>
                  Users can categorise the videos by drag and drop feature.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          
          <div className="col-lg-4">
            <Card className='p-2' style={{ width: '25rem', height: '34rem' }}>
              <Card.Img variant="top" height={"400px"} src={feature1} />
              <Card.Body>
                <Card.Title>Managing History</Card.Title>
                <Card.Text>
                  Users can manage the watch history of all videos.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      {/* last */}
      <div className="my-5 row align-items-center border rounded p-5">
        <div className="col-lg-5">
          <h3 className="text-warning">Simple, Fast and Powerful</h3>
          <p style={{textAlign:'justify'}}><span className='fs-5 fw-bolder'>Play Everything</span>: Maxime quisquam accusamus nam impedit exercitationem neque id magni, consequuntur doloremque quae nostrum architecto delectus expedita quod. Earum?</p>
          <p style={{textAlign:'justify'}}><span className='fs-5 fw-bolder'>Categoriese Videos</span>: Maxime quisquam accusamus nam impedit exercitationem neque id magni, consequuntur doloremque quae nostrum architecto delectus expedita quod. Earum?</p>
          <p style={{textAlign:'justify'}}><span className='fs-5 fw-bolder'>Managing History</span>: Maxime quisquam accusamus nam impedit exercitationem neque id magni, consequuntur doloremque quae nostrum architecto delectus expedita quod. Earum?</p>
        </div>

        <div className="col"></div>

        <div className="col-lg-6">
            <iframe width="100%" height="300px" src="https://www.youtube.com/embed/WWr9086eWtY" title="LEO - Ordinary Person Lyric | Thalapathy Vijay, Anirudh Ravichander, Lokesh Kanagaraj, NikhitaGandhi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Landing