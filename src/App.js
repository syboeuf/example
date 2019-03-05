import React from "react"
import { Provider } from "react-redux"
import store from "./store"
import User from "./User"


// Tu connectes ton redux a ton application
const App = () => (
	<Provider store={ store }>
		<User />
	</Provider>
)

export default App
