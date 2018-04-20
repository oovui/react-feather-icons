import React from 'react'
// import Icon from '@oovui/react-feather-icons';
import Icon from '../lib/index'

class App extends React.Component {
  render () {
    return (
			<div>
				<Icon type="x"/>
				<Icon type ="circle" size="30" color="red"/ >
				<Icon type ="grid" size="30" color="red"/ >
			</div>
		)
	}

}
export default App;