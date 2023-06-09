import React from 'react'
import './content.scss'

import ActionBar from '../actionbar/ActionBar'
import TextFields from '../../common/text-field/TextFields'
import SelectFields from '../../common/select-field/SelectFields'

export default function Content() {
  return (
    <>
      <ActionBar/>
      <div  className='content-form'>
        <SelectFields col="col-50"/>
        <SelectFields col="col-50"/>
        <TextFields col="col-25"/>
        <TextFields col="col-25"/>
        <TextFields col="col-25"/>
        <TextFields col="col-25"/>
        <TextFields col="col-25"/>
        <TextFields col="col-25"/>
        <TextFields col="col-25"/>
        <TextFields col="col-25"/>
        <TextFields col="col-25"/>
        <TextFields col="col-25"/>
      </div>
    </>

  )
}
