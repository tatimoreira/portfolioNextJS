import React from 'react'
import useTranslation from '../hooks/useTranslation'

const CoverLetter: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div>
      <h1>{t('greeting')}</h1>
      <p>{t('coverLetter')}</p>
    </div>
  )
}

export default CoverLetter
