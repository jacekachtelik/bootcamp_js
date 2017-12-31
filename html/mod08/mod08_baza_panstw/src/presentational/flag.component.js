import React from 'react';
import '../presentational/country.css';

const CountryFlag = (props) => (
    <div className="country-logo-wrapper">
        <img className="country-logo" src={props.country.imageUrl} alt="country photo" />
        <p className="country-logo-name">{props.country.name}</p>
    </div>
);

export default CountryFlag;