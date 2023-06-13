import { Container, Row, Col, Image } from 'react-bootstrap';
import styles from './MainSectionOne.module.css';


const MainSectionOne = () => {
 
  return (
    <Container className={styles.bodyMainOne}>
        <Row className={styles.rowMain}>
            <Col xs={12} md={6}>
              <div className={styles.divImage}>
                <Image className={styles.imageMain} src='https://res.cloudinary.com/dreso9ye9/image/upload/v1686666400/6f42cf53-7d10-493f-85b3-9205a819c824_bxhihk.png'/>
              </div>
            </Col>
            <Col className={styles.colTitleMain} xs={12} md={5}>
              <h2 className={styles.title}>¿Qué significa el resultado de su IMC?</h2>
              <p className={styles.subTitle}>Un rango de IMC de 18,5 a 24,9 se considera un <span className={styles.spanMain}>peso saludable</span>. Mantener un peso saludable puede reducir sus posibilidades de experimentar problemas de salud más adelante, como la <span className={styles.spanMain}>obesidad</span> y la <span className={styles.spanMain}>diabetes tipo 2</span>. Apunte a una dieta nutritiva con contenido reducido de grasa y azúcar, que incorpore abundantes frutas y verduras. Además, esfuércese por realizar actividad física regular, idealmente alrededor de 30 minutos diarios durante cinco días a la semana.</p>
            </Col>
        </Row>
    </Container>
  );
};

export default MainSectionOne;




