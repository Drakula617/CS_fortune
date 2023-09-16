import React from "react";
import styles from '../css/dropChat.module.css';
import {HubConnectionBuilder} from '@microsoft/signalr'
var connection = new HubConnectionBuilder()
.withUrl("https://localhost:7040/dropChat", { withCredentials: true })
.build()

class DropChat extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            messages:[
                
            ]

        }

        connection.start().then(function () {
            // Соединение установлено
        }).catch(function (err) {
            console.error(err.toString());
        });
        connection.on("ReceiveMessage", (user, drop) => {
            const id = Math.max(...this.state.messages.map(message => message.id)) + 1;
            this.setState({messages: [...this.state.messages, {id, user, drop}]});
            console.log('Пришло' ,user, drop);
            return;
        });
    }

    render()
    {

        return(
            <div className={styles.drop_chat}>
                <div className={styles.message_box}>
                    {
                        this.state.messages.map((el)=>(
                            <div className={styles.message_item_box} key={el.id}>
                                <div>{el.user}</div>
                                <div>{el.drop}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }

}
export {DropChat, connection};