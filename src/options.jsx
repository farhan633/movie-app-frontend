import styles from './optines.module.css'



export default function Options() {
   
  
    return (
   <main className={styles.optionmain}>
<section>
   <button>sing in for more acces</button>
  <ul className={styles.contactbutton}>
   <li>Instagram</li>
   <li>Facebook</li>
   <li>E-mail</li>
  </ul>
  </section>
  <div className={styles.pramdiv}><p className={styles.pram}>Copyright © 2022 ciniMovie.
All Rights Reserved. ciniMovie</p>
<span>Created and Cared by <h3>F&K</h3></span></div>
  

   </main>
    );
  }