import { Button } from '@/components/button';

export const ShowcasePage = () => {
  return (
    <div className="flex w-full flex-col items-center justify-start gap-12">
      {[1, 2, 3].map((value, index) => (
        <div
          className="rounded-base bg-secondary-background shadow-shadow flex w-full flex-col border-2 border-border p-[15px]"
          key={index}
        >
          <div className="flex w-full flex-row items-start justify-center gap-6">
            <div className="rounded-base aspect-square w-1/3 border-2 border-border"></div>
            <div className="flex h-full flex-1 flex-col justify-between gap-2">
              <div className="flex min-h-full flex-col items-center gap-2">
                <div className="w-full text-center text-3xl font-bold">
                  MELORIN
                </div>
                <p className="">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officiis, velit culpa? Ut eligendi beatae reiciendis aliquam
                  magni. Veritatis quia atque sapiente repellat similique iste
                  ipsam, pariatur nulla fuga unde libero?
                </p>
              </div>

              <div className="flex w-full flex-1 items-center justify-center gap-2">
                <Button className="w-full">Visit Melroin</Button>
                <Button className="flex-1">2025</Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
