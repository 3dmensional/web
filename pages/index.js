import React, { useState } from 'react'
import Head from 'next/head'
import Modal from 'react-bootstrap/Modal'
import Footer from '../components/footer'
import Icon from '../components/icon'

import '../assets/scss/index.scss'
import '../assets/scss/components/modal.scss'
import '../assets/scss/bootstrap/scss/bootstrap.scss'

import sectionsContent from '../sections-content.json'

const Home = () => {

  const [section, setSection] = useState(null)

  return (
    <div>
      <Head>
        <title>3Dmensional - Marketing agency and IT solutions</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      { console.log(sectionsContent) }

      <Modal
        dialogClassName="section-modal"
        show={section !== null}
        onHide={e => setSection(null)}
      >
        <Modal.Body>
          <div className="iconContainer">
            {
              section && sectionsContent[section].tags.map(tag => (
                <h2 className="handmade-font" key={tag.label}>{tag.label}</h2>
              ))
            }
            <Icon
              name={section && section.charAt(0).toUpperCase() + section.slice(1)}
              size="20vw"
            />
          </div>
          <div className="content-wrapper">
            <h1>{ section }</h1>
            <div className="content-container" dangerouslySetInnerHTML={{
              __html: section && sectionsContent[section].content
            }}/>
          </div>
        </Modal.Body>
      </Modal>

      <button onClick={e => setSection("development")}>Development</button>
      <button onClick={e => setSection("design")}>Design</button>
      <button onClick={e => setSection("marketing")}>Marketing</button>

      <Footer />
    </div>
  )
}

export default Home
