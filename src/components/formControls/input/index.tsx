/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { StyledInput } from './style'

export interface Props {
  id?: string
  defaultValue?: string
  disabled?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

export default class Input extends React.PureComponent<Props, {}> {
  render () {
    const { id, onChange, defaultValue, disabled, placeholder } = this.props

    return (
      <StyledInput
        id={id}
        onChange={onChange}
        disabled={disabled}
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
    )
  }
}
