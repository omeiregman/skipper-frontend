import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, text } from '@storybook/addon-knobs'

import { Button } from './Button'

const styleTypes = {
  Primary: 'primary',
  Secondary: 'secondary',
  Tertiary: 'tertiary',
}

storiesOf('Button', module).add('Button', () => (
  <div>
    <Button
      styleType={select('Style', styleTypes, 'primary')}
      onClick={() => {}}>
      {text('Text', 'Button')}
    </Button>
  </div>
))
