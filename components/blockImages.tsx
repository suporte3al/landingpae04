import Image01 from '@/public/images/furadeira1.png'
import Image02 from '@/public/images/furadeira2.png'
import Image03 from '@/public/images/furadeira3.png'
import Image04 from '@/public/images/furadeira4.png'
import Image05 from '@/public/images/furadeira5.png'
import Image06 from '@/public/images/furadeira6.png'
import { BlockImagesData } from './blockImages-data'


const data = [
  {
    srcImage: Image01,
    oldPrice: 258.00,
    newPrice: 226.15
  },
  {
    srcImage: Image02,
    oldPrice: 189.00,
    newPrice: 157.40
  },
  {
    srcImage: Image03,
    oldPrice: 250.00,
    newPrice: 220.09
  },
  {
    srcImage: Image04,
    oldPrice: 460.00,
    newPrice: 437.00
  },
  {
    srcImage: Image05,
    oldPrice: 460.00,
    newPrice: 437.00
  },
  {
    srcImage: Image06,
    oldPrice: 460.00,
    newPrice: 437.00
  },
]

export default function BlockImages() {
  return (
    <section className="bg-white" id='oferta'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">O melhor do Atacado do Lojista nas suas mãos.</h2>
            <p className="text-xl text-gray-400">Com sua força robusta e design ergonômico, você pode perfurar e cinzelar com facilidade e eficiência.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>
            {
              data.map((item, index) => <BlockImagesData
                key={index}
                srcImage={item.srcImage}
                oldPrice={item.oldPrice}
                newPrice={item.newPrice}
              />)
            }

          </div>

        </div>
      </div>
    </section>
  )
}
