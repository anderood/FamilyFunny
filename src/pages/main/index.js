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
                    <p>
                    Mussum Ipsum, cacilds vidis litro abertis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Viva Forevis aptent taciti sociosqu ad litora torquent. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Casamentiss faiz malandris se pirulitá.
                    </p>
                    <div className="perfil-botao">

                        <a href="">Acessar</a>
                    </div>
                </article>
                <article>
                    <div className="perfil-img">
                        <img src={avatar} alt="Imagem de Perfil"/>
                    </div>
                    <h1>Nome do Personagem</h1>
                    <p>
                    Mussum Ipsum, cacilds vidis litro abertis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Viva Forevis aptent taciti sociosqu ad litora torquent. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Casamentiss faiz malandris se pirulitá.
                    </p>
                    <div className="perfil-botao">

                        <a href="">Acessar</a>
                    </div>
                </article>
            </div>
            
        )
    }
}