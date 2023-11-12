import Container from 'components/Container'
import Button from 'components/Button'
import InfoItem from './InfoItem'

import styles from './TopSection.module.css'

const TopSection = () => {
  return (
    <section className={styles.section}>
      <Container>
        <div className="flex flex-col pt-[112px] pb-[58px]">
          <div className="flex flex-col mb-[174px]">
            <h1 className="text-heading-2 font-bold font-label text-gray-100 w-[500px] mb-8">
              Small Effor Big Gain
            </h1>

            <p className="text-heading-3 text-gray-70 w-[526px] mb-7">
            Succes is the summ of small effort, repeated day in and day out

            </p>

            <Button className="w-[190px]">Lihat Paket</Button>
          </div>

          <div className="flex gap-40 mx-auto">
            <InfoItem label="+2" subLabel="Language" />
            <InfoItem label="+500" subLabel="Course" />
            <InfoItem label="+10" subLabel="Teacher" />
            <InfoItem label="+5.000" subLabel="Pelanggan" />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default TopSection
