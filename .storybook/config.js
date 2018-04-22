import React from 'react';
import { configure } from '@storybook/react';

import 'antd/dist/antd.css';
import '../src/App.css';

const req = require.context('../src/stories', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
