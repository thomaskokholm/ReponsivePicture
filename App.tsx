import * as React from 'react';
import './style.css';
import Picture from './components/picture';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Picture
        src="https://via.placeholder.com"
        title="Example placeholder image"
        imageSizes={{
          xs: { w: 320, h: 400 },
          sm: { w: 540, h: 300 },
          md: { w: 768, h: 700 },
          lg: { w: 250, h: 250 },
          xl: { w: 900, h: 500 },
        }}
      />
    </div>
  );
}
