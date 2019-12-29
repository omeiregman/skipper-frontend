import { get } from 'lodash'

export const colorByProp = (
  prop: string,
  colorsConfig: { [key: string]: any },
  defaultValue: object
) => (props: any) => get(colorsConfig, props[prop], defaultValue)
