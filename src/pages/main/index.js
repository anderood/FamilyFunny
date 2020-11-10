import React, { Component } from 'react';
import avatar from '../../img/avatar.jpg';
import './styles-main.css';

export default class Main extends Component{
    render(){
        return(
            <div className="list-perfil">
                <article>
                    <div className="perfil-img">
                        <img src={avatar} alt="Imagem de Perfil"/>
                    </div>
                    <h1>Nome do Personagem</h1>
                    <p>Alguma Descrição</p>
                    <a href="">Acessar</a>
                </article>
            </div>
        )
    }
}