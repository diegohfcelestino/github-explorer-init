import React from 'react';

import { Form, InputGroup } from 'rsuite';
import { IconSearch } from '../../services/icons';
import './textField.scss';

export function TextField(props) {
  const { label, name, accepter, error, width, textarea } = props;
  return (
    <>
      <div className='container' style={{ width: 300 }}>
        <Form.Group>
          <Form.ControlLabel>{label}</Form.ControlLabel>
          <InputGroup inside>
            <InputGroup.Addon>
              <IconSearch />
            </InputGroup.Addon>
            <Form.Control
              name={name}
              componentClass={textarea ? 'textarea' : 'input'}
              style={{
                resize: textarea ? 'auto' : 'none',
                width: width ?? 298,
              }}
              accepter={accepter}
              errorMessage={error}
              {...props}
            />
          </InputGroup>
        </Form.Group>
      </div>
    </>
  );
}
