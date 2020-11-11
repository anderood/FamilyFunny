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
                            <li><strong>Formato</strong>: Serie de Desenho Animado</li>
                            <li><strong>Genero</strong>: Circlano</li>
                            <li><strong>Duração</strong>: 180 Min</li>
                            <li><strong>Criador</strong>: Jim Jinkins</li>
                            <li><strong>Pais</strong>: Estados Unidos</li>
                            <li><strong>Idioma</strong>: inglês</li>
                        </ul>
                   </div>
                   <p>
                   Garoto de 12 anos e meio, é o personagem principal da série. Ele mora com sua mãe Theda, seu pai Phil, sua irmã Judy e seu cachorro Costelinha na Rua Jumbo, 21, na cidade fictícia de Bluffington. Narra seu cotidiano ao escrever em seu diário todas as suas dúvidas, alegrias e tristezas. Doug gosta de imaginar coisas, como o que poderia acontecer no futuro, também gosta de imaginar que é um super-herói chamado Homem-Codorna (nome no Brasil) (Uma sátira ao Homem-Pássaro) ou Quixote (nome em Portugal), os agentes secretos Smash Adams (James Bond) e Camaleão, ou o aventureiro Race Canyon (Indiana Jones). Não gosta de seu nome do meio (Yancey).
                   </p>
                   
                   
                </article>
                <div className="details-perfil-botao">
                    <a href="/">Voltar</a>
                </div>
            </div>
            
        )
    }
}