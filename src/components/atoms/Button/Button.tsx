/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { theme, ThemeProps } from 'theme'
import { colorByProp } from 'utils'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  buttonType: string
}

export const Button = (props: ButtonProps) => {
  const { children, buttonType } = props
  const classes = styles({ theme, ...props })
  return <button css={classes.button}>{children}</button>
}

const styles = (props: ThemeProps & ButtonProps) => ({
  button: css`
    height: 40px;
    width: 180px;
    font-size: 16px;
    border: none;
    border-radius: 7px;
    padding: 10px 25px;
    cursor: pointer;
    border: ${props.buttonType == 'secondary'
      ? `1px solid ${theme.getColor('blue', 500)(props)}`
      : ''};
    background-color: ${colorByProp(
      'buttonType',
      {
        primary: theme.getColor('blue', 500)(props),
        secondary: theme.getColor('light', 500)(props),
        tertiary: theme.getColor('light', 500)(props),
      },
      theme.getColor('blue', 500)
    )(props)};
    color: ${colorByProp(
      'buttonType',
      {
        primary: theme.getColor('light', 500)(props),
        secondary: theme.getColor('blue', 500)(props),
        tertiary: theme.getColor('blue', 500)(props),
      },
      theme.getColor('blue', 500)
    )(props)};
    &:hover {
      background-color: ${colorByProp(
        'buttonType',
        {
          primary: theme.getColor('blue', 400)(props),
          secondary: theme.getColor('light', 500)(props),
          tertiary: theme.getColor('light', 500)(props),
        },
        theme.getColor('blue', 500)
      )(props)};
      color: ${colorByProp(
        'buttonType',
        {
          primary: theme.getColor('light', 500)(props),
          secondary: theme.getColor('blue', 400)(props),
          tertiary: theme.getColor('blue', 400)(props),
        },
        theme.getColor('blue', 500)
      )(props)};
    }
  `,
})
