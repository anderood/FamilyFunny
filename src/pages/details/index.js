import React, { Component } from 'react';
import avatar from '../../img/avatar.jpg';
import './styles-details.css';
import api from '../../services/api';

export default class Details extends Component{


    state = {
        perfis: {}
    };

    async componentDidMount(){
        const { id } = this.props.match.params;
        const response = await api.get(`/perfis/${id}`);
        this.setState({ perfis: response.data});
        console.log(this.state);
    }
   
    render(){

        const { perfis } = this.state;
        return(
            <div className="details-list-perfil">
               
                <article>
                    <div className="details-perfil-img">
                        <img src={perfis.img} alt="Imagem de Perfil"/>
                    </div>
                    <h1>{perfis.title}</h1>
                
                    <div className="details-perfil-itens">
                            <ul>
                                <li><strong>Assunto</strong>: Texto</li>
                            </ul>
                    </div>
                    <p>{perfis.description}</p>
                </article>

                <div className="details-perfil-botao">
                    <a href="/">Voltar</a>
                </div>
            </div>
            
        )
    }
}