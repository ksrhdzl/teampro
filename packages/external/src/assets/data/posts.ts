export interface IPost {
  slug: string;
  createdAt: Date;
  updatedAt?: Date;
  socials: {
    platform: string;
    url: string;
  }[];
  tags: {
    slug: string;
    locales: {
      name: string;
      language: any;
    }[];
  }[];
  thumbnail: string;
  locales: {
    name: string;
    summary: string;
    description: string;
    author: string;
    language: any;
  }[];
}

export const posts: IPost[] = [
  // --------------------------------- PROJECT-ALMASPRO
  {
    createdAt: new Date('2025-01-01T10:00:00Z'),
    updatedAt: new Date('2025-01-01T10:00:00Z'),
    slug: 'almaspro',
    thumbnail: '',
    tags: [
      {
        slug: 'project',
        locales: [
          { name: 'Project', language: 'en' },
          { name: 'پروژه', language: 'fa' },
        ],
      },
      {
        slug: 'Planed',
        locales: [
          { name: 'Planed', language: 'en' },
          { name: 'برنامه زیر', language: 'fa' },
        ],
      },
    ],
    socials: [{ platform: 'website', url: 'https://almaspro.com' }],
    locales: [
      {
        name: 'پروژه الماس پرو (الماس پایتخت)',
        author: 'کسری علیزاده',
        language: 'fa',
        summary:
          'پروژه الماس پرو یک وب‌سایت فروشگاهی چندزبانه است که به کاربران این امکان را می‌دهد تا محصولات متنوعی را مشاهده، جستجو و خریداری کنند. هدف اصلی این پروژه ارائه یک تجربه کاربری یکپارچه برای مشتریان در سراسر جهان است، با پشتیبانی از چندین زبان و ارز محلی.',
        description: '',
      },
      {
        name: 'Almaspro (Almaspaytakht) project',
        author: 'Kasra Alizadeh',
        language: 'en',
        summary:
          "The 'Almas Pro' project is a multilingual e-commerce website that enables users to browse, search, and purchase a variety of products. The primary goal of this project is to deliver a seamless user experience for customers worldwide, with support for multiple languages and local currencies.",
        description: '',
      },
    ],
  },
  // --------------------------------- PROJECT-HAMIPRYK
  // {
  //   createdAt: new Date('2025-01-01T10:00:00Z'),
  //   updatedAt: new Date('2025-01-01T10:00:00Z'),
  //   slug: 'hamipeyk',
  //   thumbnail: '',
  //   tags: [
  //     {
  //       slug: 'project',
  //       locales: [
  //         { name: 'Project', language: 'en' },
  //         { name: 'پروژه', language: 'fa' },
  //       ],
  //     },
  //   ],
  //   socials: [{ platform: 'website', url: 'https://hamipeyk.com' }],
  //   locales: [
  //     {
  //       name: 'پروژه حامی‌پیک',
  //       author: 'کسری علیزاده',
  //       language: 'fa',
  //       summary:
  //         'پروژه حامی پیک یک پلتفرم پیشرفته و جامع در حوزه حمل‌ونقل آخرین مایل است که شامل وب‌سایت، اپلیکیشن موبایل و پنل مدیریتی می‌باشد. این پلتفرم به کاربران امکان می‌دهد تا مرسولات خود را به‌سادگی ثبت، پیگیری و مدیریت کنند. همچنین، با ارائه راهکارهای هوشمند در مدیریت لجستیک، نیازهای شرکت‌ها و کسب‌وکارها را به‌صورت کامل در زمینه حمل‌ونقل برطرف می‌سازد. اپلیکیشن موبایل حامی پیک نیز با طراحی کاربرپسند، دسترسی سریع‌تر و تجربه‌ای بهینه‌تر را برای کاربران فراهم می‌کند.',
  //       description: '',
  //     },
  //     {
  //       name: 'Hamipeyk project',
  //       author: 'Kasra Alizadeh',
  //       language: 'en',
  //       summary:
  //         'The Hamipeyk project is an advanced and comprehensive platform in the last-mile delivery domain, featuring a website, a mobile application, and an admin panel. This platform enables users to easily register, track, and manage their shipments. Additionally, by offering intelligent logistics management solutions, it fully addresses the transportation needs of companies and businesses. The HamiPeyk mobile application, with its user-friendly design, provides faster access and an optimized experience for users.',
  //       description: '',
  //     },
  //   ],
  // },
  // --------------------------------- PROJECT-TEAMPRO
  // {
  //   createdAt: new Date('2025-01-01T10:00:00Z'),
  //   updatedAt: new Date('2025-01-01T10:00:00Z'),
  //   slug: 'teampro',
  //   thumbnail: '',
  //   tags: [
  //     {
  //       slug: 'project',
  //       locales: [
  //         { name: 'Project', language: 'en' },
  //         { name: 'پروژه', language: 'fa' },
  //       ],
  //     },
  //   ],
  //   socials: [{ platform: 'website', url: 'https://melorin.dev' }],
  //   locales: [
  //     {
  //       name: 'پروژه مدیریت سازمان',
  //       author: 'کسری علیزاده',
  //       language: 'fa',
  //       summary:
  //         'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
  //       description: '',
  //     },
  //     {
  //       name: 'ERP project',
  //       author: 'Kasra Alizadeh',
  //       language: 'en',
  //       summary:
  //         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, provident rerum! Nemo suscipit ex laudantium ab architecto iusto vel blanditiis. Corrupti labore totam debitis. Nisi odio culpa saepe voluptate provident.',
  //       description: '',
  //     },
  //   ],
  // },

  // --------------------------------- LEARN-MELORIN
  {
    createdAt: new Date('2025-01-01T10:00:00Z'),
    updatedAt: new Date('2025-01-01T10:00:00Z'),
    slug: 'building-a-website-with-malorin',
    thumbnail: '',
    tags: [
      {
        slug: 'learn',
        locales: [
          { name: 'Learn', language: 'en' },
          { name: 'آموزش', language: 'fa' },
        ],
      },
    ],
    socials: [],
    locales: [
      {
        name: 'آموزش ساخت سایت با ملورین',
        author: 'کسری علیزاده',
        language: 'fa',
        summary:
          "'آموزش ساخت سایت با ملورین' یک راهنمای جامع است که شما را در فرآیند ایجاد یک وب‌سایت با استفاده از پلتفرم ملورین همراهی می‌کند. این آموزش تمام مراحل ضروری از راه‌اندازی محیط تا پیاده‌سازی ویژگی‌های کلیدی را پوشش می‌دهد و تجربه‌ای روان برای یادگیری به مبتدیان و کاربران پیشرفته فراهم می‌آورد.",
        description: '',
      },
      {
        name: 'Building a Website with Malorin',
        author: 'Kasra Alizadeh',
        language: 'en',
        summary:
          "'Building a Website with Malorin' is a comprehensive tutorial that guides you through the process of creating a website using the Malorin platform. The tutorial covers all essential steps, from setting up the environment to implementing key features, providing a seamless learning experience for beginners and advanced users alike.",
        description: '',
      },
    ],
  },
];
