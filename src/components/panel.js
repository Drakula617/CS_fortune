import React from "react";
import styles from '../css/panel.module.css';
class Panel extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            filter_data:{
                title:''
            }
        }
    }
    
      handleSubmit = (event) => {
        event.preventDefault();
        const forma = new FormData(event.currentTarget);
        this.props.onFilter(forma.get('title'));
      };
    render()
    {
        return(

        
        <div className={styles.menu_panel}>
                    <div className={styles.filter_container}>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" name="title" className={styles.filter_by_name}>

                            </input>
                            {/* <div className={styles.filter_by_price_box}>
                                <input className={styles.filter_slider} type="range" min="0" max="10000"></input>
                                <div className={styles.filter_slider_value_box}>
                                    <label className={styles.filter_price_min}>{this.state.filter.price.min}</label>
                                    <label className={styles.filter_price_max}>{this.state.filter.price.max}</label>
                                </div>

                            </div> */}
                            <input type="submit" value="Фильтр" className={styles.filter_submit}>
                                
                            </input>
                        </form>

                    </div>
                </div>
        )
    }

}
export default Panel