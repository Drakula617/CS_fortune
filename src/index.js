import React from 'react';
import ReactDOM from 'react-dom/client';
import Page from './components/page'

// const express = require('express');
// const app = express();
// // const path = require('path');
// const cors = require("cors");
// app.use(
//     cors({
//         origin:"*",
//         methods:['POST', 'GET', 'PUT', 'DELETE']
//     })
// )
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Page></Page>
);

