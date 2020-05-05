<template>
  <div>
    <stage :disable-particles="disableParticles" />
    <home-section image="pedro-image.png" alternative>
      <vue-headline level="2">Pedro A. S. Broglio</vue-headline>
      <br />
      <vue-headline level="3">Experiência</vue-headline>
      <p>
        Graduado em Ciências do Esporte pela UNICAMP, Vice-Presidente da empresa júnior CENS JR. em 2017 e Assistente de
        Marketing na A.A. Internacional.
      </p>
      <br />
      <vue-headline level="3">Você me encontra em:</vue-headline>
      <p>
        <a href="https://www.linkedin.com/in/pedro-antonio-siqueira-broglio-a3b456138/" target="_blank" rel="noopener"
          >Linkedin</a
        >
      </p>
      <br />
    </home-section>

    <home-section image="lucas-image.jpg" flip>
      <vue-headline level="2">Lucas Baldin</vue-headline>
      <br />
      <vue-headline level="3">Graduação</vue-headline>
      <p>
        Graduado em Ciências da Computação pela UNESP - Rio Claro, Diretor executivo da empresa júnior Info Jr durante 3
        anos e formado pela ETEC Deputado Salim Sedeh em Informática.
      </p>
      <br />
      <vue-headline level="3">Experiência</vue-headline>
      <p>
        Trabalhando a 3 anos na <a href="https://br.ciandt.com/" target="_blank" rel="noopener">Ci&T</a> em Campinas,
        atualmente como Engenheiro de Software voltado para qualidade.
      </p>
      <br />
      <vue-headline level="3">Você me encontra em:</vue-headline>
      <p>
        <a href="https://www.linkedin.com/in/lbaldin" target="_blank" rel="noopener">Linkedin</a>
      </p>
      <br />
    </home-section>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import Stage from '../components/Stage/Stage.vue';
import HomeSection from '@/app/home/components/HomeSection/HomeSection.vue';
import { IState } from '@/app/state';
import VueHeadline from '@components/VueHeadline/VueHeadline.vue';

export default {
  metaInfo: {
    title: 'Lup3 Solutions',
    meta: [
      {
        name: 'description',
        content: 'lup3 - Marketing and Tecnology',
      },
      {
        name: 'robots',
        content: 'INDEX,FOLLOW',
      },
      {
        name: 'keywords',
        content: 'vue.js, vuex, vuex-persist, seo, server-side-rendering, isomorphic, progressive-web-app',
      },

      { name: 'og:url', content: 'https://lup3.herokuapp.com/' },
      { name: 'og:site_name', content: 'lup3' },
      { name: 'og:type', content: 'website' },
      { name: 'og:locale', content: 'en' },
      {
        name: 'og:title',
        content: 'lup3 - Marketing and Tecnology',
      },
      {
        name: 'og:description',
        content: 'lup3 - Marketing and Tecnology',
      },
      { name: 'og:image:url', content: 'https://lup3.herokuapp.com/logo.png' },

      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@vuesion1' },
      { name: 'twitter:creator', content: '@vuesion1' },
      {
        name: 'twitter:title',
        content: 'lup3 - Marketing and Tecnology',
      },
      { name: 'twitter:url', content: 'https://lup3.herokuapp.com/' },
      { name: 'twitter:image', content: 'https://lup3.herokuapp.com/logo.png' },
      {
        name: 'twitter:description',
        content: 'lup3 - Marketing and Tecnology',
      },
    ],
  },
  components: {
    VueHeadline,
    HomeSection,
    Stage,
  },
  computed: {
    ...mapState({
      disableParticles: (state: IState) =>
        (state.app.config && state.app.config.features && state.app.config.features.disableParticles) || false,
    }),
  },
};
</script>
