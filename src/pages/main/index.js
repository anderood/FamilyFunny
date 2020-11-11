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
                    <h1>Doug Funny</h1>
                    <p>
                    Doug é uma série animada americana do canal Nickelodeon. Foi o primeiro Nicktoon produzido e exibido, estrelando um garoto de 12 anos chamado Douglas Yancey "Doug" Funnie. Originado de um livro nunca publicado, Doug Got a New Pair of Shoes, do artista e criador da série Jim Jinkins (mesmo criador de Pinky Dinky Doo) e do escritor Joe Aaron.
                    </p>
                    <div className="perfil-botao">

                        <a href="">Acessar</a>
                    </div>
                </article>
            </div>
            
        )
    }
}