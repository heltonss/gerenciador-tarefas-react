import React, { Component } from 'react';
import axios from 'axios';
import { IntlProvider} from 'react-intl';

import PageHeader from '../template/pageheader'
import TodoForm from './todoForm';
import TodoList from './todoList';

var intlData = {
    "locales": "en-US"
}

const URL = 'http://localhost:5000/api/gerenciador'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            description: '',
            list: []
        }

        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove= this.handleRemove.bind(this);
        this.update();
    }


    //consumindo informações
    update() {
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => this.setState({
                ...this.state,
                description: ' ',
                list: resp.data
            }))
    }

    //função chamada pelo click no componente TodoForm
    handleAdd() {
        const description = this.state.description;
        axios.post(URL, {
            description
        }).then(resp => this.update())
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    handleRemove(tarefa){
        axios.delete(`${URL}/${tarefa._id}`)
            .then(resp => this.update())
    }



    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="cadastro" />
                <TodoForm description={this.state.description} handleChange={this.handleChange} handleAdd={this.handleAdd} />
                <IntlProvider>
                    <TodoList list={this.state.list} handleRemove={this.handleRemove} />
                </IntlProvider>
            </div>
        )
    }
}