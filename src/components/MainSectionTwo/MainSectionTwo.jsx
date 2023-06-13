import { Row, Col, Image } from 'react-bootstrap';
import styles from './MainSectionTwo.module.css';


const MainSectionTwo = () => {
 
  return (
    <div id='recomendaciones' className={styles.body}>
        <Row className={styles.rowMain}>
            <Col className={styles.colTitleMain} xs={12} lg={3}>
                <div className={styles.divImg}>
                    <Image className={styles.img} src='https://res.cloudinary.com/dreso9ye9/image/upload/v1686667717/img.icons8_beruct.png'/>
                </div>
                <div className={styles.divTitles}>
                    <h2 className={styles.title}>Alimentación saludable</h2>
                    <p className={styles.subTitle}>Una alimentación saludable promueve el control del peso, la prevención de enfermedades, una mejor digestión, inmunidad y claridad mental.</p>
                </div>
            </Col>
            <Col className={styles.colTitleMain} xs={12} lg={3}>
                <div className={styles.divImg}>
                    <Image className={styles.img} src='https://res.cloudinary.com/dreso9ye9/image/upload/v1686667639/dumbbell-8756992-7190861_c6mwgn.png'/>
                </div>
                <div className={styles.divTitles}>
                    <h2 className={styles.title}>Ejercicio regular</h2>
                    <p className={styles.subTitle}>El ejercicio mejora el estado físico, ayuda a controlar el peso, eleva el estado de ánimo y reduce el riesgo de enfermedades, fomentando el bienestar y la longevidad.</p>
                </div>
            </Col>
            <Col className={styles.colTitleMain} xs={12} lg={3}>
                <div className={styles.divImg}>
                    <Image className={styles.img} src='https://res.cloudinary.com/dreso9ye9/image/upload/v1686667279/img.icons8_hdzlrg.png'/>
                </div>
                <div className={styles.divTitles}>
                    <h2 className={styles.title}>Sueño adecuado</h2>
                    <p className={styles.subTitle}>El sueño mejora la claridad mental, la estabilidad emocional y el bienestar físico, promoviendo la restauración y el rejuvenecimiento general.</p>
                </div>
            </Col>
        </Row>
    </div>
   
  );
};

export default MainSectionTwo;
