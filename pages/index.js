import Head from 'next/head';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import styles from '../styles/Home.module.css';

export const getServerSideProps = async () => {
  const results = await fetch(`${process.env.BASE_URL}/api/services`);
  const data = await results.json();

  return {
    props: {
      data,
    },
  };
};

export default function Home({ data }) {
  console.log({ data });
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <ul>
          {data?.map((item) => (
            <li key={item.id} className={styles.card}>
              <span className={styles.title}>{item.title}</span>
              <p className={styles.description}>{item.body}</p>
            </li>
          ))}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
