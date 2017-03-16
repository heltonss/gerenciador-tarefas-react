import React from 'react';
import { IntlProvider, FormattedDate } from 'react-intl';
import ButtonIcon from '../template/buttonIcon';

export default (props) => {

    const renderRows = () => {
        const list = props.list || [];

        let listTarefa = list.map(tarefa => (
            <tr key={tarefa._id} >
                <td className={tarefa.done? 'markedAsDone' : '' }>{tarefa.description}</td>
                <td><FormattedDate value={new Date(tarefa.createdAt)} /></td>
                <td>
                    <ButtonIcon style="success" icon='check' hide={tarefa.done}  onClick={() => props.handleMarkAsDone(tarefa)} />
                    <ButtonIcon style="warning" icon='undo'  hide={!tarefa.done}  onClick={() => props.handleMarkAsPending(tarefa)} />
                    <ButtonIcon style="danger" icon='trash-o' hide={!tarefa.done}  onClick={() => props.handleRemove(tarefa)} />
                </td>
            </tr>
        ))

        return listTarefa;
    }

    return (
        <div className="row">
            <table className='table'>
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Data</th>
                        <th className='thActions'>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div>
    )
};
