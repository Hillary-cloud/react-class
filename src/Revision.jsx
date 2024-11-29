import React, { useState } from "react";
import PropType from "prop-types";

const Revision = ({ country, language, capital }) => {


  const handleWelcomeMsg = (name) => {
    alert(`You are welcome ${name}`);
  };

  return (
    <div>
      {/* Render country information */}
      {language === "English" ? (
        <div className="country-card">
          <h2>{country}</h2>
          <h3>{language}</h3>
          <p>{capital}</p>
          <button onClick={() => handleWelcomeMsg(country)}>Welcome</button>
        </div>
      ) : (
        <p>{`${country} does not speak English`}</p>
      )}

  
    </div>
  );
};

Revision.propTypes = {
  country: PropType.string,
  language: PropType.string,
  capital: PropType.string,
};

export default Revision;
