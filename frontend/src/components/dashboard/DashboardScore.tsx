import styles from "./dashboardScore.module.css";

const DashboardScore = () => {
  // const roundedAverageScore = calculateAverageScore(feedbackCount);

  return (
    <div className={`${styles["dashboard-card"]}`}>
      <h3>Average score</h3>
      <div className={`${styles["dashboard-score"]}`}>
        <span className={`${styles["score"]}`}> 4.8</span>
      </div>

      <div className={`${styles["dashboard-answers"]}`}>
        <div className={`${styles["flex-between"]}`}>
          <p>Answered "Awesome" 😍</p>
          <p>10</p>
        </div>

        <div className={`${styles["flex-between"]}`}>
          <p>Answered "Good" 😄</p>
          <p>10</p>
        </div>

        <div className={`${styles["flex-between"]}`}>
          <p>Answered "Okey" 🙂</p>
          <p>10</p>
        </div>

        <div className={`${styles["flex-between"]}`}>
          <p>Answered "Bad" 🙁</p>
          <p>10</p>
        </div>

        <div className={`${styles["flex-between"]}`}>
          <p>Answered "Terrible" 😠</p>
          <p>10</p>
        </div>

        <div className={`${styles["flex-between"]}`}>
          <p>
            <b>Total response</b>
          </p>
          <p>10</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardScore;
