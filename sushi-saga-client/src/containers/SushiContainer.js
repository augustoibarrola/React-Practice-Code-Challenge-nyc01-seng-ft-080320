import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton';
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  
  const renderSushi = () => {
    return props.list.map(sushi => <Sushi key={sushi.id} sushi={sushi} ateSushi={props.ateSushi} eatenSushi={props.eatenSushi}/>)
  } 
  
  
  return (
    <Fragment>
      <div className="belt">
        {renderSushi()}
        <MoreButton moreSushi={props.moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer