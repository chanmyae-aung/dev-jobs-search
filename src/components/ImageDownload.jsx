import React from 'react';

class ImageDownload extends React.Component {
  handleDownload = () => {
    const imageUrl = 'http://159.223.80.82/api/v1/cv/ebc95b43-b0c5-4dc8-9dde-73748e06b7ce.jpg';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', imageUrl, true);
    xhr.responseType = 'blob';
    xhr.onload = () => {
      if (xhr.status === 200) {
        const blob = new Blob([xhr.response]);
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Cham_Myae.jpg'; // Change the filename here if needed
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      }
    };
    xhr.send();
  };

  render() {
    return (
      <div>
        <img
          src="http://159.223.80.82/api/v1/cv/ebc95b43-b0c5-4dc8-9dde-73748e06b7ce.jpg"
          alt="Cham Myae"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        <button onClick={this.handleDownload}>Download Image</button>
      </div>
    );
  }
}

export default ImageDownload;