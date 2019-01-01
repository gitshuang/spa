import * as React from 'react'
import Container from './Container'



export default class SortableStressTest extends React.Component{
	// Avoid rendering on server because the big data list is generated
	 state = { shouldRender: false }

	 componentDidMount() {
		// Won't fire on server.
		this.setState({ shouldRender: true })
	}

	 render() {
		const { shouldRender } = this.state
		return <>{shouldRender && <Container />}</>
	}
}
