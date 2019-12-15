import React from 'react'
import logo from 'resources/images/logo.svg'
import { css, keyframes, injectGlobal } from 'emotion'
import { withTheme } from 'emotion-theming'
import styled from '@emotion/styled'
import { font, color } from 'theme'
import { ButtonContainer } from 'components'

injectGlobal`
  @font-face {
    font-family: 'SourceSansPro';
    src: url(${require('./resources/fonts/SourceSansPro-Regular.ttf')});
  }

  body {
    margin: 0;
  }
`

const HeaderText = styled.p`
  color: lightgray;
`

const AppHeader = styled.header`
  background-color: ${color('primary')};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  font-family: sans-serif;
  font-family: ${font('primary')};
  ${HeaderText} {
    text-decoration: underline;
  }
`

const AppComponent: React.FC = props => {
  return (
    <div className={classes().app}>
      <AppHeader>
        <img src={logo} className={classes().appLogo} alt="logo" />
        <HeaderText>
          Edit <code>src/App.tsx</code> and save to reload.
        </HeaderText>
        <ButtonContainer onClick={(message: any) => console.log(message)}>
          Push me!
        </ButtonContainer>
        <a
          className={classes().appLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </AppHeader>
    </div>
  )
}

const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const classes = () => ({
  app: css`
    text-align: center;
  `,
  appLogo: css`
    animation: ${logoSpin} infinite 20s linear;
    height: 40vmin;
    pointer-events: none;
  `,
  appLink: css`
    color: #61dafb;
  `,
})

export const App = withTheme(AppComponent)
