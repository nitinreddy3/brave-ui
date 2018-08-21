/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { BoxedContentProps } from './index'
import { setTheme } from '../../helpers'

const StyledBoxedContent = styled.div`
  max-width: ${(p: BoxedContentProps) => setTheme(p.customStyle, 'maxWidth')};
  margin: ${(p: BoxedContentProps) => setTheme(p.customStyle, 'margin')};
  font-family: ${(p: BoxedContentProps) => setTheme(p.customStyle, 'fontFamily')};
  color: ${(p: BoxedContentProps) => setTheme(p.customStyle, 'color')};
  font-size: inherit;
  box-sizing: border-box;
` as any

export default StyledBoxedContent
