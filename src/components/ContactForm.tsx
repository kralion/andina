import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

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
              <SelectItem value="remodelacion">Remodelación</SelectItem>
              <SelectItem value="mantenimiento">Mantenimiento</SelectItem>
              <SelectItem value="otro">Otro</SelectItem>
            </SelectContent>
          </Select>
          <Textarea rows={4} className="rounded-md bg-white/90 px-3 py-2 text-black h-28" placeholder="Detalles" />
          <Button type="submit" className="mt-2 rounded-md bg-red-600 px-4 py-2 font-medium text-white hover:bg-red-700">
            Reserve una consulta gratuita
          </Button>
        </form>
      </div>
    </aside>
  );
}
