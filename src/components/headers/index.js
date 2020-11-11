import React, { Component } from 'react';
import './styles-headers.css';


export default class Header extends Component{
    render(){
        return (
        
        <div className="header">
            <h1>Doug Family</h1>
            <form>
                <label>Pesquisar:</label>
                <input 
                type="search" 
                placeholder="Personagem"
                
                />
            </form>
            
        </div>
        
        )
    }
}