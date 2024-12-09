import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideosAPI, saveVideoAPI, updateCategoryAPI } from '../services/allAPI'

const View = ({addResponseFromHome,deleteResponseFromCategory,setDeleteResponseFromView}) => {
  const [deleteResponseFromVideoCard,setDeleteResponseFromideoCard] = useState("")
  const [allVideos, setAllVideos] = useState([])

  // Fetch all videos when the page loads
  useEffect(() => {
    getAllVideos()
  }, [addResponseFromHome,deleteResponseFromCategory,deleteResponseFromVideoCard])

  const getAllVideos = async () => {
    try {
      const result = await getAllVideosAPI()
      if (result.status > 199 && result.status < 300) {
        setAllVideos(result.data)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const dragOverView = (e) => {
    e.preventDefault()
  }

  const categoryVideoDropOverView = async (e) => {
    console.log("Inside categoryVideoDropOverView");
    const {video,categoryDetails} = JSON.parse(e.dataTransfer.getData("dragData"))
    console.log(video,categoryDetails);
    const updatedCategoryVideoList = categoryDetails?.allVideos?.filter(item=>item.id!=video?.id)
    const updatedCategory = {...categoryDetails,allVideos:updatedCategoryVideoList}
    console.log(updatedCategory);
    //updating the category by delete video from category using API
    const result = await updateCategoryAPI(updatedCategory)
    //use state lifting to communicate data from view to category
    setDeleteResponseFromView(result)
    //use api to upload video
    await saveVideoAPI(video)
    //call getAllVideos function
    getAllVideos()
  }

  return (
    <Row droppable="true" onDragOver={dragOverView} onDrop={e=>categoryVideoDropOverView(e)}>
      {allVideos.length > 0 ? (
        allVideos.map(video => (
          <Col key={video.id} className='mb-2' sm={12} md={6} lg={4}>
            <VideoCard setDeleteResponseFromideoCard={setDeleteResponseFromideoCard} displayData={video} />
          </Col>
        ))
      ) : (
        <div className="fw-bolder text-danger fs-5">No videos are available!!</div>
      )}
    </Row>
  )
}

export default View
