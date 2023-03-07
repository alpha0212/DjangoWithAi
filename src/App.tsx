import React, { useState } from 'react';
import Webcam from 'react-webcam';
import styled from 'styled-components';
//375, 675
const videoConstraints = {
  width: 375,
  height: 600,
  facingMode: 'environment',
};
const App = () => {
  const [imgSrc, setImgSrc] = useState('');
  const cameraRef = React.useRef(null) as any;
  const capture = React.useCallback(() => {
    const imageSrc = cameraRef.current.getScreenshot();
    setImgSrc(imageSrc);
    console.log(imageSrc);
  }, [cameraRef]);

  return (
    <div className="App">
      {imgSrc ? (
        <CaptureResult src={imgSrc} />
      ) : (
        <Webcam
          audio={false}
          height={videoConstraints.height}
          ref={cameraRef}
          screenshotFormat="image/jpeg"
          width={videoConstraints.width}
          videoConstraints={videoConstraints}
        />
      )}
      <button onClick={capture}>Capture photo</button>
    </div>
  );
};

export const CaptureResult = styled.img`
  width: 100px
  height: 100px;
`;
export default App;
