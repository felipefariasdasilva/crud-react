import React, { Component } from 'react';

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Autores</th>
                <th>Livros</th>
                <th>Preços</th>
                <th>Remover</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {

    const linhas = props.autores.map((linha, index) => {
        return(
            <tr key={index}>
                <td>{ linha.nome }</td>
                <td>{ linha.livro }</td>
                <td>{ linha.preco }</td>
                <td><button>Remover</button></td>
            </tr>
        );
    });

    return(
        <tbody>
            {linhas}
        </tbody>
    );
}

class Tabela extends Component {

    render() {
        
        const{ autores } = this.props;
        console.log(autores);

        return (
            <table>
                <TableHead />
                <TableBody autores = { autores }/>
            </table>
        );
    }

}

export default Tabela;