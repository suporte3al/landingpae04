// export const metadata = {
//   title: 'Martele Profissional',
//   description: 'Martele profissional, a ferramenta ideal para suas obras.',
// }

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import BlockImages from '@/components/blockImages'

export default function Home() {
  return (
    <>
      <Hero />
      <BlockImages />
      <Features />
      <Zigzag />
      <Testimonials />
      <Newsletter />
    </>
  )
}
