import React, { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './contributors.module.css';

const Contributors = () => {
  const [contributors, setContributors] = useState([]);

  const fetchContributors = async () => {
    try {
      const response = await fetch(
        'https://api.github.com/repos/deepesh611/omnilangdb/contributors'
      );
      if (!response.ok) {
        const storedData = JSON.parse(localStorage.getItem('contributors'));
        setContributors(storedData);
      } else {
        const data = await response.json();
        const sortedContributors = data.sort(
          (a, b) => b.contributions - a.contributions
        );
        localStorage.setItem(
          'contributors',
          JSON.stringify(sortedContributors)
        );
        setContributors(sortedContributors);
      }
    } catch (error) {
      console.error('Error fetching contributors:', error);
    }
  };

  useEffect(() => {
    fetchContributors();

    const interval = setInterval(() => {
      fetchContributors();
    }, 60000); // Fetch contributors every 60 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="container">
      <Link to="/" className="button button--primary button--lg">
        Home
      </Link>

      <h2 className="hero__title">Contributors</h2>

      <div className="row">
        {contributors.slice(0, 3).map((contributor, index) => (
          <div
            key={contributor.id}
            className={clsx(
              'col col--4',
              index === 0 ? styles.topContributorGold : '',
              index === 1 ? styles.topContributorSilver : '',
              index === 2 ? styles.topContributorBronze : ''
            )}
          >
            <div className="card">
              <div className="card__image">
                <img
                  src={contributor.avatar_url}
                  alt={contributor.login}
                  className="avatar avatar--xl"
                />
              </div>
              <div className="card__body">
                <h4 className="card__title">{contributor.login}</h4>
                <small className="text--primary">{contributor.contributions} contributions</small>
              </div>
              <div className="card__footer">
                <a
                  href={contributor.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--secondary button--sm"
                >
                  <FaGithub size={20} />
                  Visit Profile
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row">
        {contributors.slice(3).map((contributor) => (
          <div key={contributor.id} className="col col--3">
            <div className="card">
              <div className="card__image">
                <img
                  src={contributor.avatar_url}
                  alt={contributor.login}
                  className="avatar avatar--lg"
                />
              </div>
              <div className="card__body">
                <h4 className="card__title">{contributor.login}</h4>
                <small className="text--primary">{contributor.contributions} contributions</small>
              </div>
              <div className="card__footer">
                <a
                  href={contributor.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--secondary button--sm"
                >
                  <FaGithub size={20} />
                  Visit Profile
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text--center margin-top--lg">
        <p>
          Explore creativity through animation. Join us at OmniLangDB and bring your ideas to life!
        </p>
        <a
          href="https://github.com/deepesh611/omnilangdb"
          target="_blank"
          rel="noopener noreferrer"
          className="button button--primary button--lg"
        >
          <FaGithub size={30} />
          Visit GitHub
        </a>
      </div>
    </div>
  );
};

export default Contributors;
