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

const Box = props => (
  <CropBox
    src={selectImage()}
    value={object('value', cropBox)}
    onChange={action('onChange')}
    onChanging={action('onChanging')}
    {...props}
  />
)

class CallbackForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: cropBox }
    this.changeHandler = value => this.setState({ value })
  }

  render() {
    return (
      <form
        className="CallbackForm"
        style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
      >
        <Box value={this.state.value} onChange={this.changeHandler} />
        <pre>{JSON.stringify(this.state.value, null, 2)}</pre>
      </form>
    )
  }
}

storiesOf('CropBox', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <div style={{ height: '100vh' }}>{story()}</div>)
  .add('crop', () => <Box />)
  .add('previews', () => <Box previews={object('previews', [0.5, 1, 2])} />)
  .add('controlled component', () => <CallbackForm />)
