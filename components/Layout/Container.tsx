import React from 'react'
import Head from 'next/head'
import useTranslation from '../../hooks/useTranslation'
import Navigation from '../Navigation'
import { css } from '@emotion/core'

import { Layout } from 'antd';

interface Props {
  titleKey: string
}

const layoutCls = css`
 background: pink;
 color: #fff;
 font-family: Lato;
`;


const Container: React.FC<Props> = ({ titleKey, children }) => {
  const { t } = useTranslation()
  return (
    <>
      <Layout css={layoutCls} className="layout">
        <Head>
          <title>{t(titleKey)}</title>
        </Head>
        <Navigation />
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
