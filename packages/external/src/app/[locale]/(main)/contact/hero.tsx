import Image from 'next/image';
import { Clock, LocateIcon, Mail, Phone } from 'lucide-react';
import { Badge } from '@/components/badge';
import { Card } from '@/components/card';

interface HeroProps {
  badge: string;
  title: string;
  description: string;
  contact?: boolean;
}

const contactData = [
  {
    label: 'hello@lyceecomtefoix.ad',
    icon: Mail,
  },
  {
    label: ' +376 123 456',
    icon: Phone,
  },
  {
    label: 'Andorre-la-Vieille, Principauté d’Andorre',
    icon: LocateIcon,
  },
  {
    label: 'Horaires d’ouverture : 9h - 18h',
    icon: Clock,
  },
];

export const Hero = (props: HeroProps) => {
  return (
    <Card className="relative flex w-full items-center justify-around gap-10 bg-background p-8 py-20 max-lg:flex-col max-lg:py-12">
      {/* <Image
        src="/svg/hero-icon.svg"
        alt="Hero-icon"
        width={100}
        height={100}
        className="absolute top-0 left-0 max-lg:hidden"
      /> */}
      <div className="space-y-5">
        {/* <Badge className="bg-background">{props.badge}</Badge> */}
        <h2 className="text-4xl font-bold">{props.title}</h2>
      </div>
      <div>
        <p className="max-w-xl">{props.description}</p>
        {props.contact && (
          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
            {contactData.map((contact, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-lg border-2 p-2 text-sm font-semibold"
              >
                <div className="rounded-lg border-2 bg-blue-300 p-2">
                  <contact.icon size={20} />
                </div>
                <p>{contact.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};
