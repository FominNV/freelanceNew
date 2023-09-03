
import { IUiNavbarItem } from "../../UI/components/ui-navbar/types";
import { createGuid } from "../../utils/Maths";

export const headerNavbarItems: IUiNavbarItem[] = [
  {
    id: createGuid(),
    path: '/',
    name: 'navbar.main',
  },
  {
    id: createGuid(),
    path: '/settings',
    name: 'navbar.settings',
  },
  {
    id: createGuid(),
    path: '/about',
    name: 'navbar.about',
  },
];
