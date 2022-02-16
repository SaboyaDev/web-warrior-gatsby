import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Banner from '../../static/assets/banner'
import * as styles from '../styles/home.module.css'

const Home = () => {
  const { header, btn } = styles
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Design</h2>
          <h3>Develop Deploy</h3>
          <p>UX designer and web developer based in New Jersey</p>
          <Link className={btn} to='/projects'>
            My Portfolio Projects
          </Link>
        </div>
        <Banner />
      </section>
    </Layout>
  )
}

export default Home
