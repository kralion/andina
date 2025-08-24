export interface FormData {
  nombre: string;
  ubicacion: string;
  servicio: string;
  detalles: string;
}

export const formatWhatsAppMessagee = (formData: FormData) => {
  return `Hola! Me gustaría reservar una consulta gratuita.
  *Información de contacto:*
  • Nombre: ${formData.nombre}
  • Ubicación: ${formData.ubicacion}
  • Servicio de interés: ${formData.servicio}
  • Detalles: ${formData.detalles}

  ¿Podrían contactarme para coordinar la consulta?`;
};

export const openWhatsApp = (formData: FormData) => {
  const message = formatWhatsAppMessagee(formData);
  const numeroWhatsApp = "51922355411";
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};
