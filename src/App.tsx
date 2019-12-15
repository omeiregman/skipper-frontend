import React from 'react'
import { css, injectGlobal } from 'emotion'
import { withTheme } from 'emotion-theming'

injectGlobal`
  @font-face {
    font-family: 'SourceSansPro';
    src: url(${require('./resources/fonts/SourceSansPro-Regular.ttf')});
  }

  body {
    margin: 0;
  }
`

const AppComponent: React.FC = props => {
  return <div className={classes().app}></div>
}

const classes = () => ({
  app: css`
    text-align: center;
  `,
})

export const App = withTheme(AppComponent)
