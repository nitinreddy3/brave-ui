/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

import StyledCard from './style'

export interface CardProps {
  id?: string
  children?: React.ReactNode
}

class Card extends React.PureComponent<CardProps, {}> {
  render () {
    const { id, children } = this.props
    return (
      <StyledCard id={id}>{children}</StyledCard>
    )
  }
}

export default Card
