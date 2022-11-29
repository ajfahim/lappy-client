import React from 'react';
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";


const NotFound = () => {
    return (
        <div className={`${styles.page_404} bg-white`}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className="col-sm-12">
                        <div className="col-sm-12 col-sm-offset-1  text-center">
                            <div className={styles.four_zero_four_bg}>
                                <h1 className="text-center ">404</h1>
                            </div>

                            <div className={styles.contant_box_404}>
                                <h3 className={styles.h2}>Look like you're lost</h3>

                                <p>the page you are looking for not avaible!</p>

                                <Link to="/" className="btn btn-accent">
                                    Go to Home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;