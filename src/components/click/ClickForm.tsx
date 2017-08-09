import * as React from 'react';
import { TextInputInline } from '../common/TextInputInline';

export const ClickForm = ({name, onSave, onChange }) => (
  <form onSubmit={onSave } className='form-inline'>

    <TextInputInline name='name' onChange={onChange} value={name} />

    <button type='submit' className='btn btn-info'>Click!</button>
  </form>
);
