import React from 'react';

function PersonalOutput(props) {
  const { personalInfo } = props;

  return (
    <>
      <header>
        <div className='heading'>
          <h1>{personalInfo.name}</h1>
        </div>
        <div className='details-group'>
          <div className='contact-details'>
            <i className='fa-solid fa-phone'></i>
            <span className='details-text'>{personalInfo.phone}</span>
          </div>
          <div className='contact-details'>
            <i className='fa-solid fa-square-envelope'></i>
            <span className='details-text'>{personalInfo.email}</span>
          </div>
        </div>
      </header>
      <span className='details-text summary'>{personalInfo.summary}</span>
    </>
  );
}

export default PersonalOutput;
