import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { MoveRight } from "lucide-react";


export default function ContactForm() {
  return (
    <aside className="self-stretch md:block h-full px-2 md:px-0">
      <div className="rounded-xl bg-white/10 p-6 backdrop-blur py-10">
        <h2 className="mb-4 text-center text-2xl font-semibold">
          Programa una consulta <br /> gratuita
        </h2>
        <form className="grid gap-3">
          <Input className="rounded-md bg-white/90 text-black h-14" placeholder="Nombre completo" />
          <Input type="email" className="rounded-md bg-white/90 text-black h-14" placeholder="Correo electrónico" />
          <Input type="tel" className="rounded-md bg-white/90 text-black h-14" placeholder="Número de teléfono" />
          <Select>
            <SelectTrigger className="rounded-md bg-white/90 text-black h-14">
              <SelectValue placeholder="Seleccione un tema" />
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
          <Textarea rows={4} className="rounded-md bg-white/90 px-3 py-2 text-black h-28" placeholder="Detalles" />
          <Button type="submit" className="mt-2 rounded-md bg-primary px-4 py-2 font-medium text-white hover:bg-white hover:text-primary cursor-pointer mx-auto">
            Reserve una consulta gratuita
            <MoveRight className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </aside>
  );
}
