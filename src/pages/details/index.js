import React, { Component } from 'react';
import avatar from '../../img/avatar.jpg';
import './styles-details.css';

export default class Details extends Component{
    render(){
        return(
            <div className="details-list-perfil">
                <article>
                    <div className="details-perfil-img">
                        <img src={avatar} alt="Imagem de Perfil"/>
                    </div>
                    <h1>Nome do Personagem</h1>
                   
                   <div className="details-perfil-itens">
                        <ul>
                            <li><strong>Assunto</strong>: Texto</li>
                        </ul>
                   </div>
                   <p>Texto</p>
                </article>
                <div className="details-perfil-botao">
                    <a href="/">Voltar</a>
                </div>
            </div>
            
        )
    }
}