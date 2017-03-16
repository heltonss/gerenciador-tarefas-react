'use strict'
import React from 'react';
import Grid from '../template/Grid';
import ButtonIcon from '../template/buttonIcon';

export default (props) => (
    <div role='form' className='todoForm'>
        <Grid cols='12 9 10 10'>
            <input id='description'  onChange={props.handleChange} value={props.description} className='form-control' type="text" placeholder='Adicione uma tarefa' />
        </Grid>
        <Grid cols='12 3 2 2'>
            <ButtonIcon onClick={props.handleAdd} style='primary' icon='plus'></ButtonIcon>
        </Grid>
    </div>

);
