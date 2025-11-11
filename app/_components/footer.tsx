import golden from "@/public/golden.png"
import whiskas from "@/public/whiskas.png"
import royal from "@/public/royal.png"
import primier from "@/public/primier.png"
import natural from "@/public/natural.png"
import Image from "next/image"
import { FacebookLogoIcon, InstagramLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react/dist/ssr" 

const brands = [
    { name: "Royal Canin", logo: royal },
    { name: "Golden", logo: golden },
    { name: "Primier", logo: primier },
    { name: "Formula Natural", logo: natural },
    { name: "Whiskas", logo: whiskas },
    { name: "Golden", logo: golden },
]

export function Footer() {
    return (
        <section className="bg-[#E84c3d] py-16 text-white">
            <div className="container mx-auto px-4">
                <div className="border-b border-white/20 pb-8">
                    <h4 className="text-3xl font-semibold mb-8 text-center">Marcas que trabalhamos</h4>

                    <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
                        {brands.map((item, index) => (
                            <div key={index}>
                                < Image 
                                    src={item.logo}
                                    alt={item.name}
                                    width={100}
                                    height={50}
                                    quality={100}
                                    style={{
                                        width: "auto",
                                        height: "auto",
                                    }}
                                    className="object-contain"
                                /> 
                            </div>
                        ))}
                    </div>
                </div>

                <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
                    <div>
                        <h3 className="text-2xl font-semibold mb-2 ">Pet Shop dev</h3>
                        <p className="mb-4">Cuidando do seu melhor amigo com amor e dedicação.</p>
                        <a 
                        className=""
                        target="_blank"
                        href="https://wa.me/558699641994?text=Olá, gostaria de saber mais sobre os serviços do petshop"
                        >
                            Contato via Whatsapp
                        </a>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-2 ">Contato</h3>
                        <p>Email: eumarianamota@gmail.com</p>
                        <p>Telefone: +55 55 55555 5555</p>
                        <p>Rua x, centro, Parnaíba | Piauí</p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-2 ">Redes sociais</h3>
                        <div className="flex gap-4">
                            <a 
                            className=""
                            target="_blank"
                            href="#"
                            >
                                <FacebookLogoIcon className="w-8 h-8"/>
                            </a>

                            <a 
                            className=""
                            target="_blank"
                            href="#"
                            >
                                <InstagramLogoIcon className="w-8 h-8"/>
                            </a>

                            <a 
                            className=""
                            target="_blank"
                            href="#"
                            >
                                <YoutubeLogoIcon className="w-8 h-8"/>
                            </a>
                        </div>    
                    </div>
                </footer>
            </div>
        </section> 
    )
}