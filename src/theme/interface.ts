export interface ThemeProps {
  theme: Theme
}

export interface Theme {
  colors: any
  spacings: any
  fonts: any
  getColor: any
  getFont: any
  getSpacing: any
  getProp: any
}
