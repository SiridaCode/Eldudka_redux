type Src = {
  href: string;
  src: string;
  mainSrc: string;
}[];

type TbreadcrumbNameMap = {
  path: string;
  desc: string;
}[];

export const src: Src = [
  {
    href: 'https://vk.com/vapestav',
    src: './icon-vk.png',
    mainSrc: './main-icon-vk.png',
  },
  {
    href: 'https://instagram.com/eldudka_vapeshop?igshid=YmMyMTA2M2Y=',
    src: './icon-inst.png',
    mainSrc: './main-icon-inst.png',
  },
  {
    href: 'https://t.me/eldudka',
    src: './icon-telegram.png',
    mainSrc: './main-icon-telegram.png',
  },
];

export const breadcrumbNameMap: TbreadcrumbNameMap = [
  { path: '/repair-requests', desc: 'breadcrumbs.repairRequests' },
  { path: 'client-chat', desc: 'breadcrumbs.clientChat' },
  { path: 'clients', desc: 'breadcrumbs.clients' },
  { path: 'loyalty-program', desc: 'breadcrumbs.loyaltyProgram' },
];
