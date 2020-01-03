/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { theme, ThemeProps } from 'theme'

interface TextProps {
  children: React.ReactNode
  color?: TextColor
  size?: string
}

interface TextColor {
  type: string
  shade: number
}

export const Text = (props: TextProps) => {
  const { children } = props
  const classes = styles({ theme, ...props })
  return <span css={classes.container}>{children}</span>
}

const styles = (props: ThemeProps & TextProps) => ({
  container: css`
    font-family: ${theme.getFont('primary')(props)};
    font-size: ${props.size};
    color: ${props.color
      ? theme.getColor(props.color.type, props.color.shade)(props)
      : ''};
  `,
})
