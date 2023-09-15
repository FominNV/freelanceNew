import { UiTextAnimater } from './ui-text-animater';
import { UiContainer } from './ui-container';
import { UiNavbar } from './ui-navbar';
import { UiSwitch } from './ui-switch';
import { UiDropdown } from './ui-dropdown';
import { UiButton } from './ui-button';
import { UiCard } from './ui-card';
import { UiLink } from './ui-link';
import { UiTitle } from './ui-title';
import { UiInput } from './ui-input';
import { UiCheckbox } from './ui-checkbox';
import { UiText } from './ui-text';

const components = {
  UiTextAnimater,
  UiContainer,
  UiNavbar,
  UiSwitch,
  UiDropdown,
  UiButton,
  UiCard,
  UiLink,
  UiTitle,
  UiInput,
  UiCheckbox,
  UiText,
};

export default components;

declare module 'vue' {
  interface GlobalComponents {
    UiTextAnimater: typeof components['UiTextAnimater'];
    UiContainer: typeof components['UiContainer'];
    UiNavbar: typeof components['UiNavbar'];
    UiSwitch: typeof components['UiSwitch'];
    UiDropdown: typeof components['UiDropdown'];
    UiButton: typeof components['UiButton'];
    UiCard: typeof components['UiCard'];
    UiLink: typeof components['UiLink'];
    UiTitle: typeof components['UiTitle'];
    UiInput: typeof components['UiInput'];
    UiCheckbox: typeof components['UiCheckbox'];
    UiText: typeof components['UiText'];
  }
}
