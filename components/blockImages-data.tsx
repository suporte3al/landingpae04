import Image, { StaticImageData } from "next/image"
import Link from "next/link"

type PropsBlockImages = {
  srcImage: string | StaticImageData
  oldPrice: number
  newPrice: number
}

export const BlockImagesData = ({ srcImage, oldPrice, newPrice }: PropsBlockImages) => {
  return (
    <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
      <Link href="https://www.atacadodolojista.com.br/martelete-profissional-220v-800w-sds-modelo--rh80p-max-tools/p">
        <div className="flex flex-col h-full pb-1 bg-gray-700" data-aos="fade-up">

          <div className="mb-0 max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6" data-aos="fade-up">
            <Image className="max-w-full mx-auto md:max-w-none h-auto" src={srcImage} width={320} height={280} alt="Features 01" />
          </div>

          <div className="text-gray-700 flex flex-col text-center font-medium px-2 pt-6 border-gray-700">
            <div className="text-sm">
              <p className="text-gray-200">De<span className="text-purple-600 line-through"> R$ {`${oldPrice}`}</span>
              </p>
            </div>
            <div>
              <p className="text-gray-200">Por
                <span className="text-gray-200"> R$ {`${newPrice}`}</span>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>

  )
}