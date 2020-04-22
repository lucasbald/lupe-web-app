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
      <vue-headline level="3">Experiência</vue-headline>
      <p>
        Graduado em Ciências da Computação pela UNESP, Diretor executivo da empresa júnior Info Jr durante 3 anos e
        atualmente Engenheiro de Software na Ci&t
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
        content:
          'vuesion - The most complete boilerplate for production-ready PWAs. With focus on performance, development speed, and best practices',
      },
      {
        name: 'robots',
        content: 'INDEX,FOLLOW',
      },
      {
        name: 'keywords',
        content: 'vue.js, vuex, vuex-persist, seo, server-side-rendering, isomorphic, progressive-web-app',
      },

      { name: 'og:url', content: 'https://vuesion.herokuapp.com/' },
      { name: 'og:site_name', content: 'vuesion' },
      { name: 'og:type', content: 'website' },
      { name: 'og:locale', content: 'en' },
      {
        name: 'og:title',
        content:
          'vuesion - The most complete boilerplate for production-ready PWAs. With focus on performance, development speed, and best practices',
      },
      {
        name: 'og:description',
        content:
          'vuesion - The most complete boilerplate for production-ready PWAs. With focus on performance, development speed, and best practices',
      },
      { name: 'og:image:url', content: 'https://vuesion.herokuapp.com/logo.png' },

      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@vuesion1' },
      { name: 'twitter:creator', content: '@vuesion1' },
      {
        name: 'twitter:title',
        content:
          'vuesion - The most complete boilerplate for production-ready PWAs. With focus on performance, development speed, and best practices',
      },
      { name: 'twitter:url', content: 'https://vuesion.herokuapp.com/' },
      { name: 'twitter:image', content: 'https://vuesion.herokuapp.com/logo.png' },
      {
        name: 'twitter:description',
        content:
          'vuesion - The most complete boilerplate for production-ready PWAs. With focus on performance, development speed, and best practices',
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
