/**
 * Created by veresku on 21/08/16.
 * HOC - higher order component
 * decorator
 */
import React from 'react'

export default (Component) => {

    return class ToggleOpenListComponent extends React.Component {

        state = {
            openItemId: null
        }

        toggleOpen = id => ev => {

            if(ev) ev.preventDefault()

            this.setState({
                openItemId: (this.state.openItemId === id) ? null : id
            })
        }

        render() {
            return <Component {...this.props} openItemId={this.state.openItemId} toggleOpen={this.toggleOpen}/>
        }
    }
}
