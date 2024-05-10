// PlanetsSlider.js
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <div className="app-container" data-testid="planets">
      <h1 className="heading">PLANETS</h1>
      <Slider>
        {planetsList.map(eachItem => (
          <PlanetItem key={eachItem.id} planetDetails={eachItem} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
