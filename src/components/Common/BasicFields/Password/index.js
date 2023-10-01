import React from 'react';
import { Input, Form } from 'antd';
import { LockOutlined } from '@ant-design/icons';

function Password({ 
  name, label, 
  placeholder, defaultValue, 
  onChange, disabled, required,
  onBlur, validateTrigger,
  validator, notwrapInForm,
  maxLength, minLength
}) {

  // Rules
  let rules = [
    { required: required, message: 'Password is Required' },
    ...(validator || [])
  ];
  const InputPassword = (
    <Input.Password
      prefix={<LockOutlined className="site-form-item-icon" />} 
      placeholder={ placeholder || label } 
      onChange={ onChange || null } 
      defaultValue={ defaultValue }
      disabled={ disabled }
      maxLength={ maxLength || 25 }
      minLength={ minLength || 8 }
    />
  );
  
  return(
    !!notwrapInForm?
      <>
        { InputPassword }
      </>:
      <Form.Item
        name={ name }
        label={ label }
        validateTrigger={ validateTrigger || 'onBlur' }
        rules={ rules }

        data-testid='form'
      >
        { InputPassword }
      </Form.Item>
  );
}

export default Password;