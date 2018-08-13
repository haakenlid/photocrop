import React from 'react'

import { storiesOf } from '@storybook/react'
import { select, object, withKnobs } from '@storybook/addon-knobs'

import CropBox from '../src'
import newton from './blake_newton.jpg'
import dragon from './dragon.jpg'
import nebuchadnezzar from './nebuchadnezzar.jpg'
import urizen from './urizen.jpg'

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

storiesOf('CropBox', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <div style={{ height: '100vh' }}>{story()}</div>)
  .add('crop', () => <CropBox src={selectImage()} />)
  .add('previews', () => (
    <CropBox src={selectImage()} previews={object('Previews', [0.5, 1, 2])} />
  ))
