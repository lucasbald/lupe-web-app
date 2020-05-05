import { Module } from 'vuex';
import { IState } from '@/app/state';
import { PortifolioDefaultState, IPortifolioState } from './state';

export const PortifolioModule: Module<IPortifolioState, IState> = {
  namespaced: true,
  state: {
    ...PortifolioDefaultState(),
  },
};
