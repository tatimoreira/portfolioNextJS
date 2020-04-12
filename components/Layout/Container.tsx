import React from 'react'
import Head from 'next/head'
import useTranslation from '../../hooks/useTranslation'
import Navigation from '../Navigation'
//import { css } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import ButtonPrimary from '../../components/Button'

import { Layout } from 'antd';

interface Props {
  titleKey: string
}




const Container: React.FC<Props> = ({ titleKey, children }) => {
  const { t } = useTranslation()
  const theme = useTheme();
  console.log(theme)

  /*const layoutCls = css`
    background: ${theme.primary};
    color: #fff;
    font-family: Lato;
    `;*/
  debugger

  return (
    <>
      <Layout className="layout">
        <Head>
          <title>{t(titleKey)}</title>
        </Head>
        <Navigation />
        <ButtonPrimary />
        <style jsx global>{`
        * {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
            Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
      `}</style>
        <>{children}</>
      </Layout>
    </>
  )
}

export default Container
