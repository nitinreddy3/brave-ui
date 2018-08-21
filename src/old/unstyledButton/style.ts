// /* This Source Code Form is subject to the terms of the Mozilla Public
//  * License. v. 2.0. If a copy of the MPL was not distributed with this file.
//  * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { UnstyledButtonProps } from './index'
import { setTheme } from '../../helpers'

const StyledUnstyledButton = styled.button`
  font-size: ${(p: UnstyledButtonProps) => setTheme(p.customStyle, 'fontSize') || 'inherit'};
  color: ${(p: UnstyledButtonProps) => setTheme(p.customStyle, 'color') || 'inherit'};
  user-select: ${(p: UnstyledButtonProps) => setTheme(p.customStyle, 'userSelect')};
  text-decoration: ${(p: UnstyledButtonProps) => setTheme(p.customStyle, 'textDecoration')};
  padding: ${(p: UnstyledButtonProps) => setTheme(p.customStyle, 'padding') || '0'};
  margin: 0;
  font-family: inherit;
  box-sizing: border-box;
  display: block;
  line-height: 1;
  background: none;
  border: none;
  cursor: pointer;
  outline: inherit;

  &:hover {
    color: ${(p: UnstyledButtonProps) => setTheme(p.customStyle, 'hoverColor')};
  }
` as any

export default StyledUnstyledButton
