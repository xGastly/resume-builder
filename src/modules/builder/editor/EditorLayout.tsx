import React, { useState } from 'react'

import Maybe from 'src/helpers/common/Maybe'
import { OutlinedButton } from 'src/helpers/common/atoms/Buttons'
import ErrorBoundary from 'src/helpers/common/components/ErrorBoundary'
import { headers } from 'src/helpers/constants/editor-data'
import { useAuthContext } from 'src/helpers/context/AuthContext'
import checkLogin from 'src/helpers/utils/checkLogin'
import { resetResumeStore } from 'src/stores/useResumeStore'
import DataHeaders from './components/EditHeaders'
import EditSection from './components/EditSection'

const EditorLayout = () => {
  const [link, setLink] = useState('')
  const section = headers[link]
  const { user, setUser } = useAuthContext()
  const isLoggedIn = checkLogin(user)

  const linkClickHandler = (link: string) => {
    setLink(link)
  }

  const displayElement = link ? (
    <EditSection section={section} onLinkClick={linkClickHandler} />
  ) : (
    <DataHeaders onLinkClick={linkClickHandler} />
  )

  return (
    <ErrorBoundary>
      <div className="bg-resume-50 h-full text-resume-800 p-6 overflow-auto relative no-scrollbar shadow-level-4dp">
        {displayElement}
        <Maybe test={!isLoggedIn}>
          <div className="mt-8">
            <OutlinedButton onClick={resetResumeStore}>Reset all edits</OutlinedButton>
          </div>
        </Maybe>
      </div>
    </ErrorBoundary>
  )
}

export default EditorLayout
