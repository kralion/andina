import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MoveRight, Phone, MessageCircle } from "lucide-react";

interface Service {
  title: string;
  slug: string;
  description: string;
  image: string;
  features?: string[];
}

interface ServiceModalProps {
  service: Service;
  children: React.ReactNode;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, children }) => {
  const getDetailedInfo = (slug: string) => {
    const serviceDetails = {
      "estructuras-metalicas": {
        features: [
          "Techos metálicos",
          "Puertas diseño inox, contraplacadas, pintura imitación madera",
          "Portones corredizos",
          "Pasamanos, escaleras",
          "Pintura, instalación de chapas",
          "Soldadura en general"
        ]
      },
      "puertas-y-portones": {
        features: [
          "Puertas automáticas",
          "Puertas seccionales",
          "Puertas levadizas",
          "Puertas para tiendas, locales, comercios",
          "Mantenimiento preventivo y correctivo"
        ]
      },
      "vidrieria": {
        features: [
          "Mamparas",
          "Puertas de vidrio",
          "Pasamanos de vidrio",
          "Ventanas",
          "Ducha en serie europea",
          "Ventana estructurada",
          "Sistema de mamparas",
          "Muro cortina",
          "Ventanas en serie 38, 25, 85",
          "Vidrio curvo y templados"
        ]
      },
      "drywall": {
        features: [
          "Divisiones interiores modulares",
          "Techos falsos decorativos",
          "Aislamiento térmico y acústico",
          "Acabados listos para pintar",
          "Instalación rápida y limpia",
          "Materiales resistentes a la humedad"
        ]
      },
      "melamina": {
        features: [
          "Closets y vestidores a medida",
          "Reposteros y muebles de cocina",
          "Escritorios y muebles de oficina",
          "Muebles para locales comerciales",
          "Fabricación y montaje"
        ]
      },
      "wall-panel": {
        features: [
          "Texturas en madera y piedra",
          "Instalación para interiores y exteriores",
          "Resistentes a la humedad",
          "Diseños personalizados disponibles"
        ]
      },
      "carpinteria": {
        features: [
          "Puertas contraplacadas",
          "Puertas de madera",
          "Puertas entallados",
          "Para interiores y exteriores",
          "Puertas para casas de campo"
        ]
      },
      "inox": {
        features: [
          "Pasamanos",
          "Puertas",
          "Rejas",
          "Fabricación de barandas para escaleras",
          "Trabajos en acero inoxidable"
        ]
      }
    };

    return serviceDetails[slug as keyof typeof serviceDetails] || {
      features: ["Servicio profesional", "Materiales de calidad", "Garantía incluida"]
    };
  };

  const details = getDetailedInfo(service.slug);

  

  const handleWhatsAppContact = () => {
    const message = `Hola, estoy interesado en el servicio de ${service.title}. ¿Podrían brindarme más información?`;
    const phoneNumber = "51922355411";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePhoneCall = () => {
    window.location.href = "tel:+51922355411";
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0">
        <div className="p-6 border-b">
          <DialogHeader>
            <DialogTitle className="text-2xl text-primary">{service.title}</DialogTitle>
          </DialogHeader>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-120px)] px-6 pb-6 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-gray-100">
          <div className="space-y-6 pt-4">
            <div>
              <h4 className="font-semibold text-lg mb-3 text-primary">¿Qué incluye nuestro servicio?</h4>
              <ul className="space-y-2">
                {details.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <MoveRight className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t pt-4">
              <h4 className="font-semibold text-lg mb-3 text-primary">¿Interesado en este servicio?</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleWhatsAppContact}
                  className="flex items-center justify-center gap-2 bg-primary hover:bg-white hover:text-primary hover:border-primary border cursor-pointer h-10 text-sm md:text-base md:px-6 md:py-2 transition-colors duration-200"
                >
                  <MessageCircle className="w-4 h-4" />
                  Consultar por WhatsApp
                </Button>
                <Button
                  onClick={handlePhoneCall}
                  variant="outline"
                  className="flex items-center justify-center gap-2 cursor-pointer h-10 text-sm md:text-base md:px-6 md:py-2 transition-colors duration-200 hover:bg-primary/90 hover:text-white border-primary border hover:border-primary/80 text-primary"
                >
                  <Phone className="w-4 h-4" />
                  Llamar ahora
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;
