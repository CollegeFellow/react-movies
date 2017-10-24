import React from 'react'
import ReactDOMServer from 'react-dom/Server'

import Layout from './layout.jsx'

class TestComponent extends React.Component {

	render() {
		let contentString = ReactDOMServer.renderToString(<div>This is the home page!!</div>);
		let message = "Welcome to the ReactMovies!"
		
		return (
			<Layout title={message}>
		        <h1>{message}</h1>
		        <div id="content" dangerouslySetInnerHTML={{__html: contentString}}>
		        </div>
		    </Layout>
		)
	}
}

module.exports = TestComponent