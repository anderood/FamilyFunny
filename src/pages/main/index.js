import React, { Component } from 'react';
import avatar from '../../img/avatar.jpg';
import './styles-main.css';
import api from '../../services/api';
import { Link } from 'react-router-dom';

export default class Main extends Component{

    state = {
        perfis: [],
    }
    componentDidMount(){
        this.loadPerfis();
    };

    loadPerfis = async () => {
        const response = await api.get('/perfis');
        this.setState({perfis: response.data.docs})
        console.log(this.state)

    }
    render(){

        const { perfis } = this.state;
        
        return(
            <div className="list-perfil">
                {perfis.map( perfil => (
                    <article>
                        <div className="perfil-img">
                            <img src={perfil.img} alt="Imagem de Perfil"/>
                        </div>
                        <h1>{perfil.title}</h1>
                        <p>{perfil.description}</p>
                        <div className="perfil-botao">
                            <Link to={`/perfis/${perfil._id}`}>Acessar</Link>
                        </div>
                    </article>
                ))}
            </div>
            
        )
    }
}