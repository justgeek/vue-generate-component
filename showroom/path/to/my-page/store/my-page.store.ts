import { myPageGetters } from  './my-page.getters';
import { myPageMutationsMap } from  './my-page.mutations';
import { myPageActionsMap } from './my-page.actions';

export interface MyPageState {

}

export const myPageState: MyPageState = {

};

export const myPageStore = {
  state: myPageState,
  getters: {...myPageGetters},
  actions: { ...myPageActionsMap },
  mutations: { ...myPageMutationsMap },
}

