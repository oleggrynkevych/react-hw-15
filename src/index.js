import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Post from './Post.jsx';
import {ANAKIN_IMAGE, RAY_IMAGE} from './images.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Post author={{
            name: "Anakin Skywalker",
            photo: ANAKIN_IMAGE,
            nickname: "@dart_vader"
         }}
         content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
         image={RAY_IMAGE}
         date={"26 февр."}
    />
  </React.StrictMode>
);
