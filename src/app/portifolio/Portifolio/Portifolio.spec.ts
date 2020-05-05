import { createLocalVue, mount } from '@vue/test-utils';
import Vuex, { Store } from 'vuex';
import { i18n } from '@/app/shared/plugins/i18n/i18n';
import Portifolio from './Portifolio.vue';
import { IPortifolioState } from '../state';
import { PortifolioModule } from '../module';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Portifolio.vue', () => {
  let store: Store<IPortifolioState>;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        portifolio: PortifolioModule,
      },
    } as any);
  });

  test('renders component', () => {
    const wrapper = mount<any>(Portifolio, {
      store,
      localVue,
      i18n,
      stubs: ['router-link'],
    });

    Portifolio.prefetch({});

    expect(wrapper.find('h1').text()).toBe('Portifolio');
  });
});
