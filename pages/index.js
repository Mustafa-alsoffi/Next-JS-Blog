import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Alert from '../components/alert'
import utilStyles from '../styles/utils.module.css'
import React, {useState} from 'react';
import { getSortedPostsData } from '../lib/posts'



export default function Home({allPostsData}) {


  const [bol, setBol] = useState(false);

  return (
    <Layout home>
      <Alert type={bol ? 'success' : 'error'}>
      <Head>…</Head>
      <section className={utilStyles.headingMd}>…</section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
         {
        allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
      </ Alert>
      <div>
            <button style={{backgroundColor: 'gray', width: '40px', height: '40px'}} onClick={() => setBol(!bol)}></button>
      </div>

    </Layout>
  )
}

export async function getStaticProps() {

  const allPostsData = getSortedPostsData();
 
  return {
    props: {
      allPostsData
    }
 
  }
}