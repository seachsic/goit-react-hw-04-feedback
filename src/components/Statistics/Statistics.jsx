import PropTypes from 'prop-types';
import css from './Statistics.module.css'; 


const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    
    return (  
        <ul className={css.listStatistics}>
            <li className={css.statisticsItem}>Good: {good}</li>
            <li className={css.statisticsItem}>Neutral: {neutral} </li>
            <li className={css.statisticsItem}>Bad: {bad}</li>
            <li className={css.statisticsItem}>Total: {total}</li>
            <li className={css.statisticsItem}>Positive feedbacks: {positivePercentage}%</li>
        </ul>
    )                    
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
};

export default Statistics;
