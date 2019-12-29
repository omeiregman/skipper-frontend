import * as utils from './utils'
import { Theme } from './interface'

const blue = {
  500: '#109CF1',
  400: '#334D6E',
}

const yellow = {
  500: '#61dafb',
}

const red = {
  500: '#F7685B',
}

const green = {
  500: '#2ED47A',
}

const purple = {
  500: '#885AF8',
}

const grey = {
  500: '#707683',
  400: '#90A0B7',
  300: '#C2CFE0',
}

const light = {
  500: '#FFFFFF',
}

const dark = {
  500: '#000000',
  400: '#323C47',
}

const colors = {
  blue,
  yellow,
  red,
  green,
  purple,
  grey,
  dark,
  light,
}

const spacings = {}

const fonts = {
  primary: 'SourceSansPro',
}

export const theme: Theme = {
  colors,
  spacings,
  fonts,

  getColor: utils.color,
  getFont: utils.font,
  getSpacing: utils.spacing,
  getProp: utils.prop,
}
