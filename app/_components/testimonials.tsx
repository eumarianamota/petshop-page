"use client"

import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import tutor1 from "@/public/tutor1.png"
import tutor2 from "@/public/tutor2.jpg"
import tutor3 from "@/public/tutor3.jpg"
import Image from "next/image"

const testimonials = [
    {
        content: "O serviço de hotel para pets foi uma experiência incrível! Precisei viajar e fiquei tranquilo sabendo que o Thor estava sendo bem cuidado. Recebi fotos e atualizações diárias, e ele voltou para casa super feliz! Sem dúvida, o melhor petshop da região.",
        author: "Rafael",
        role: "Tutor do Thor (Bulldog Francês)",
        image: tutor1,
    },

    {
        content: "Desde que comecei a levar a Luna para banho e tosa aqui, ela nunca esteve tão feliz! O atendimento é impecável, os profissionais são super cuidadosos e sempre deixam minha peluda linda e cheirosa. Recomendo de olhos fechados!",
        author: "Mariana Sousa",
        role: "Tutora da Luna",
        image: tutor2,
    },
    {
        content: "Meus gatos nunca gostaram de sair de casa, mas o atendimento nesse petshop fez toda a diferença. A equipe é muito paciente e cuidadosa, e o serviço de banho especializado para felinos foi maravilhoso! Agora sei onde confiar o cuidado deles.",
        author: "Camila fernandes",
        role: "Tutora da Mel e do Max",
        image: tutor3,
    },
]

export function Testimonials() {
    const [emblaref, emblaApi] = useEmblaCarousel({
        loop: true,
    })

    function scrollPrev() {
        emblaApi?.scrollPrev()
    }

    function scrollNext() {
        emblaApi?.scrollNext()
    }

    return (
        <section className="bg-[#FFD449] py-16">
            <div className="container px-4 mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-down">Depoimentos dos nossos clientes</h2>

                <div className="relative mas-w-4xl mx-auto" data-aos="zoom-in-up">
                    <div className="overflow-hidden" ref={emblaref}>
                        <div className="flex">
                            {testimonials.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                                    <article className="bg-[#1e293b] text-white  select-none rounded-2xl p-6 space-y-4h-full flex flex-col">
                                        <div className="flex flex-col items-center space-y-4">
                                            <div className="relative w-24 h-24">
                                                <Image 
                                                    src={item.image}
                                                    alt={item.author}
                                                    fill
                                                    sizes="96px"
                                                    className="object-cover rounded-full"
                                                />
                                            </div>

                                            <p className="text-center py-4 md:px-16 text-gray-200"> {item.content} </p>

                                            <div className="flex gap-5 justify-center">
                                                <p className=" text-sm text-gray-300" >{item.author}</p>
                                                <p className="text-sm text-gray-300 ">{item.role}</p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>


                    <button 
                    onClick={scrollPrev}
                    className="bg-white flex items-center justify-center rounded-full shadow-ld w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10">
                        < ChevronLeft className="w-6 h-6 text-[#1e293b]"
                        />
                    </button>

                    <button
                    onClick={scrollNext}
                    className="bg-white flex items-center justify-center rounded-full shadow-lg w-8 h-10 absolute -right-4 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
                    >
                        < ChevronRight className="w-6 h-6 text-[#1e293b]"
                        />
                    </button>
                </div>
            </div>
        </section>
    )
}