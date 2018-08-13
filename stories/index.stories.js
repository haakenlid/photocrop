import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Button, Welcome } from '@storybook/react/demo'
import CropBox from '../src'
import newton from './blake_newton.jpg'

storiesOf('CropBox', module)
  .add('no props', () => <CropBox />)
  .add('with src', () => <CropBox src={newton} />)
  .add('broken src', () => <CropBox src={'foo.jpg'} />)
