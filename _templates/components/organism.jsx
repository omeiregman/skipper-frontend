import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types';

export const {{properCase componentName}}Component = ({ children, ...props }) => (
  <React.Fragment {...props}>
    {children}
    this component located under src/components/{{properCase componentType}}s/{{properCase componentName}} directory
  </React.Fragment>
)

{{properCase componentName}}Component.propTypes = {
  children: PropTypes.node,
}

export const {{properCase componentName}} = styled({{properCase componentName}}Component)`
    //css goes here
`
