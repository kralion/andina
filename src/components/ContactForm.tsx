import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { MoveRight } from "lucide-react";
import { openWhatsApp, type FormData } from "@/utils/whatsapp";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    telefono: "",
    servicio: "",
    detalles: "",
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsApp(formData);
    setFormData({
      nombre: "",
      telefono: "",
      servicio: "",
      detalles: "",
    });
  }

  return (
    <aside className="self-stretch md:block h-full px-2 md:px-0">
      <div className="rounded-xl bg-white/10 p-6 backdrop-blur py-10">
        <h2 className="mb-4 text-center text-2xl font-semibold">
          Programa una consulta <br /> gratuita
        </h2>
        <form className="grid gap-3" onSubmit={handleSubmit}>
          <Input 
            className="rounded-md bg-white/90 text-black h-14" 
            placeholder="Nombre completo" 
            value={formData.nombre}
            onChange={e => handleInputChange("nombre", e.target.value)}
            required
          />
          <Input 
            type="tel" 
            className="rounded-md bg-white/90 text-black h-14" 
            placeholder="Número de teléfono" 
            value={formData.telefono}
            onChange={e => handleInputChange("telefono", e.target.value)}
            required
          />
          <Select onValueChange={(value) => handleInputChange("servicio", value)}>
            <SelectTrigger className="rounded-md bg-white/90 text-black h-14">
              <SelectValue placeholder="Seleccione el servicio que desea adquirir" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Carpintería">Carpintería</SelectItem>
              <SelectItem value="Cerrajería">Cerrajería</SelectItem>
              <SelectItem value="Drywall">Drywall</SelectItem>
              <SelectItem value="Pintura">Pintura</SelectItem>
              <SelectItem value="Vidriería">Vidriería</SelectItem>
              <SelectItem value="Otro">Otro</SelectItem>
            </SelectContent>
          </Select>
          <Textarea 
            rows={4} 
            className="rounded-md bg-white/90 px-3 py-2 text-black h-28" 
            placeholder="Detalles" 
            value={formData.detalles}
            onChange={e => handleInputChange("detalles", e.target.value)}
          />
          <Button 
            type="submit" 
            className="mt-2 rounded-md bg-primary px-4 py-2 font-medium text-white hover:bg-white hover:text-primary cursor-pointer mx-auto"
            disabled={!formData.nombre || !formData.telefono || !formData.servicio}
          >
            Reserve una consulta gratuita
            <MoveRight className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </aside>
  );
}
