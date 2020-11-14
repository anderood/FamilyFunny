import React, { Component } from 'react';
// import avatar from '../../img/avatar.jpg';
import './styles-main.css';
import api from '../../services/api';
import { Link } from 'react-router-dom';

export default class Main extends Component{

    constructor(props){
        super(props);
        this.state = {
            perfis: [],
        }
    }
    
    componentDidMount(){
        this.loadPerfis();
    };

    loadPerfis = async () => {
        const response = await api.get('/perfis');
        this.setState({perfis: response.data.docs});
        

    }


    headleChange = async (e)=>{
        e.preventDefault();
        
        const keyCode = e.which || e.keyCode
        const Enter = 13;
        // console.log(this.setState({perfis: e.target.value}));
        console.log(this.state);


        
        if(keyCode === Enter){
            <Link to={`/perfis/5fad55534bf22771dd0adfeb`}>Acessar</Link>
        }
        
    }
    render(){

        const { perfis } = this.state;
        
        return(
           <div>
               <form>
                    <input 
                    id="inptSearch"
                    type="search" 
                    placeholder="Pesquise por Personagem"
                    // value={}
                    onChange={this.headleChange}
                    />

                </form>

                {/* <div className="list-perfil">
                    {perfis.map( perfil => (
                        <article key={perfil._id}>
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
                </div> */}


               {/* fim */}
           </div>
            
            
        )
    }
}