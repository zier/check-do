import React from 'react';
import SearchForm from '../Components/SearchForm/SearchForm.js';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Col, Row } from 'antd';


export const tagNames = {
  tagNames: ['work', 'family', 'life', 'hobby']
};

export const emptyTagNames = {
  tagNames: []
}

export const actions = {
  onChange: action('onChange')
};

storiesOf('SearchForm', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}><Row gutter={16}><Col span={16}>{story()}</Col></Row></div>)
  .add('with suggestion data', () => <SearchForm {...tagNames} {...actions} />)
  .add('with no data', () => <SearchForm {...emptyTagNames} {...actions} />)
