import React from 'react';
import Webcam from 'react-webcam';
//375, 675
const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: 'environment',
};
const App = () => {
  const cameraRef = React.useRef(null) as any;
  const capture = React.useCallback(() => {
    const imageSrc = cameraRef.current.getScreenshot();
    console.log(imageSrc);
  }, [cameraRef]);

  return (
    <div className="App">
      <Webcam
        audio={false}
        height={videoConstraints.height}
        ref={cameraRef}
        screenshotFormat="image/jpeg"
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
      />
      <button onClick={capture}>Capture photo</button>
    </div>
  );
};
export default App;
