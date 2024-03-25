import { TestimonialsData } from "./testimonials-data";
import TestimonialImage01 from '@/public/images/testimonial-01.jpg'
import TestimonialImage02 from '@/public/images/testimonial-02.jpg'
import TestimonialImage03 from '@/public/images/testimonial-03.jpg'

const data = [
  {
    srcImage: TestimonialImage01,
    author: 'Delavex',
    Testimonial: 'A melhor parte em comprar no Atacado do Lojista é que estamos cientes de que o preço será o melhor do mercado, e teremos sempre um atendimento de ponta!'
  },
  {
    srcImage: TestimonialImage02,
    author: 'Whoami',
    Testimonial: 'A melhor parte em comprar no Atacado do Lojista é que estamos cientes de que o preço será o melhor do mercado, e teremos sempre um atendimento de ponta!'
  },
  {
    srcImage: TestimonialImage03,
    author: 'DevAlex',
    Testimonial: 'A melhor parte em comprar no Atacado do Lojista é que estamos cientes de que o preço será o melhor do mercado, e teremos sempre um atendimento de ponta!'
  }
]

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Quem comprou aprova</h2>
            <p className="text-xl text-gray-500">Satisfação garantida! Melhores preços do mercado — Entregamos para todo o Brasil com 5% de desconto em compras feitas no pix.</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
            {
              data.map((item, index) => <TestimonialsData
                key={index}
                srcImage={item.srcImage}
                author={item.author}
                testimonial={item.Testimonial}
              />)
            }

          </div>

        </div>
      </div>
    </section>
  )
}
