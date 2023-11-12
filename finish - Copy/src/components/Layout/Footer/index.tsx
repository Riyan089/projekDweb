import React from 'react'
import Image from 'next/image'

import Container from 'components/Container'
import FooterInfo from './FooterInfo'

import styles from './Footer.module.css'

import traveloLogo from 'public/assets/logo.png'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container size="lg">
        <div className="flex bg-white p-16">
          <figure>
            <Image
              src={traveloLogo}
              alt="Travelo Logo"
              placeholder="blur"
              height="98"
              width="206"
            />
          </figure>

          <div className="flex flex-1 justify-between ml-[106px]">
            <FooterInfo
              title="Info"
              content={[
                {
                  label: 'Tentang kami',
                  href: '/',
                },
                {
                  label: 'Testimonial',
                  href: '/',
                },
                {
                  label: 'Kontak',
                  href: '/',
                },
              ]}
            />

            <FooterInfo
              title="Perusahaan"
              content={[
                {
                  label: 'Syarat & Ketentuan',
                  href: '/',
                },
                {
                  label: 'Kebijakan privasi',
                  href: '/',
                },
                {
                  label: 'Blog',
                  href: '/',
                },
                {
                  label: 'Bantuan pelayanan',
                  href: '/',
                },
              ]}
            />

            <FooterInfo
              title="Kontak"
              content={[
                'Balikpapan, Kalimantan Timur',
                'Indonesia',
                '(022)8080808',
                'contact@email.com',
              ]}
            />
          </div>
        </div>
      </Container>

      <div className="bg-blue-100 p-3">
        <p className="text-heading-5 text-white font-bold text-center">
          Copyright 2023 Nama Brand. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
