import React from 'react';

function Audio({ url }) {
  const audioStyle = {
    width: '100%',
    position: 'fixed',
    // height: '300px',
    bottom: 0,
    border: 'none',
    borderRadius: '0px',
  };

  return (
    <>
      {url && (
        <audio controls style={audioStyle}>
          <source src={url} type='audio/mp4'></source>
        </audio>
      )}
    </>
  );
}

export default Audio;
