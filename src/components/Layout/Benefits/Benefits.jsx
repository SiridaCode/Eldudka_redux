import Container from '../../Container/Container';
import classes from './Benefits.module.scss';

const Benefits = () => {
    return (
        <Container>
        <div className={classes.benefitsContainer}>
        <div className={classes.benefitsElement}>
          <img src='../benefits1.png' />
          <div className={classes.benefitsText}>Профессиональная консультация</div>
        </div>
        <div className={classes.benefitsElement}>
          <img src='../benefits2.png' />
          <div className={classes.benefitsText}>Только оригинал</div>
        </div>
        <div className={classes.benefitsElement}>
          <img src='../benefits3.png' />
          <div className={classes.benefitsText}>Ремонт девайсов</div>
        </div>
        <div className={classes.benefitsElement}>
          <img src='../benefits4.png' />
          <div className={classes.benefitsText}>Система лояльности</div>
        </div>
        </div>
    </Container>
    )
}

export default Benefits