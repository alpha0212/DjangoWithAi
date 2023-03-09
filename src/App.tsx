import React, { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import styled from '@emotion/styled';
import axios from 'axios';
//375, 675
const videoConstraints = {
  width: 375,
  height: 600,
  facingMode: 'environment',
};
const App = () => {
  const [imgSrc, setImgSrc] = useState('');
  const [send, setSend] = useState(false);
  const cameraRef = useRef<Webcam>(null);
  const capture = React.useCallback(() => {
    const imageSrc = cameraRef.current?.getScreenshot();
    if (imageSrc) {
      sendData(imageSrc);
      setImgSrc(imageSrc);
    }
  }, [cameraRef]);
  const sendData = (c: any) => {
    console.log(c);
    const headers = {
      accept: 'application/json',
    };

    const fd = new FormData();
    fd.append('image', c);

    axios
      .post('http://127.0.0.1:8000/api/digits/', fd, { headers: headers })
      .then((res) => {
        console.log(res.data);
        setSend(true);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      {send ? (
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
