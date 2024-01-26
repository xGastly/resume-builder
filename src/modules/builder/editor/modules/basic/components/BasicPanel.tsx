import Box from '@mui/material/Box'
import React, { Fragment } from 'react'
import About from './About'
import Contacts from './Contacts'
import Links from './Links'

const BasicPanel = ({
  activeTab,
  basicTabs,
  onChangeText,
}: {
  activeTab: number
  basicTabs: any
  onChangeText: any
}) => {
  const onChangeHandler = (value: any, key: string) => {
    const updatedTabs = { ...basicTabs }
    updatedTabs[key] = value
    onChangeText(updatedTabs)
  }

  return (
    <Fragment>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { margin: '0.5rem 0' },
          backgroundColor: 'rgb(231 238 250)',
          display: 'flex',
          flexDirection: 'column',
        }}
        noValidate
        autoComplete="off"
      >
        {activeTab === 0 && <Contacts basicTabs={basicTabs} onChangeHandler={onChangeHandler} />}
        {activeTab === 1 && <Links basicTabs={basicTabs} onChangeHandler={onChangeHandler} />}
        {activeTab === 2 && <About basicTabs={basicTabs} onChangeHandler={onChangeHandler} />}
      </Box>
    </Fragment>
  )
}

export default BasicPanel
