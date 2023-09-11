
import { IItemDto } from "@/types";
import { IUiNavbarItem } from "../../UI/components/ui-navbar/types";
import { createGuid } from "../../utils/Maths";
import { PathNames } from "../enums";

export const HeaderNavbarItems: IUiNavbarItem[] = [
  {
    id: createGuid(),
    path: PathNames.Home,
    tname: 'navbar.main',
  },
  {
    id: createGuid(),
    path: PathNames.Settings,
    tname: 'navbar.settings',
  },
  {
    id: createGuid(),
    path: PathNames.About,
    tname: 'navbar.about',
  },
];

export const HeaderJobButtons: IItemDto[] = [
  {
    tname: 'header.jobButtons.findJob',
    theme: 'secondary',
  },
  {
    tname: 'header.jobButtons.offerJob',
    theme: 'action',
  },
];
