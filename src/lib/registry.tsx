'use client'

import isPropValid from '@emotion/is-prop-valid'
import { useServerInsertedHTML } from 'next/navigation'
import { ReactNode, useState } from 'react'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

import GlobalStyle from '@/styles/globals'

export function StyledComponentsRegistry({
  children,
}: {
  children: ReactNode
}) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  })

  if (typeof window !== 'undefined') {
    return <>{children}</>
  }

  return (
    <StyleSheetManager
      sheet={styledComponentsStyleSheet.instance}
      shouldForwardProp={isPropValid}
    >
      {children as ReactNode}
      <GlobalStyle />
    </StyleSheetManager>
  )
}
