import React from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import styles from './order.module.css'
import { Link } from 'react-router-dom'
import { routesMap } from "~/routes"
import withStore from "~/hocs/withStore"
// import LinkButton from '~c/links/button'

class Order extends React.Component {


    state = {
        showModal: false
    }

    show = () => { this.setState((props, state)=> {
        return {showModal: !state.showModal}
    })}

    hide = () => {this.setState({showModal: false})}

    confirm = () => {


        this.hide()
        this.props.stores.order.send()

        // this.props.history.push('/done')
        ///fetch
        // router.moveTo('result')
    }


    render() {
        let orderModel = this.props.stores.order
        let cartModel = this.props.stores.cart
        let formFields = []
        for (let name in orderModel.formData) {
            let field = orderModel.formData[name]
            formFields.push(

                <Form.Group key ={ name } controlId = {'order-form-' + name}>
                    <Form.Label> {field.label}</Form.Label>
                    <Form.Control

                        type = { field.type}
                        value = { field.value }
                        checked={ field.checked}
                        onChange = { e => { orderModel.change(name, e )}}
                    />
                    { field.valid === null || field.valid ? '' :
                        <Form.Text className='text-muted'>
                            { field.errorText  }
                        </Form.Text>
                    }

                </Form.Group>
            )
        }

        return (

            <>
                <h2>Order information</h2>

                <Form>
                    { formFields }
                </Form>
                <hr/>

                <div>
                    <Link to={ routesMap.cart } className="btn btn-warning">Back</Link>
                    &nbsp;
                    <button onClick={this.show}
                            className="btn btn-primary"
                            disabled={!orderModel.formValid || !cartModel.products.length > 0 }>Send</button>
                </div>

                <Modal show= {this.state.showModal} onHide= {this.hide} backdrop= 'static'>
                    <Modal.Header closeButton>
                        <Modal.Title> Check information </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className={styles.orderForm}>
                            <div className={styles.personalData}>
                                <div>First name:</div>
                                <div>{orderModel.data.firstName}</div>
                                <br/>
                                <div>Email:</div>
                                <div>{orderModel.data.email}</div>
                                <br/>
                                <div>Phone:</div>
                                <div>{orderModel.data.phone}</div>
                            </div>
                            <div className={styles.orderData}>

                                    { cartModel.productsDetailed.map( p => {
                                        return (
                                            <div key ={p.id}>
                                                <div>{p.title}:</div>
                                                <div>{p.cnt}</div>
                                            </div>
                                        )
                                    })}
                            </div>

                        </div>
                        <div className={styles.total}>{cartModel.total}</div>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={ this.hide } variant='secondary'> Ooops </Button>
                        <Link to='/done' onClick ={ this.confirm }  className="btn btn-primary"> All right</Link>
                        {/*<Button variant='primary'> All right </Button>*/}
                    </Modal.Footer>
                </Modal>
            </>
        )
    }

}


export default withStore(Order)