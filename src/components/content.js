import React from "react";
import styles from '../css/content.module.css';
import { connection } from "./dropChat";
// import axios from "axios";

class Content extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            rand_case:0
        }
        this.random_case = this.random_case.bind(this);
        this.check_spin_line = this.check_spin_line.bind(this);
        this.cont_ref = React.createRef();
        this.spin_line = React.createRef();
    }
    render()
    {
        return(
            <div className={styles.content}>
                <button className={styles.btn_random} onClick={this.random_case}>Рандом</button>
                <div className={styles.container_from_items}>
                    <div id="spin" className={styles.spin_line} ref={this.spin_line}></div>

                    <div id="list_items" ref={this.cont_ref} className={styles.list_items}>
                        {
                            //ref={ref=> (this.props.skins[el.id - 1] = ref)}
                            this.props.skins.map((el)=>(
                                <div className={styles.box}  key={el.id}>
                                    <picture className={styles.picture_box}>
                                        <img src={el.img_url} className={styles.picture_img_box} alt=""></img>
                                    </picture>
                                    <label className={styles.name_lbl}>{el.name}</label>
                                    {/* <label className={styles.price_lbl}>{el.price}</label> */}
                                    <button className={styles.btn_buy} >Купить</button>
                                </div>
                                )
                            )
                        }
                    </div>
                </div>

            </div>

        )

    }
    check_spin_line()
    {
        console.log('check_spin_line');
        const items = this.cont_ref.current.getElementsByClassName(styles.box);
        const el_spin_line = this.spin_line.current;
        const rect_spin = el_spin_line.getBoundingClientRect();
        for(let i = 0; i < items.length-1; i+=1)
        {

            let el = items[i].getBoundingClientRect();;
            if(
                rect_spin.left < el.right &&
                rect_spin.right > el.left &&
                rect_spin.top < el.bottom &&
                rect_spin.bottom > el.top
            )
            {
                
                items[i].style.background = "black";
                const user = "Andrey";
                const drop = items[i].getElementsByClassName(styles.name_lbl)[0].textContent;
                connection.invoke("SendMessage", user, drop)
                .then(function () {
                    console.log(user, drop);
                    return;
                })
                .catch(function (err) {
                    console.error(err.toString());
                });
                return;
            }
            
        }
        return;
    }
    random_case()
    {
        // axios.get('https://localhost:7040/Products/GetAll').then((res)=> console.log(res));
        const items = this.cont_ref.current;
        const items_box = this.cont_ref.current.getElementsByClassName(styles.box);
        for(let i = 0; i < items_box.length-1; i+=1)
        {
            let el = items_box[i];
            el.style.background = "linear-gradient(to top, rgb(144, 74, 184), blue)";
        }

        // const rand_margin = this.random(-2000, 0);
        items.style.transition = null;
        items.style.marginLeft = "1000px";
        
        const width = this.cont_ref.current.getElementsByClassName(styles.box)[0].offsetWidth;
        const rand_transform = this.random(-4000, -1000);
        const time_translate = rand_transform/width;
        items.style.transition = `transform ${Math.abs(time_translate)}s ease`;
        items.style.transform = `translateX(${rand_transform}px)`;
        setTimeout(this.check_spin_line, Math.abs(time_translate) * 1000);
    }
    random(min, max)
    {
        return Math.round(Math.random() * (max - min) + min, 0);
    }
}
export default Content