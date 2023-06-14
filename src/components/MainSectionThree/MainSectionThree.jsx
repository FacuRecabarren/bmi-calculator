import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';
import styles from './MainSectionThree.module.css';

const MainSectionThree = () =>{
  return (
   
    <Carousel id='limitaciones' className={styles.bodyMain} variant="dark">
    <Carousel.Item className={styles.carousel}>
        <div className={styles.card}>
            <div className={styles.divImg}>
                <Image
                    className={styles.imgCard}
                    src="https://res.cloudinary.com/dreso9ye9/image/upload/v1686666679/33ad58d8-72a4-4b85-9bb9-14071f7f39af_ilchuw.png"
                    alt="First slide"
                />
            </div>
            <Carousel.Caption className={styles.caption}>
                <h5 className={styles.title}>Músculo</h5>
                <p className={styles.subTitle}>El IMC puede clasificar erróneamente a las personas musculosas como con sobrepeso u obesas, ya que no diferencia el músculo de la grasa.</p>
            </Carousel.Caption>
        </div>
    </Carousel.Item>
    <Carousel.Item className={styles.carousel}>
        <div className={styles.card}>
            <div className={styles.divImg}>
                <Image
                    className={styles.imgCard}
                    src="https://res.cloudinary.com/dreso9ye9/image/upload/v1686600443/pngtree-grandparents-day-illustration-for-the-elderly-png-image_9130560_hhwpvj.png"
                    alt="First slide"
                />
            </div>
            <Carousel.Caption className={styles.caption}>
                <h5 className={styles.title}>Edad</h5>
                <p className={styles.subTitle}>En las personas que envejecen, el aumento de la grasa corporal y la pérdida de masa muscular pueden hacer que el IMC subestime el contenido de grasa corporal.</p>
            </Carousel.Caption>
        </div>
    </Carousel.Item>
    <Carousel.Item className={styles.carousel}>
        <div className={styles.card}>
            <div className={styles.divImg}>
                <Image
                    className={styles.imgCard}
                    src="https://res.cloudinary.com/dreso9ye9/image/upload/v1686665199/f570ce61-f761-4ccb-a48d-7a1b26732d76_h1ulba.png"
                    alt="First slide"
                />
            </div>
            <Carousel.Caption className={styles.caption}>
                <h5 className={styles.title}>Embarazo</h5>
                <p className={styles.subTitle}>Por el aumento de peso en el embarazo es aconsejable mantener un IMC saludable antes del embarazo para minimizar los riesgos para la salud tanto de la madre como del niño.</p>
            </Carousel.Caption>
        </div>
    </Carousel.Item>
    <Carousel.Item className={styles.carousel}>
        <div className={styles.card}>
            <div className={styles.divImg}>
                <Image
                    className={styles.imgCardGenero}
                    src="https://res.cloudinary.com/dreso9ye9/image/upload/v1686666139/a995fd96-6fc7-43da-a623-e227d95ce548_buina9.png"
                    alt="First slide"
                />
            </div>
            <Carousel.Caption className={styles.caption}>
                <h5 className={styles.title}>Sexo</h5>
                <p className={styles.subTitle}>El desarrollo y la composición de la grasa corporal de niñas y niños varían con la edad. En consecuencia, la edad y el género de un niño se consideran al evaluar su IMC.</p>
            </Carousel.Caption>
        </div>
    </Carousel.Item>
  </Carousel>
    
  );
}

export default MainSectionThree;