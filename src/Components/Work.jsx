import style from "./work.module.css"
import flip from "./photos/flip.png"
import plus from "./photos/plus.png"

const Work=()=>{
  return(
    <div>
      <section id={style.flipnav}>
        <article>
          <div className={style.fk}>
            <div className={style.fk1}><img width={75} src={flip} alt=""/></div>
            <div className={style.fk2}><a href="">Explore <span>Plus </span></a><img src={plus} width={10} alt=""/></div>
          </div>
          <div className={style.ser}>
            <input type="text" placeholder="Search for products, brands and more"/><a href=""><i class="fa-solid fa-magnifying-glass" ></i></a>
          </div>
          <div className={style.login}><a href="">
          <button>Login</button>
          </a>
          </div>
          <div className={style.sel}>
            <a href="">
          <p>Become a Seller</p>
            </a>
          </div>
          <div className={style.sel}>
            <a href="">
            More<i class="fa-solid fa-angle-down"></i>
            </a>
          </div>
          <div className={style.cart}>
          <a href="">

          <i class="fa-solid fa-cart-shopping"></i><p> Cart </p>
          </a>
          </div>
        </article>
      </section>
    </div>
  )
}
export default Work