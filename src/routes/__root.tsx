import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "VRS Neuropsicologia · Avaliação Neuropsicológica em São Paulo" },
      { name: "description", content: "Clínica VRS Neuropsicologia em São Paulo. Avaliação neuropsicológica, psicoterapia e reabilitação cognitiva com a Psicóloga Viviane Rocha (CRP 06/167235). Atendimento presencial e online." },
      { name: "author", content: "VRS Neuropsicologia" },
      { name: "keywords", content: "avaliação neuropsicológica em são paulo, neuropsicologia, psicoterapia, reabilitação cognitiva, neuropsicóloga sp" },
      { property: "og:title", content: "VRS Neuropsicologia · Avaliação Neuropsicológica em São Paulo" },
      { property: "og:description", content: "Clínica VRS Neuropsicologia em São Paulo. Avaliação neuropsicológica, psicoterapia e reabilitação cognitiva com a Psicóloga Viviane Rocha (CRP 06/167235). Atendimento presencial e online." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "VRS Neuropsicologia" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "VRS Neuropsicologia · Avaliação Neuropsicológica em São Paulo" },
      { name: "twitter:description", content: "Clínica VRS Neuropsicologia em São Paulo. Avaliação neuropsicológica, psicoterapia e reabilitação cognitiva com a Psicóloga Viviane Rocha (CRP 06/167235). Atendimento presencial e online." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6220b44b-8cf4-4b0a-832d-4d6f5aa5dc0f/id-preview-7199b9b0--10a78952-1ea1-4730-bb74-7bcd84ba61f2.lovable.app-1779394745337.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6220b44b-8cf4-4b0a-832d-4d6f5aa5dc0f/id-preview-7199b9b0--10a78952-1ea1-4730-bb74-7bcd84ba61f2.lovable.app-1779394745337.png" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap" },
      { rel: "stylesheet", href: appCss },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          name: "VRS Neuropsicologia",
          description: "Avaliação Neuropsicológica em São Paulo. Psicoterapia, reabilitação cognitiva e orientação familiar e escolar.",
          address: { "@type": "PostalAddress", addressLocality: "São Paulo", addressRegion: "SP", addressCountry: "BR" },
          telephone: "+55-11-96943-8599",
          email: "psico.vrs@gmail.com",
          medicalSpecialty: "Neuropsychology",
          areaServed: "São Paulo",
        }),
      },
      {
        children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-K9Z749BG');`,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K9Z749BG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
