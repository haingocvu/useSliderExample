import * as React from 'react';
import './styles/global.css';

import Slider from './components/Slider';

const sliders = [
  'https://images.unsplash.com/photo-1675679620439-bacfc67a669a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1677247191557-4abd28b7c387?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1677309017319-8e4aa666f6f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
];

const App: React.FC<{ id?: any }> = () => {
  return (
    <React.Fragment>
      <Slider mode="I" slides={sliders} />
    </React.Fragment>
  );
};

export default App;
