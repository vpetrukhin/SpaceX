import React from 'react';
import RelaxWrapper from 'react-rellax-wrapper';
import Main from '../main/main';
import './features.css';

const rocketImages = {
  'Falcon 1': 'falcon-1',
  'Falcon 9': 'falcon-9',
  'Falcon Heavy': 'falcon-heavy',
  'Starship': 'starship',
}

const Features = ({
  name, 
  height, 
  diameter, 
  mass, 
  payload_weights: payloadWeights, 
  description
}) => {

  return(
  <>
    <Main />
    <section className="features">
      <h2 className="features-title">
        {name} <br/>Overview
      </h2>
      <div className="overview">
        <table className="table">
          <caption className="table-title">
            Size
          </caption>
          <thead>
            <tr>
              <td className="table-column">HEIGHT</td>
              <td className = "table-column" > {height.meters} / {height.feet}</td>
            </tr>
            <tr>
              <td className="table-column">DIAMETER</td>
              <td className = "table-column" > {diameter.meters}/ {diameter.feet}</td>
            </tr>
            <tr>
              <td className="table-column">MASS</td>
              <td className = "table-column" > {mass.kg}/ {mass.lb}</td>
            </tr>

            {payloadWeights.map((item) => (
              <tr key={item.id}>
                <td className="table-column">PAYLOAD TO {item.id.toUpperCase()}</td>
                <td className="table-column">{item.kg} kg / {item.lb} lb</td>
              </tr>
            ))}
            
          </thead>
        </table>
        <RelaxWrapper speed={14}>
          < img
          src = {`img/${rocketImages[name]}.png`}
          alt = "rocket"
          className = "rocket"
          />
        </RelaxWrapper>
        
        <article>
          <h3 className="features-subtitle">DESCRIPTION</h3>
          <p className="features-text">
            {description}
          </p>
        </article>
		  </div>
	  </section>
  </>
)};

export default Features;