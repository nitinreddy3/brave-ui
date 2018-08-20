/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'

export const StyledInput = styled.input`
  min-height: auto;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  border: 1px solid #DFDFE8;
  border-radius: 3px;
  padding: 12px 10px;
  color: #686978;
  outline: unset;

  &:focus {
    border-color: #A1A8F2;
  }

  &::placeholder {
    color: #B8B9C4;
    font-weight: normal;
    text-align: left;
    letter-spacing: 0;
  }

  &:disabled {
    opacity: 0.3;
  }
` as any
