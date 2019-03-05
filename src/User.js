import React, { Component } from "react"
// Tu importes les fonctions du redux
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

// Tu importes les actions nescessaires au déroulement de ton application
import * as Actions from "./actions/user"

const users = [
    { id: 0, firstName: "aaa", lastName: "bbb" },
    { id: 1, firstName: "ccc", lastName: "ddd" },
    { id: 2, firstName: "eee", lastName: "fff" },
    { id: 3, firstName: "ggg", lastName: "iii" },
]

class User extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: {
                id: "",
                firstName: "",
                lastName: "",
            },
        }
    }

    componentDidMount() {
        this.setState({ users: users[0] })
    }

    componentWillReceiveProps(nextProps) {
        const { user, actions } = nextProps
        if (this.props.user !== user) {
            this.setState({ users: user}, () => actions.setUser(user))
        }
    }

    onChange = (e, name) => {
        this.setState({
            users: {
                ...this.state.users,
                [name]: e.target.value,
            },
        })
    }

    render() {
        const { user, actions } = this.props
        const { firstName, lastName } = this.state.users
        return (
            <div>
                {
                    users.map((user, index) => (
                        <div key={ `id-${user.id}` } style={ { display: "inline-block" } }>
                            <button onClick={ () => actions.setUser(user) }>{ `User ${index}` }</button>
                        </div>
                    ))
                }
                <div>
                    <input type="text" onChange={ (e) => this.onChange(e, "firstName") } value={ firstName } />
                    <input type="text" onChange={ (e) => this.onChange(e, "lastName") } value={ lastName } />
                    <button onClick={ () => actions.setUser(this.state.users) }>Modifier</button>
                </div>
                <div>
                    <p>{ `Voici ce qu'il y a dans le state global (au départ de l'appli, il n'y a rien, il est vide): id: ${user.id}, firstName: ${user.firstName}, lastName: ${user.lastName}` }</p>
                    <p>Et ensuite tu les enregistres dans la base de donnée et rebelote</p>
                </div>
            </div>
        )
    }

}

// Tu peux definir mapStateToProps et mapDispatchToProps dans n'importe quel composant

// Ca te permet de te connecter a ton state global
const mapStateToProps = (state) => {
	const { user } = state.user
	return { user }
}

// Ca te permet d'utiliser les fonctions qui sont dans le fichier actions, une fois fais,
// tu les retrouves dons ton this.props
const mapDispatchToProps = (dispatch) => (
	{ actions: bindActionCreators(Actions, dispatch) }
)

export default connect(mapStateToProps, mapDispatchToProps)(User)
