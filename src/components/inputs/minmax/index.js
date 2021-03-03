import React from 'react'
import PropTypes from 'prop-types'
import AppLazyInput from "~c/inputs/lazy"
import styles from './minmax.module.css'

//style loader --(style-css)- (вставляет все в js на лету при подключении main.js), js bunddle вставлял это в раздел head(инджектировались стили в тег head)
//css loader -  парсит сss стили
//mini css extract plugin  - чтобы попадало в отделтны файлик (в разные банлдлы css и js)
//yarn add mini-css-extract-plugin css-loader


class MinMax extends React.PureComponent {

    // shouldComponentUpdate(prevProps, prevState) {
    //
    //     if(this.props.cnt !== prevProps.cnt ){
    //         console.log(this.props.cnt)
    //         console.log(prevProps.cnt )
    //         return true
    //     }
    //     return false
    //
    //
    // }

    static defaultProps = {
        onChange: function(cnt) {}
    }

    static propTypes = {
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
        cnt: PropTypes.number.isRequired,
        onChange: PropTypes.func
    }

    inputLazy = React.createRef()

    // setInputValue(realCnt) { this.inputLazy.current.setValue(realCnt) }

    increase = () => {

       this.set(this.props.cnt + 1)
        console.log(this.props.cnt)
       // this.setInputValue(realCnt)

    }
    decrease = () => {
    this.set(this.props.cnt - 1)
       // this.setInputValue(realCnt)
    }

    set(newCnt) {
        let cnt = Math.min(Math.max(newCnt, this.props.min), this.props.max)
        this.props.onChange(cnt)
        return cnt
    }

    onChange = (e) => {

        let cnt = parseInt(e.target.value)
        let realCnt = this.set((isNaN(cnt) ? this.props.min : cnt))
        if( realCnt.toString() !==  e.target.value){   // realCnt !== cnt ??
            this.inputLazy.current.setValue(realCnt)
        }
    }

    render() {

        return (
            <div>
                <button onClick={this.decrease}>-</button>
                <AppLazyInput
                    nativeProps = {{ type: "text", className: styles.input}}
                    value={ this.props.cnt }
                    onChange = { this.onChange }
                    ref = { this.inputLazy }
                />
                <button onClick={this.increase}>+</button>
            </div>
        )
    }
}


export default MinMax