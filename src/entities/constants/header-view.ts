
import { IUiNavbarItem } from "../../UI/components/ui-navbar/types";
import { createGuid } from "../../utils/Maths";

export const HeaderNavbarItems: IUiNavbarItem[] = [
  {
    id: createGuid(),
    path: '/',
    tname: 'navbar.main',
  },
  {
    id: createGuid(),
    path: '/settings',
    tname: 'navbar.settings',
  },
  {
    id: createGuid(),
    path: '/about',
    tname: 'navbar.about',
  },
];
