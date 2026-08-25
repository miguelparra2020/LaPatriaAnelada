import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Socio - políticos y económicos',
      links: [
        {
          text: '👉 Los planos de la paz',
          href:'/losplanosdelapaz'
        },
        {
          text: '👉 Decálogo de la paz',
          href:'/decalogodelapaz'
        },
        {
          text: '👉 Ideología del libertador para la segunda independencia de latinoamerica',
          href:'/ideologiadellibertador'
        },
        
        {
          text: '👉 Convocatoria a la intelectualidad latinoamericana',
          href:'/convocatoriaalaintelectualidad'
        },
        {
          text: '👉 Plan de salvación nacional',
          href:'/plandesalvacionnacional'
        },
        {
          text: '👉 Libros',
          href:'/category/libro'
        },
      ],
    },
    {
      text: 'Socio-cientificos y educativos',
      links: [
        {
          text: '👉 Psicoanálisis y Pedagogía Formativa',
          href:'/psicoanilisyeducacionformativa'
        },
        {
          text: '👉 Propuesta de reforma académica',
          href:'/propuestadereformaacademica'
        },
        {
          text: '👉 La parranda como identidad del pueblo Latinoamericano',
          href:'/parrandalatinoamericana'
        },
        {
          text: '👉 La Realización Personal o la Felicidad en un Nuevo Contrato Social',
          href:'/realizacionpersonal'
        },
        {
          text: '👉 Como ganar el premio Nobel',
          href:'/premionobel'
        },
        {
          text: '👉 Libros',
          href:'/category/libro'
        },
      ],
    },
    {
      text: '📰Blog',
      href: getPermalink('/blog'),
    },
    {
      text: '🎙️Podcast',
      href: getPermalink('/tag/podcast'),
    },
    {
      text: '📽️Reels',
      href: getPermalink('/blog'),
    },
    {
      text: '📚Libros',
      href: '/category/libro',
    },
  ],
};
  
export const footerData = {
  links: [
  {
    title: 'Podcast/Blog:',
    links: [
      { text: 'Publicaciones', href: getPermalink('/blog') },
    ],
  },
  {
    title: 'Libros:',
    links: [
      { text: 'Libros', href: '/category/libro' },
    ],
  },
],
  secondaryLinks: [
    { text: 'Política de privacidad', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/sistemas_autoorganizados' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/sitemasautoorganizados' },
    { ariaLabel: 'RSS', icon: 'tabler:brand-spotify', href: 'https://podcasters.spotify.com/pod/show/sistemas-autoorgani' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://softwarehelpcenter.vercel.app/" target="_blank"> Software help center</a> · All rights reserved.
  `,
};
