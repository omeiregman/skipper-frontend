/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/core'
import { theme, ThemeProps } from 'theme'
import { iconList } from './IconList'

interface IconProps {
  icon: string
  width?: number
  height?: number
  color?: IconColor
  className?: string
  onClick?: () => void
}

interface IconColor {
  type?: string
  shade?: number
}

export const Icon = (props: IconProps) => {
  const { icon, className, onClick } = props
  const classes = styles({ ...props, theme })
  const IconContainer = iconList[icon]
  return (
    <span css={classes.wrapper} className={className} onClick={onClick}>
      <IconContainer />
    </span>
  )
}

const styles = (props: IconProps & ThemeProps) => ({
  wrapper: css`
    vertical-align: middle;
    > svg {
      width: ${props.width ? `${props.width}px` : 'auto'};
      height: ${props.height ? `${props.height}px` : 'auto'};
    }
  `,
})
