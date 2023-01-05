import React from 'react'

class ToDo extends React.Component{

    state = {
        completed: this.props.task.completed
    }//Les states sont des états = objets qui des prp (ici ce sont des tâches)

    toggleCompleted = () => {//Cette fct va modifier l'état de cette tâche en completer ou pas
        this.setState(prevsState => ({
            completed: !prevsState.completed
        }))
        this.props.onToggleCompleted(this.props.task.id)
    }

    render(){
        return (
            <li className={"list-group-item d-flex align-tiems-center " + (this.state.completed? 'bg-succes' : null) } >
                {this.props.tasks.name}
                <button className={"btn btn-sm ml-auto " + (this.state.completed? 'btn-succes': 'btn-outline-succes')} onClick={() => this.toggleCompleted()}>&#x2713;</button>
            </li>
        )
    }
}

export default ToDo//Le composant ToDO permet d'afficher les tâches