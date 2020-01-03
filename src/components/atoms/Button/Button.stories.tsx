import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, text } from '@storybook/addon-knobs'

import { Button } from './Button'

const buttonTypes = {
  Primary: 'primary',
  Secondary: 'secondary',
  Tertiary: 'tertiary',
}

storiesOf('Atoms/Button', module).add('Button', () => (
  <div>
    <Button
      buttonType={select('Style', buttonTypes, 'primary')}
      onClick={() => {}}>
      {text('Text', 'Button')}
    </Button>
  </div>
))
