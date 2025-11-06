import { Card } from '@/components/card';
import {
  PageDescription,
  PageHeader,
  PageHeading,
  PageWrapper,
} from '@/features1/page';

import { ComponentForm } from './form';

export default function Page() {
  return (
    <PageWrapper>
      <PageHeader>
        <PageHeading>Contact us</PageHeading>
        <PageDescription>
          Si vous avez des questions spécifiques ou souhaitez demander plus
          d’informations sur le Lycée Comte de Foix, veuillez remplir le
          formulaire de contact ci-dessous. Merci de fournir les informations
          suivantes afin que nous puissions mieux comprendre vos besoins :
        </PageDescription>
      </PageHeader>
      <Card className="relative bg-background p-8">
        <ComponentForm />
      </Card>
    </PageWrapper>
  );
}
