import { create } from '@storybook/theming';
import theme from './_theme.scss';

export default create({
  ...theme,
  brandTitle: 'lup3 Storybook',
  brandUrl: 'https://lup3.herokuapp.com',
  brandImage: 'https://lup3.herokuapp.com/logo.png',
});
