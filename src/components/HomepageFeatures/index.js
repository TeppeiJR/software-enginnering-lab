import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Always purr when the code works',
    Svg: require('@site/static/img/1.svg').default,
    description: (
      <>
        Remember to enjoy success when your code works as it should.
      </>
    ),
  },
  {
    title: 'Never deny yourself a rest',
    Svg: require('@site/static/img/2.svg').default,
    description: (
      <>
        Even the best cat programmers need a rest. After all the work, a good day off will be a great reward.
      </>
    ),
  },
  {
    title: 'Always keep your claws sharp',
    Svg: require('@site/static/img/3.svg').default,
    description: (
      <>
        You may need sharp claws to untangle complex tasks. So keep your skills in constant readiness.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
