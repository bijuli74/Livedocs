import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Headers'
import React from 'react'

const Document = () => {
  return (
    <div>
      <Header className='flex w-fit items-center justify-center gap-2'>
        <p className='document-title'>Test Title</p>
      </Header>
      <Editor />
    </div>
  )
}

export default Document
