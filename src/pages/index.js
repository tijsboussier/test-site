import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage
          alt="Picture of my father as a young boy"
          src="../images/vake.jpg"
        />
      </Layout>
    </main>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage  