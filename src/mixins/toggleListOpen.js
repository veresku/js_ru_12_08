/**
 * Created by veresku on 21/08/16.
 * HOC - higher order component
 * decorator
 */

export default {

    getInitialState() {
        return {
            openItemId: null
        }
    },

    toggleOpen: function(id) {

        const self = this

        return function(ev) {
            if(ev) ev.preventDefault()

            self.setState({
                openItemId: (self.state.openItemId === id) ? null : id
            })
        }
    }
}