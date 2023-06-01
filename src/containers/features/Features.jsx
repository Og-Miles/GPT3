import React from 'react'
import './features.css'; 
import Feature from '../../components/feature/Feature';

const featuresData = [
  {
    title: 'Improving and distrusts instantly',
    text: 'This cotract is for soomeone who is not responsibile for someone between chris jericho and cole'
  },
  {
    title: 'Becomin the tended active',
    text: 'This cotract is for soomeone who is not responsibile for someone between chris jericho and cole'
  },
  {
    title: 'Message me or i will be nothing',
    text: 'This cotract is for soomeone who is not responsibile for someone between chris jericho and cole'
  },
  {
    title: 'Nigeria is the African Giant',
    text: 'This cotract is for soomeone who is not responsibile for someone between chris jericho and cole'
  },

]
const Features = () => {
  return (
    <div>
      <div className="gpt3__features section__padding" id='features'>
        <div className="gpt3__features-heading">
          <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize it. Step into The Future Today & Make it Happen. 
          </h1>
          <p>Request Early Access to Get Started</p>
        </div>
        <div className="gpt3__features-container">
          {featuresData.map((item, index) => (
            <Feature title ={item.title} text={item.text} key={item.title + index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features
