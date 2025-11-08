import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Car, CircleCheck, Hash, User, Wallet } from 'lucide-react';
import type { ReactNode } from 'react';

type RequestCardProps = {
  customerName: string;
  cost: number;
  status: string;
  requestId: string;
  car: string;
  contactNumber: string;
  onConfirm?: () => void;
};

const InfoBlock = ({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) => (
  <div className="space-y-3">
    <div className="flex items-center gap-3">
      {icon}
      <h3 className="font-semibold text-lg text-foreground">{title}</h3>
    </div>
    <div className="flex flex-col gap-2 pl-[38px] text-sm">{children}</div>
  </div>
);

const InfoItem = ({
  label,
  value,
}: {
  label: string;
  value: string | ReactNode;
}) => (
  <div className="flex items-baseline justify-between gap-4 text-muted-foreground">
    <span className="whitespace-nowrap">{label}:</span>
    <span className="text-right font-medium text-foreground">{value}</span>
  </div>
);

export function RequestCard({
  customerName,
  cost,
  status,
  requestId,
  car,
  contactNumber,
  onConfirm,
}: RequestCardProps) {
  return (
    <Card className="w-full max-w-md bg-card/80 backdrop-blur-sm border-primary/20 shadow-[0_0_1.5rem_hsl(var(--primary)/0.4)]">
      <CardHeader className="items-center text-center">
        <div className="flex items-center gap-2 text-2xl font-bold text-foreground">
          <Car className="size-7 text-primary" />
          <span>AutoCheck24</span>
        </div>
        <CardTitle className="text-2xl font-bold text-foreground pt-2">
          Diagnostikas pasūtījums
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Diennakts izbraukuma diagnostika 24/7
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-lg border border-border bg-background/50 p-4">
          <InfoBlock
            icon={<User className="size-5 text-accent" />}
            title="Klienta dati"
          >
            <InfoItem label="Vārds" value={customerName} />
            <InfoItem
              label="Izmaksas"
              value={
                <span className="flex items-center gap-2">
                  <Wallet className="size-4 text-muted-foreground" /> {cost} €
                </span>
              }
            />
            <InfoItem
              label="Statuss"
              value={
                <span className="flex items-center gap-2 text-accent">
                  <CircleCheck className="size-4" />
                  {status}
                </span>
              }
            />
            <InfoItem
              label="Pieteikuma ID"
              value={
                <span className="flex items-center gap-2 font-mono tracking-wider">
                  <Hash className="size-4 text-muted-foreground" />
                  {requestId}
                </span>
              }
            />
          </InfoBlock>
        </div>

        <div className="rounded-lg border border-border bg-background/50 p-4">
          <InfoBlock
            icon={<Car className="size-5 text-accent" />}
            title="Īpašnieks un automašīna"
          >
            <InfoItem label="Marka un modelis" value={car} />
            <InfoItem label="Kontaktnumurs" value={contactNumber} />
          </InfoBlock>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={onConfirm}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 rounded-lg font-semibold shadow-lg shadow-primary/30 transition-all hover:shadow-primary/50 text-base"
        >
          Apstiprināt pieteikumu
        </Button>
      </CardFooter>
    </Card>
  );
}
