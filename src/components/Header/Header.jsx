import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import styles from './Header.module.css';


const Header = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');
  const [result, setResult] = useState('');
  const [idealWeight, setIdealWeight] = useState('');

  useEffect(() => {
    calculateBMI();
  }, [weight, height, gender]);

 
  const inputOnChange = (event) => {
    const inputValue = event.target.value;
    if(!isNaN(inputValue)) {
      if (event.target.id === 'height') {
        setHeight(parseInt(inputValue));
      } else if (event.target.id === 'weight') {
        setWeight(parseInt(inputValue));
      }
    } else {
      setGender(inputValue);
    }
  };

  const calculateBMI = () => {
    if (weight > 0 && height > 0 && !isNaN(weight) && !isNaN(height) && gender !== '') {
      const heightInMeters = height / 100;
      const bmi = weight / (heightInMeters * heightInMeters);
      setResult(bmi.toFixed(2));
      if (gender === 'male') {
        calculateIdealWeightMan(bmi);
      } else {
        calculateIdealWeightWoman(bmi);
      }
    } else {
      setResult('');
    }
  };

  const calculateIdealWeightMan = () => {
    const lowerLimit = 18.5 * (height / 100) ** 2;
    const upperLimit = 24.9 * (height / 100) ** 2;
    setIdealWeight(`${lowerLimit.toFixed(2)} kg y ${upperLimit.toFixed(2)} kg`);
  };

  const calculateIdealWeightWoman = () => {
    const lowerLimit = 17.5 * (height / 100) ** 2;
    const upperLimit = 23.9 * (height / 100) ** 2;
    setIdealWeight(`${lowerLimit.toFixed(2)} kg y ${upperLimit.toFixed(2)} kg`);
  };

  let healthStatus = '';

  if (gender === 'male') {
    if (result < 18.5) {
      healthStatus = 'bajo peso';
    } else if (result < 24.9) {
      healthStatus = 'peso saludable';
    } else if (result < 29.9) {
      healthStatus = 'sobrepeso';
    } else {
      healthStatus = 'obesidad';
    }
  } else {
    if (result < 17.5) {
      healthStatus = 'bajo peso';
    } else if (result < 23.9) {
      healthStatus = 'peso saludable';
    } else if (result < 28.9) {
      healthStatus = 'sobrepeso';
    } else {
      healthStatus = 'obesidad';
    }
  }

  return (
    <Container id='inicio' className={styles.containerCalculator}>
      <Row className={styles.rowCalculator}>
        <Col className={styles.colTitleCalculator} xs={12} md={6}>
          <h1 className={styles.title}>Calculadora del Índice de Masa Corporal</h1>
          <p className={styles.subTitle}>
            Comprenda mejor su peso en relación con su estatura utilizando nuestra calculadora del <span className={styles.spanHeader}>índice de masa corporal (IMC)</span>. Aunque el IMC no es el único determinante de un peso saludable, ofrece un valioso punto de partida para evaluar su salud y bienestar general.
          </p>
          <p className={styles.subTitle}> Con los resultados, podrás determinar si tu índice de masa corporal se encuentra dentro del <span className={styles.spanHeader}>rango saludable</span>. Si no es saludable se te indicara el rango de <span className={styles.spanHeader}>peso ideal</span> para alcanzar un IMC normal.</p>
        </Col>
       
        <Col className={styles.colInputs} xs={10} md={5}>
          <div>
            <Form.Label className={styles.labelInput}>Sexo</Form.Label>
            <Form.Select
                className={styles.inputSelect}
                onChange={inputOnChange}
                name='gender'
                id="gender"
            >
              <option disabled selected></option>
              <option className={styles.options} name='male' value='male'>Masculino</option>
              <option className={styles.options} name='female' value='female'>Femenino</option>
            </Form.Select>
          </div>

          <div className={styles.divPeso}>
            <Form.Label className={styles.labelInput}>Peso</Form.Label>
            <Form.Control
                className={styles.input}
                autoComplete="off"
                onChange={inputOnChange}
                value={weight}
                min={0}
                placeholder="0 kg"
                type="number"
                name="weight"
                id="weight"
            />
          </div>
            
          <div className={styles.divAltura}>
            <Form.Label className={styles.labelInput}>Altura</Form.Label>
            <Form.Control
                className={styles.input}
                autoComplete="off"
                onChange={inputOnChange}
                value={height}
                min={0}
                placeholder="0 cm"
                type="number"
                name="height"
                id="height"
            />
          </div>

          {result === '' || weight <= 0 || height <= 0 || isNaN(weight) || isNaN(height) ? (
            <div className={styles.divResult}>
              <h2 className={styles.titleResultFail}>¡Bienvenido!</h2>
              <p className={styles.parrafeRecomended}>Ingrese un peso y una altura válidos para poder hacer el cálculo</p>
            </div>
            ) : (
              <div className={styles.divResult}>
                <div className={styles.divTitleResult}>
                  <h2 className={styles.titleResult}>Su IMC es</h2><span className={styles.result}>{result}</span>
                </div>
                <h3 className={styles.parrafeRecomended}>El resultado sugiere que tiene <span className={styles.healthStatus}>{healthStatus}</span>. Su peso ideal esta entre <span className={styles.healthStatus}>{idealWeight}</span></h3>
              </div>
            )}
        </Col>
      </Row>
    </Container>
  );
};

export default Header;


