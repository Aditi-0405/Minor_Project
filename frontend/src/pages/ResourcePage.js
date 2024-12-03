import React from 'react';
import styles from '../styles/ResourcesPage.module.css';

const ResourcesPage = () => {
    return (
        <div className={styles.resourcesContainer}>
            <h1 className={styles.title}>Additional Resources</h1>
            <p className={styles.intro}>
                Explore a curated list of resources to deepen your understanding of optimization concepts and applications.
            </p>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Books</h2>
                <ul className={styles.resourcesList}>
                    <li>
                        <strong>Optimization in Operations Research</strong> by Ronald L. Rardin
                    </li>
                    <li>
                        <strong>Introduction to Linear Optimization</strong> by Dimitris Bertsimas and John N. Tsitsiklis
                    </li>
                    <li>
                        <strong>Multi-Objective Evolutionary Algorithms</strong> by Kalyanmoy Deb
                    </li>
                </ul>
            </div>
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Online Tutorials</h2>
                <ul className={styles.resourcesList}>
                    <li>
                        <a href="https://www.khanacademy.org/math/ncert-class-12/x7ce8ca9c5869750b:linear-programming/x7ce8ca9c5869750b:untitled-781" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                            Khan Academy: Linear Programming
                        </a>
                    </li>
                    <li>
                        <a href="https://www.udemy.com/course/firefly-optimization-algorithm-in-matlab/?utm_source=bing&utm_medium=udemyads&utm_campaign=BG-Search_DSA_Beta_Prof_la.EN_cc.India" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                            Udemy: Optimization Algorithms
                        </a>
                    </li>
                </ul>
            </div>
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Interactive Tools</h2>
                <ul className={styles.resourcesList}>
                    <li>
                        <a href="https://www.desmos.com/calculator" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                            Desmos Optimization Playground
                        </a>
                    </li>
                    <li>
                        <a href="https://www.geogebra.org/classic" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                            Geogebra: Linear Optimization Tool
                        </a>
                    </li>
                </ul>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Useful Websites</h2>
                <ul className={styles.resourcesList}>
                    <li>
                        <a href="https://optimization-online.org/" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                            Optimization Online
                        </a>
                    </li>
                    <li>
                        <a href="https://or.stackexchange.com/" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                            Operations Research Stack Exchange
                        </a>
                    </li>
                    <li>
                        <a href="https://math.stackexchange.com/" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                            Mathematics Stack Exchange
                        </a>
                    </li>
                    <li>
                        <a href="https://www.gurobi.com/" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                            Gurobi Optimization
                        </a>
                    </li>
                    <li>
                        <a href="https://www.sfu.ca/~ssurjano/optimization.html" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                            Optimization Test Problems and Datasets
                        </a>
                    </li>
                    <li>
                        <a href="https://pymoo.org/problems/multi/zdt.html" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                            Multi-Objective Optimization in Python
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ResourcesPage;
