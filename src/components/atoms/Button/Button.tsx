/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { theme, ThemeProps } from 'theme'

interface ButtonProps {
  children: React.ReactNode
  onClick?: (message?: string) => void
  styleType: string
}

export const Button = (props: ButtonProps) => {
  const { children, styleType } = props
  const classes = styles({ theme, ...props })
  return <button css={classes.button}>{children}</button>
}

const styles = (props: ThemeProps) => ({
  button: css`
    border: none;
    background-color: ${theme.getColor('blue', 500)(props)};
    color: ${theme.getColor('light', 500)(props)};
    padding: 10px 20px;
    cursor: pointer;
  `,
})
