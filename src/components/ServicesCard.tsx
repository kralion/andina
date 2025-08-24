import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import ServiceModal from "./ServiceModal";

interface Service {
  title: string;
  slug: string;
  description: string;
  image: string;
}

interface ServicesCardProps {
  limit?: number;
}

const services: Service[] = [
  {
    title: "Estructuras metálicas",
    slug: "estructuras-metalicas",
    description:
      "Diseñamos y fabricamos estructuras metálicas, para todo tipo de proyectos, como: puertas, portones, metálicas, instalación de puertas metálicas, contraplacado, inox, portones, rejas, techos curvo, y más.",
    image:
      "https://i.ibb.co/S7fQhSrG/andina10.jpg",
  },
  {
    title: "Puertas automáticas",
    slug: "puertas-y-portones",
    description:
      "Fabricamos e instalamos puertas y portones, para cocheras, tiendas, locales, oficinas, etc. Todas nuestras soluciones se adaptan a tus necesidades, garantizando seguridad, estética y resistencia en cada proyecto.",
    image: "https://i.ibb.co/S42MhMyJ/1.jpg",
  },
  {
    title: "Vidriería",
    slug: "vidrieria",
    description:
      "Ofrecemos servicios de vidriería, instalación de mamparas, puertas, aluminio, pasamanos, ventanas, sistema nova, estructurada, ducha en serie europea, ventana estructurada, sistema de mamparas, muro cortina, ventana en serie 38 25, vidrio curvo y templado, y mucho más.",
    image:
      "https://i.ibb.co/nNY27WmK/andina4.jpg",
  },
  {
    title: "Drywall",
    slug: "drywall",
    description:
      "Ofrecemos soluciones de Drywall para divisiones, paredes y techos, con materiales de alta calidad y acabados profesionales, garantizando durabilidad y resistencia.",
    image:
      "https://i.ibb.co/FkQxndsv/andina.jpg",
  },
  {
    title: "Melamina",
    slug: "melamina",
    description:
      "Gran variedad de muebles en melamina, diseño y ensamblaje, para locales comarciales. Diseño y fabricación de elementos decorativos, fabricación de muebles, closets, reposteros, puertas, escritorios a medida, garantía de calidad en la fabricación y montaje.",
    image:
      "https://miroytengo.es/blog/wp-content/uploads/2018/06/miroytengo-que-es-melamina-muebles-1.jpg",
  },
  {
    title: "Wall Panel",
    slug: "wall-panel",
    description:
      "Variedad de diseños, colores, texturas interiores y exteriores, decoración de paredes, y mucho más.",
    image:
      "https://images.unsplash.com/photo-1701422055922-0df2da90946d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Carpintería",
    slug: "carpinteria",
    description:
      "Fabricamos y instalamos puertas contraplacadas, puertas de maderas, puertas entalladas, interiores y exteriores. Puertas excelentes para interiores, elegancia en casas de campo, y mucho más.",
    image:
      "https://images.unsplash.com/photo-1626081063434-79a2169791b1?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Inox",
    slug: "inox",
    description:
      "Fabricamos pasamanos, puertas, rejas, protectores, fabricación de barandas para escaleras, y más trabajos en acero inoxidable a nivel nacional.",
    image:
      "https://www.aceroscomex.com.pe/wp-content/uploads/2023/11/plancha-inoxidable.webp",
  },
];

const ServicesCard: React.FC<ServicesCardProps> = ({ limit }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const getServicesToShow = () => {
    if (!limit) return services;
    
    if (isSmallScreen) {
      return services.slice(0, Math.min(2, limit));
    } else {
      return services.slice(0, limit);
    }
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  const displayedServices = getServicesToShow();

  return (
    <section className="bg-white max-w-7xl mx-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8">
          {displayedServices.map((service) => (
            <div
              key={service.slug}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-white to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl md:text-3xl text-gray-700 drop-shadow-sm">
                    {service.title}
                  </h3>
                </div>
              </div>
              <div className="flex flex-col flex-1 p-6">
                <p className="text-gray-500 text-base">
                  {isSmallScreen 
                    ? truncateText(service.description, 80) 
                    : service.description}
                </p>
                <div className="mt-auto">
                  <ServiceModal service={service}>
                    <Button className="w-fit mt-6 h-10 cursor-pointer hover:bg-white hover:text-primary border hover:border-primary text-sm md:text-base md:px-6 md:py-2">
                      Ver más
                      <MoveRight className="w-4 h-4" />
                    </Button>
                  </ServiceModal>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCard;
