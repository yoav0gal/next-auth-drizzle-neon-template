import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Database, Code, PackageOpen } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="geometric-background" />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16">
          <header className="mb-8 text-center">
            <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-foreground md:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                next-auth-drizzle-neon-template
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground">
              Get building what matters, with full control and minimal config.
            </p>
            <div className="flex flex-col items-center gap-6 mt-4">
              <Link
                href="https://github.com/yoav0gal/next-auth-drizzle-neon-template"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 text-lg group">
                  <span className="group-hover:hidden">Start Building</span>
                  <span className="hidden group-hover:block">Clone Me!</span>
                </Button>
              </Link>
              <div className="mt-2 p-6 bg-card rounded-xl shadow-inner text-left max-w-sm w-full md:max-w-md lg:max-w-lg">
                <ul className="list-none p-0 m-0 space-y-3 text-card-foreground">
                  <li className="flex items-start">
                    <span className="mr-3 text-emerald-400 font-bold flex-shrink-0">
                      1.
                    </span>
                    <span>
                      Create{' '}
                      <code className="bg-muted px-1 py-0.5 rounded text-sm text-foreground">
                        .env
                      </code>{' '}
                      or{' '}
                      <code className="bg-muted px-1 py-0.5 rounded text-sm text-foreground">
                        .env.local
                      </code>{' '}
                      from{' '}
                      <code className="bg-muted px-1 py-0.5 rounded text-sm text-foreground">
                        .env.example
                      </code>
                      .
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-emerald-400 font-bold flex-shrink-0">
                      2.
                    </span>
                    <span>
                      Run{' '}
                      <code className="bg-muted px-1 py-0.5 rounded text-sm text-foreground">
                        pnpm db:migrate
                      </code>
                      .
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-emerald-400 font-bold flex-shrink-0">
                      3.
                    </span>
                    <span>Start developing!</span>
                  </li>
                </ul>
              </div>
            </div>
          </header>

          <section className="mb-6">
            <h2 className="mb-6 text-center text-3xl font-bold text-foreground flex items-center justify-center gap-4">
              Powered By
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 justify-items-center">
              {technologies.map((tech) => (
                <Link
                  key={tech.name}
                  href={tech.docUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center group"
                >
                  <div className="logo-container mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-card/50 p-3 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_hsl(var(--foreground)_/_0.3)]">
                    <Image
                      src={tech.logo || '/placeholder.svg'}
                      alt={tech.name}
                      width={50}
                      height={50}
                      className="h-auto max-h-full w-auto max-w-full object-contain"
                    />
                  </div>
                  <span className="text-center text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {tech.name}
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold text-foreground flex items-center justify-center gap-2">
              Out of the Box Features
              <PackageOpen className="h-8 w-8 text-emerald-400" />
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-card/70 border border-transparent hover:border-primary"
                >
                  <div className="mb-4 rounded-full bg-emerald-500/20 p-2 w-fit">
                    <feature.icon className="h-6 w-6 text-emerald-400" />
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

const technologies = [
  {
    name: 'Next.js',
    logo: '/next-js.png',
    docUrl: 'https://nextjs.org/docs',
  },
  {
    name: 'Tailwind CSS',
    logo: '/tailwind.png',
    docUrl: 'https://tailwindcss.com/docs',
  },
  {
    name: 'Neon',
    logo: '/neon.png',
    docUrl: 'https://neon.tech/docs/',
  },
  {
    name: 'Auth.js',
    logo: '/auth-js.png',
    docUrl: 'https://authjs.dev/getting-started',
  },
  {
    name: 'Drizzle ORM',
    logo: '/drizzle.png',
    docUrl: 'https://orm.drizzle.team/docs/overview',
  },
  {
    name: 'shadcn/ui',
    logo: '/shadcn.png',
    docUrl: 'https://ui.shadcn.com/docs',
  },
];

const features = [
  {
    title: 'Authentication',
    description:
      'Pre-configured Auth.js for secure authentication (credentials, OAuth, SSO).',
    icon: ShieldCheck,
  },
  {
    title: 'Database',
    description: 'Integrated PostgreSQL with serverless connectivity.',
    icon: Database,
  },
  {
    title: 'Type-Safe ORM',
    description: 'Type-safe database interactions with Drizzle ORM.',
    icon: Code,
  },
];
