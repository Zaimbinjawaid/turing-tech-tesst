
import React, {useEffect} from 'react';

//Ant d
import { Divider, Form, Button } from 'antd';

import { TURING_CONSTANTS } from './Constants';

// Form Elements
import {Text} from '../../Common/BasicFields';

import { getTimeInMinAndSec } from '../../../helpers/GeneralHelper';

function AddNote({
  id,
  callType,
  duration,
  from,
  to,
  via,
  notes,
  onSave,
}){
  const [form] = Form.useForm();
  let formRef = React.createRef();

  const onSubmit=(values)=>{
    onSave(values, id)
  }

  return(

    <div>
      <h2>Add Notes</h2>
      <h3>{'Call ID: ' + id}</h3>

      <Divider/>

      <p><b>{'Call Type'}</b><span style={
          callType === 'missed'?
            {color:'red'}
            :
            callType === 'answered'?
              {color:'teal'}
              :
              {color:'blue'}
        }> {callType}</span></p>
      <p><b>{'Duration'}</b> {getTimeInMinAndSec(duration)}</p>
      <p><b>{'From'}</b> {from}</p>
      <p><b>{' To'}</b> {to}</p>
      <p><b>{'Via'}</b> {via}</p>
      {
        !!notes?.length &&
        <div>
        <p><b>Prior Notes:</b></p>
          { notes?.map((note, index)=>{
            return (<p>&nbsp;&nbsp;{index+1}- {note.content}</p>)
          })}
        </div>
      }

      <p>Notes</p>

      <Form
        form = {form}
        ref={formRef}
        onFinish={onSubmit}
        layout="vertical"
      >

        <Text
          name={TURING_CONSTANTS.NOTES}
          placeholder={'Add Notes'}
        />

        <Form.Item>
          <Button
            block
            size="large"
            type="primary"
            htmlType="submit"
          >
            {'Save'}
          </Button>
        </Form.Item>

      </Form>

      
      
    </div>

  )
}

export default AddNote;