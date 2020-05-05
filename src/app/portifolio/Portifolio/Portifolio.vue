<template>
  <div :class="$style.portifolio">
    <vue-grid>
      <vue-breadcrumb :items="breadCrumbItems"></vue-breadcrumb>

      <vue-grid-row>
        <vue-grid-item fill>
          <vue-headline level="1">Portifolio</vue-headline>
        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
import { registerModule } from '@/app/store';
import { IPreLoad } from '@/server/isomorphic';
import VueGrid from '@/app/shared/components/VueGrid/VueGrid.vue';
import VueBreadcrumb from '@components/VueBreadcrumb/VueBreadcrumb.vue';
import VueGridRow from '@/app/shared/components/VueGridRow/VueGridRow.vue';
import VueGridItem from '@/app/shared/components/VueGridItem/VueGridItem.vue';
import VueButton from '@/app/shared/components/VueButton/VueButton.vue';
import VueHeadline from '@/app/shared/components/VueHeadline/VueHeadline.vue';

import { PortifolioModule } from '../module';

export default {
  metaInfo: {
    title: 'Portifolio',
  },
  components: {
    VueGrid,
    VueBreadcrumb,
    VueGridRow,
    VueGridItem,
    VueButton,
    VueHeadline,
  },
  data: (): any => ({}),
  methods: {},
  computed: {
    breadCrumbItems() {
      return [
        { label: this.$t('Home' /* Home */), href: '/' },
        { label: this.$t('Portifolio' /* Portifolio */), href: '/portifolio' },
      ];
    },
  },
  beforeCreate() {
    registerModule('portifolio', PortifolioModule);
  },
  prefetch: (options: IPreLoad) => {
    registerModule('portifolio', PortifolioModule);

    /**
     * This is the function where you can load all the data that is needed
     * to render the page on the server and client side
     *
     * This function always returns a promise that means, if you want to
     * call a vuex action you have to return it, here is an example
     *
     * return options.store.dispatch('fetchPortifolio', '1');
     *
     * If you need to fetch data from multiple source your can also return
     * a Promise chain or a Promise.all()
     */
    return Promise.resolve();
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.portifolio {
  margin-top: $nav-bar-height;
  min-height: 500px;
}
</style>
