import React from 'react'

class Layout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <meta charset="utf-8"/>
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                </head>
                <body>
                    {this.props.children}
                </body>
            </html>
        );
    }
};

module.exports = Layout;