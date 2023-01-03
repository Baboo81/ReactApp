import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FalistAlt, FaCheckSquare, FaPlusSquare, FaTrash} from 'react-icons/fa';


class App extends React.Component{
  render(){
    return (
      <section id="todo">
            <h1 className="m3">Liste de tâches</h1>
            <ul className="list-group m3">
                <li className="list-group-item d-flex align-tiems-center">
                    Ranger la vaisselle
                    <button className="btn btn-sm ml-auto btn-outline-succes">&#x2713;</button>
                </li>
                <li className="list-group-item d-flex align-tiems-center">
                    Répondre appel d'offres
                    <button className="btn btn-sm ml-auto btn-outline-succes">&#x2713;</button>
                </li>
                <li className="list-group-item d-flex align-tiems-center">
                    Signer contrat
                    <button className="btn btn-sm ml-auto btn-outline-succes">&#x2713;</button> 
                </li>
                <li className="list-group-item d-flex align-tiems-center">
                    Ranger le salon
                    <button className="btn btn-sm ml-auto btn-outline-succes">&#x2713;</button>
                </li>
            </ul>
            <footer className="d-flex justify-content-between bg-secondary p3" id="mainFooter">
                <div className="btn-group">
                    <a href="#" className="btn btn-outline-dark bg-light"><FalistAlt /></a>
                    <a href="#" className="btn btn-outline-dark bg-light"><FaCheckSquare /></a>
                    <a href="#" className="btn btn-outline-dark bg-light"><FaPlusSquare /></a>
                </div>
                <button className="btn btn-outline-dark bg-ligth"><FaTrash /></button>
            </footer>
        </section>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))//Permet d'injecter l'app ds la div root qui se trouve ds la fichier index.html