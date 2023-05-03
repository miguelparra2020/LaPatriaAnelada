import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Socio-Politicos',
      links: [
        // {
        //   text: '👉 CIBERNÉTICA de las Elecciones y del Desastre Nacional.',
        //   // href: getPermalink('/landing/saas'),
        //   href:'#'
        // },
        // {
        //   text: '👉 Convocatoria a la Intelectualidad Colombiana',
        //   href:'#'
        // },
        {
          text: '👉 Los Planos de la Paz',
          href:'/losplanosdelapaz'
        },
        {
          text: '👉 Decálogo de la Paz',
          href:'/decalogodelapaz'
        },
        // {
        //   text: '👉 La Realización Personal o la Felicidad en un Nuevo Contrato Social',
        //   href:'#'
        // },
        // {
        //   text: '👉 Plan de Salvación Nacional',
        //   href:'#'
        // },
        // {
        //   text: '👉 Ideología del Libertador para la Segunda Independencia de América latina',
        //   href:'#'
        // },
        // {
        //   text: '👉 Temática libre',
        //   href:'#'
        // },
        // {
        //   text: '👉 Libro: "El poder y el Antipoder"',
        //   href:'#'
        // },
      ],
    },
    // {
    //   text: 'Socio-Económicos',
    //   links: [
    //     {
    //       text: '👉 Revolución Científico Tecnológica para el Desarrollo Nacional',
    //       href: '#',
    //     },
    //     {
    //       text: '👉 Propuesta de Reforma a la Educación del Niño en su más Tierna Infancia (Hasta los Siete Años)',
    //       href: '#',
    //     },
    //     {
    //       text: '👉 Propuesta de Reforma Académica',
    //       href: '#',
    //     },
    //     {
    //       text: '👉 Temática libre',
    //       href:'#'
    //     },
    //     {
    //       text: '👉 Libro: "El poder y el Antipoder"',
    //       href:'#'
    //     },
    //   ],
    // },
    // {
    //   text: 'Ciencia y Sociedad',
    //   links: [
    //     {
    //       text: '👉 La Magia de los Sistemas Autoorganizados',
    //       href: '#',
    //     },
    //     {
    //       text: '👉 Como Ganar El Premio Nobel',
    //       href: '#',
    //     },
    //     {
    //       text: '👉 Temática libre',
    //       href:'#'
    //     },
    //     {
    //       text: '👉 Libro: "El poder y el Antipoder"',
    //       href:'#'
    //     },
    //   ],
    // },
    // {
    //   text: 'Educación',
    //   links: [
    //     {
    //       text: '👉 La reivindicación de los derechos de la niñez o el regreso al paraíso terrenal',
    //       href: '#',
    //     },
    //     {
    //       text: '👉 Psicoanálisis y Pedagogía Formativa',
    //       href: '#',
    //     },
    //     {
    //       text: '👉 La Familiaridad como Fundamento de la Identidad Nacional',
    //       href: '#',
    //     },
    //     {
    //       text: '👉 Propuesta de Reforma a la Educación del Niño en su más Tierna Infancia (Hasta los Siete Años)',
    //       href: '#',
    //     },
    //     {
    //       text: '👉 Temática libre',
    //       href:'#'
    //     },
    //     {
    //       text: '👉 Libro: "El poder y el Antipoder"',
    //       href:'#'
    //     },
    //   ],
    // },
    // {
    //   text: 'Antivirales',
    //   links: [
    //     {
    //       text: '👉 Cepa Viral inducida por Luz UV-B y rayos X: La peor amenaza para la humanidad.',
    //       href: '#',
    //     },
    //     {
    //       text: '👉 Lauril Sulfato Sódico Éter',
    //       href: '#',
    //     },
    //     {
    //       text: '👉 Nanovacuna Antiviral Bioenergética',
    //       href: '#',
    //     },
    //     {
    //       text: '👉 Replica a la Falsación de la Silla Vacía a la Nanovacuna Antiviral Bioenergética',
    //       href: '#',
    //     },
    //     {
    //       text: '👉 Sepa cómo Tratar las Pandemias.',
    //       href: '#',
    //     },
    //     {
    //       text: '👉 Temática libre',
    //       href:'#'
    //     },
    //     {
    //       text: '👉 Libro: "El poder y el Antipoder"',
    //       href:'#'
    //     },
    //   ],
    // },
    {
      text: '🎙️Podcast',
      href: getPermalink('/blog'),
    },
    // {
    //   text: 'Curso',
    //   href: '#',
    // },
  ],
};
  
export const footerData = {
  links: [
    // {
    //   title: 'Libro:',
    //   links: [
    //     { text: 'El poder y el antipoder', href: getPermalink('/blog') }
    //   ],
    // },
    {
      title: 'Podcast/Blog:',
      links: [
        { text: 'Publicaciones', href: getPermalink('/blog') },
      ],
    },
    // {
    //   title: 'Curso:',
    //   links: [
    //     { text: 'Temas', href: '#' },
    //   ],
    // },
    // {
    //   title: 'Contactar',
    //   links: [
    //     { text: 'PQR', href: '#' },
    //     { text: 'Contactar al autor', href: '#' }
    //   ],
    // },
  ],
  secondaryLinks: [
    { text: 'Politica de privacidad', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    // { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.facebook.com/sitemasautoorganizados' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/sitemasautoorganizados' },
    { ariaLabel: 'Spotify', icon: 'tabler:brand-spotify', href: 'https://podcasters.spotify.com/pod/show/sistemas-autoorgani' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Hecho por <a class="text-blue-600 hover:underline dark:text-gray-200" href="#"> Software Hepl Center</a> · Todos los derechos reservados.
  `,
};
