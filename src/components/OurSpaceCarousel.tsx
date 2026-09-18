import * as React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import consultorioUmAsset from "@/assets/consultorio-1.jpg.asset.json";
import consultorioDoisAsset from "@/assets/consultorio-2.jpg.asset.json";
import consultorioTresAsset from "@/assets/consultorio-3.png.asset.json";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const spaces = [
  {
    src: consultorioUmAsset.url,
    alt: "Consultório da VRS Neuropsicologia com mesa de atendimento e mobiliário acolhedor",
  },
  {
    src: consultorioDoisAsset.url,
    alt: "Espaço de atendimento infantil da VRS Neuropsicologia",
  },
  {
    src: consultorioTresAsset.url,
    alt: "Área infantil do consultório com brinquedos e materiais de apoio",
  },
];

export function OurSpaceCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const updateCurrent = () => setCurrent(api.selectedScrollSnap());
    updateCurrent();
    api.on("select", updateCurrent);
    api.on("reInit", updateCurrent);

    return () => {
      api.off("select", updateCurrent);
      api.off("reInit", updateCurrent);
    };
  }, [api]);

  return (
    <section className="bg-cream py-24 md:py-32" aria-labelledby="nosso-espaco-title">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-5 md:mb-14">
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-[0.35em] text-olive">Nosso Espaço</p>
            <h2 id="nosso-espaco-title" className="mt-4 font-serif text-4xl text-olive-deep md:text-5xl">
              Um ambiente pensado para <em>acolher.</em>
            </h2>
          </div>
          <div className="hidden shrink-0 items-center gap-2 sm:flex">
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => api?.scrollPrev()}
              disabled={!api?.canScrollPrev()}
              aria-label="Foto anterior"
              className="rounded-none border-olive/30 bg-transparent text-olive-deep shadow-none"
            >
              <ArrowLeft />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => api?.scrollNext()}
              disabled={!api?.canScrollNext()}
              aria-label="Próxima foto"
              className="rounded-none border-olive/30 bg-transparent text-olive-deep shadow-none"
            >
              <ArrowRight />
            </Button>
          </div>
        </div>

        <Carousel setApi={setApi} opts={{ align: "start" }} aria-label="Fotos do consultório">
          <CarouselContent className="-ml-3 md:-ml-5">
            {spaces.map((space, index) => (
              <CarouselItem key={space.src} className="basis-[88%] pl-3 sm:basis-[72%] md:basis-[58%] md:pl-5">
                <figure>
                  <div className="aspect-[4/5] overflow-hidden bg-muted sm:aspect-[4/3]">
                    <img
                      src={space.src}
                      alt={space.alt}
                      width={768}
                      height={960}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {String(index + 1).padStart(2, "0")} / {String(spaces.length).padStart(2, "0")}
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-6 flex items-center justify-between sm:justify-center">
          <div className="flex gap-2" aria-label={`Foto ${current + 1} de ${spaces.length}`}>
            {spaces.map((space, index) => (
              <Button
                key={space.src}
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => api?.scrollTo(index)}
                aria-label={`Ir para a foto ${index + 1}`}
                aria-current={current === index ? "true" : undefined}
                className="h-8 w-8 rounded-none p-0 hover:bg-transparent"
              >
                <span className={cn("h-px w-6 bg-border", current === index && "bg-olive")} />
              </Button>
            ))}
          </div>
          <div className="flex gap-2 sm:hidden">
            <Button type="button" variant="outline" size="icon" onClick={() => api?.scrollPrev()} disabled={!api?.canScrollPrev()} aria-label="Foto anterior" className="rounded-none border-olive/30 bg-transparent text-olive-deep shadow-none">
              <ArrowLeft />
            </Button>
            <Button type="button" variant="outline" size="icon" onClick={() => api?.scrollNext()} disabled={!api?.canScrollNext()} aria-label="Próxima foto" className="rounded-none border-olive/30 bg-transparent text-olive-deep shadow-none">
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}