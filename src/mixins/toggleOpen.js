/**
 * Created by veresku on 21/08/16.
 * HOC - higher order component
 * decorator
 */

export default {

    getInitialState() {
        return {
            isOpen: false
        }
    },

    toggleOpen(ev) {

        if(ev) ev.preventDefault()

        this.setState({
            isOpen: !this.state.isOpen
        })
    },

    openItem(ev) {

        if(ev) ev.preventDefault()

        this.setState({
            isOpen: true
        })
    }
}