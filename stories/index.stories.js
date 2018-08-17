import React from 'react'

import { storiesOf } from '@storybook/react'
import { number, select, object, withKnobs } from '@storybook/addon-knobs'
import { decorate, action, configureActions } from '@storybook/addon-actions'

import CropBox from '../src'
import newton from './blake_newton.jpg'
import dragon from './dragon.jpg'
import nebuchadnezzar from './nebuchadnezzar.jpg'
import urizen from './urizen.jpg'

configureActions({
  depth: 100,
  limit: 10,
  clearOnStoryChange: true,
})

const selectImage = () =>
  select(
    'Image',
    {
      newton,
      dragon,
      nebuchadnezzar,
      urizen,
      'no image': '',
      'not found': '404.jpg',
    },
    newton,
  ) || undefined

const cropBox = { x: 0.5, y: 0.5, top: 0.1, bottom: 0.9, left: 0.1, right: 0.9 }

storiesOf('CropBox', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <div style={{ height: '100vh' }}>{story()}</div>)
  .add('crop', () => (
    <CropBox
      src={selectImage()}
      value={object('value', cropBox)}
      onChange={action('onChange')}
      onChanging={action('onChanging')}
    />
  ))
  .add('previews', () => (
    <CropBox
      src={selectImage()}
      previews={object('previews', [0.5, 1, 2])}
      value={object('value', cropBox)}
      onChange={action('onChange')}
      onChanging={action('onChanging')}
    />
  ))
