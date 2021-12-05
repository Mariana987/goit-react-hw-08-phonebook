import { ImSpinner } from "react-icons/im";
import styles from "./Loader.module.css";

export default function Loader() {
    return (
        <div className="spinner">
            <div className={styles.spin}>
                <ImSpinner size="32" className="icon-spin" />
                Loading...
            </div>
        </div>
    );
}