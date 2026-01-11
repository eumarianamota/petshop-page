import Image from 'next/image'
import about1Img from '@/public/about-1.png'
import about2Img from '@/public/about-2.png'
import { Check, MapPin } from 'lucide-react'
import { WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr'

export function About () {
    return (
        <section className='bg-[#FDF6ec] py-16'>
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative" data-aos="zoom-in-up">
                        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                            <Image 
                                src={about1Img}
                                alt="Imagem de um cachorro"
                                fill
                                quality={100}
                                className='object-cover hover:scale-110 duration-300'
                            />
                        </div>

                        <div className="absolute w-40 h-40 right-4 bottom-8 border-4 overflow-hidden rounded-lg border-white">
                            <Image
                                src={about2Img}    
                                alt="Imagem de um gato"
                                fill
                                quality={100}
                                priority
                            />
                        </div>
                    </div>

                    <div className="space-y-6 mt-10">
                        <h2 className='text-4xl font-bold' data-aos="fade-down">SOBRE</h2>
                        <p>Nós acreditamos que pets não são apenas animais de estimação, são membros da família. Nossa história começou com um desejo simples: criar um refúgio onde a saúde e a felicidade dos animais fossem a prioridade absoluta.</p>
                        
                        <ul className='space-y-4'>
                            <li className='flex items-enter gap-2'>
                                <Check className='text-red-500' />
                                Aberto desde 2006.
                            </li>

                            <li className='flex items-enter gap-2'>
                                <Check className='text-red-500' />
                                Equipe com mais de dez veterinários.
                            </li>

                            <li className='flex items-enter gap-2'>
                                <Check className='text-red-500' />
                                Qualidade é nossa prioridade.
                            </li>
                        </ul>

                        <div className="flex gap-2">
                            <a 
                            target='_blank'
                            href={`https://wa.me/556799998800?text=Olá, Mariana, tudo bem? \nVim pela landing page de Petshop desenvolvida por você.`}
                            className='bg-[#e84c3d] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md hover:scale-102 duration-300'>
                                <WhatsappLogoIcon className='w-5 h-5 text-white'/> Contato via Whatsapp
                            </a>

                            <a 
                            target="_blank"
                            href="#"
                            className='flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md'>
                                <MapPin className='w-5 h-5 text-black' />
                                Endereço da loja
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        )
}