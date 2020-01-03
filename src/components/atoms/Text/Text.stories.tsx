import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, number } from '@storybook/addon-knobs'
import { Text } from './Text'

storiesOf('Atoms/Text', module).add('default', () => (
  <div>
    <Text
      size={text('size', '12px')}
      color={{
        type: text('color-type', 'primary'),
        shade: number('color-shade', 500),
      }}>
      {text('Text', 'Some text here')}
    </Text>
  </div>
))
