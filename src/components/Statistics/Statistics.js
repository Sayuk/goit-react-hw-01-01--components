import PropTypes from 'prop-types';
import styles from './Statistics.module.css';


 const Statistics = () => {
const stats = [
  { "id": "id-1", "label": ".docx", "percentage": 22 },
  { "id": "id-2", "label": ".pdf", "percentage": 4 },
  { "id": "id-3", "label": ".mp3", "percentage": 17 },
  { "id": "id-4", "label": ".psd", "percentage": 47 },
  { "id": "id-5", "label": ".pdf", "percentage": 10 }
]
    
        return <section class={styles.statistics}>
            <h2 class={styles.title}>Upload stats</h2>
             <ul class={styles.statList}>
            {stats.map(({ id, label, percentage }) => (
       
                    <li key={id} class={styles.item}>
                        <span class={styles.label}>{label}</span>
                        <span class={styles.percentage}>{percentage}</span>
                    </li>         
      
     
            ))}
                  </ul>
 

</section>

};

export default Statistics;


Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
