import React from 'react';
import { Input, Form } from 'antd';
import { UserOutlined } from '@ant-design/icons';

function Email({ 
  name, label, 
  placeholder, defaultValue, 
  onChange, disabled, required,
  onBlur, validateTrigger,
  validator, notwrapInForm
}) {

  // Rules
  let rules = [
    { required: required, message: 'Email is Required' },
    { type: 'email', message: 'Email is Invalid' },
  ];
  !!validator && rules.push({ validator });

  const InputEmail = (
    <Input 
      prefix={<UserOutlined className="site-form-item-icon" />}
      placeholder={ placeholder || label } 
      onChange={ onChange || null } 
      defaultValue={ defaultValue }
      disabled={ disabled }
      onBlur={ onBlur || null }
    />
  );
  
  return(
    !!notwrapInForm?
      <>
        { InputEmail }
      </>:
      <Form.Item
        name={ name }
        label={ label }
        validateTrigger={ validateTrigger || 'onBlur' }
        rules={ rules }
        
        data-testid='form'
      >
        { InputEmail }
      </Form.Item>
  );
}

export default Email;