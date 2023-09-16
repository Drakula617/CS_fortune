import React from "react";
import styles from '../css/page.module.css';
import Panel from './panel';
import Content from './content';
import {DropChat} from "./dropChat";
import data from '../data/products.json'
class Page extends React.Component{
    constructor(props)
    {
        super(props);
        this.state ={
            data_skins: data["products"]
        }
        this.filter = this.filter.bind(this);
    }
    render()
    {
        return(
            <div style={styles}>
                <Panel onFilter={this.filter}></Panel>
                <Content id="content" skins={this.state.data_skins}></Content>
                <DropChat></DropChat>
            </div>

            
        )
    }
    filter(title)
    {
        this.setState({data_skins: data["products"].filter(c=> c.name.includes(title))});
    }
}
export default Page