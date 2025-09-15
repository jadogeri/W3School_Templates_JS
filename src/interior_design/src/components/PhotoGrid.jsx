import Photo from './Photo'
import { onClick } from '../utils/onClick'

const PhotoGrid = () => {
  return (
    <div className="w3-row-padding">
      <div className="w3-half">
        <Photo
          src="https://www.w3schools.com/w3images/kitchenconcrete.jpg"
          onClick={(e)=>{onClick(e.target)}}
          alt="Concrete meets bricks"
        />
        <Photo
          src="https://www.w3schools.com/w3images/livingroom.jpg"
          onClick={(e)=>{onClick(e.target)}}
          alt="Light, white and tight scandinavian design"
        />
        <Photo
          src="https://www.w3schools.com/w3images/diningroom.jpg"
          onClick={(e)=>{onClick(e.target)}}
          alt="White walls with designer chairs"
        />
      </div>
      <div className="w3-half">
        <Photo
          src="https://www.w3schools.com/w3images/atrium.jpg"
          onClick={(e)=>{onClick(e.target)}}
          alt="Windows for the atrium"
        />
        <Photo
          src="https://www.w3schools.com/w3images/bedroom.jpg"
          onClick={(e)=>{onClick(e.target)}}
          alt="Bedroom and office in one space"
        />
        <Photo
          src="https://www.w3schools.com/w3images/livingroom2.jpg"
          onClick={(e)=>{onClick(e.target)}}
          alt="Scandinavian design"
        />
      </div>
    </div>
  )
}

export default PhotoGrid