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
                    <h1>Nome</h1>
                    <p>Texto</p>
                    <div className="perfil-botao">

                        <a href="">Acessar</a>
                    </div>
                </article>
            </div>
            
        )
    }
}