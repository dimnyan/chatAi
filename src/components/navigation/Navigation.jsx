import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Navigation.module.css";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

const NavigationComponent = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2>Chats</h2>
      </div>
      <div className={styles.chatListContainer}>
        <p className={styles.chatMonthPeriode}>October</p>
        <button
          className={`${styles.chatContainer} ${styles.activeChatContainer}`}
        >
          <div>
            <p className={styles.chatTitle}>The First Chat</p>
            {/* <p className={styles.chatDate}>12 October 2024</p> */}
          </div>
          <button className={styles.moreButton}>
            <FontAwesomeIcon icon={faEllipsisVertical} color="white" />
          </button>
        </button>

        <button className={styles.chatContainer}>
          <div>
            <p className={styles.chatTitle}>The Second chat</p>
            {/* <p className={styles.chatDate}>11 October 2024</p> */}
          </div>
          <button className={styles.moreButton}>
            <FontAwesomeIcon icon={faEllipsisVertical} color="white" />
          </button>
        </button>
      </div>
    </div>
  );
};

export default NavigationComponent;
