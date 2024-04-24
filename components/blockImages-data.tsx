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
        <div className="flex flex-col h-full" data-aos="fade-up"> {/**adicionar um pb-1 e bg-gray-700 se for utilizar os preços em html */}

          <div className="mb-0 max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6" data-aos="fade-up">
            <Image className="max-w-full mx-auto md:max-w-none h-auto" src={srcImage} width={320} height={280} alt="Features 01" />
          </div>
          {/* 
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
          </div> */}

          <div className="flex flex-col text-center font-medium px-2 pt-6 border-gray-700">
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg className="w-6 h-6 me-2 ms-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
              </svg>
              <span className="text-[16px] sm:text-lg w-full text-center">
                Comprar
              </span>
            </button>
          </div>
        </div>
      </Link>
    </div>

  )
}