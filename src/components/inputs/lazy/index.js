import React from 'react'
import PropTypes from 'prop-types'

class AppLazyInput extends React.Component {

    static defaultProps = {
        onChange: function (e) {},
        nativeProps: {},
        value: ''

    }

    static propTypes = {
        value: PropTypes.any.isRequired,
        onChange: PropTypes.func,
        nativeProps: PropTypes.object
    }

    nativeInput = React.createRef()

    componentDidUpdate(prevProps, prevState) {

        let inp = this.nativeInput.current
        if(prevProps.value !== this.props.value || this.props.value.toString() !==  inp.value ) {
            inp.value = this.props.value

        }
    }

    setValue(value) {
        this.nativeInput.current.value = value

    }

    checkChange = (e) => {

        if(this.props.value.toString() !== e.target.value){
            this.props.onChange(e)

        }
    }

    checkEnterKey = (e) => {
        if(e.keyCode === 13) {
            this.props.onChange(e)
        }
    }

    render() {
        return (
            <>
                <input
                    // maxLength="5"
                    ref={this.nativeInput}
                    {...this.props.nativeProps}
                    defaultValue = { this.props.value }
                    onBlur={this.checkChange}
                    onKeyUp={this.checkEnterKey}
                />
            </>
        )
    }
}

export default AppLazyInput