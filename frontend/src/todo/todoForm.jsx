'use strict'
import React from 'react';
import Grid from '../template/Grid';
import ButtonIcon from '../template/buttonIcon';

export default (props) => {

    const atalhoTeclado = (e) => {
        if (e.key === 'Enter') {
            e.shifKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }


    return (
        <div role='form' className='form'>
            <Grid cols='12 9 10 10'>
                <input id='description'
                    onChange={props.handleChange}
                    value={props.description}
                    className='form-control'
                    onKeyUp={atalhoTeclado}
                    type="text"
                    placeholder='Adicione uma tarefa'
                />
            </Grid>
            <Grid cols='12 3 2 2'>
                <ButtonIcon onClick={props.handleAdd} style='primary' icon='plus'></ButtonIcon>
                <ButtonIcon onClick={props.handleSearch} style='info' icon='search'></ButtonIcon>
                <ButtonIcon onClick={props.handleClear} style='default' icon='close'></ButtonIcon>
            </Grid>
        </div>

    );
}
