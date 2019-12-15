import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types';


export const {{properCase componentName}}Component = (props) => (
  <div {...props}>
    {{properCase componentName}} component located under src/components/{{dashCase componentType}}s/{{properCase componentName}} directory
  </div>
)


{{properCase componentName}}Component.propTypes = {
  // props types goes here
}

export const {{properCase componentName}} = styled({{properCase componentName}}Component)`
  // css goes here!
`
