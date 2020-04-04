# Vue(X) generator [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

This tool is inspired and forked from https://github.com/NetanelBasal/vue-generate-component
CLI util for easy generate Vue js component

## Intro
This tool is created to help with scaffolding vue apps that uses vuex.It follows [Angular Guidelines](https://angular.io/guide/styleguide).
<br>
It also uses [Vue Class Component](https://class-component.vuejs.org/). However the generated files will not always satisfy everyone.
<br>
that being said; please feel free to do the modifications that match your needs, and be sure you will still save some time 😉
<br>
Please feel free to contribute or just send your suggestions/feedback to <mt@prollygeek.com>

## ToDos [Progress]
  - Create pages [WIP]
  - Create single file components [OPEN]
  - Create directives [OPEN]
  - Avail more options for CLI for more convenience [OPEN]


## Installation
```js
npm install -S vue-generate-component-x
```

## Usage

```bash
vgcx <OPTIONS> <NAME>
```

#### Options
```
[
  {
    name: 'help',
    type: Boolean,escription: 'help'
  },
  {
    name: 'html',
    type: String,
    description: 'set the default html templates'
  },
  {
    name: 'all',
    type: String,
    description: 'set all files to typescript'
  },
  {
    name: 'script',
    type: String,
    description: 'set the default script language'
  },
  {
    name: 'test',
    type: String,
    description: 'set the default test language'
  },
  {
    name: 'style',
    type: String,
    description: 'set the default style file'
  },
  {
    name: 'postfix',
    type: String,
    description: 'create postfix in file name'
  },
  {
    name: 'dest',
    type: String,
    description: 'destination path to move genrated folder inside'
  }
]
```

### Create new Page
```bash
vgcx --script ts --postfix page --dest "/path/to" my-page-name
```
Will generate a page folder with following structure:
```bash
|-- path
    |-- to
        |-- my-page
            |-- index.vue
            |-- my-page.page.html
            |-- my-page.page.scss
            |-- my-page.page.ts
            |-- store
            |   |-- my-page.actions.ts
            |   |-- my-page.getters.js
            |   |-- my-page.mutations.ts
            |   |-- my-page.store.ts
            |-- __tests__
                |-- my-page.test.ts
```
**index.vue**
```html
<template src="./my-page.page.html"></template>
<script src="./my-page.page.ts" lang="ts"></script>
<style src="./my-page.page.scss" scoped lang="scss"></style>
```

**my-page.page.html**
```html
<section id="my-page">
  <h1>my-page Component</h1>
</section>
```

**my-page.page.scss**
```css
#my-page {

}
```

**my-page.page.ts**
```javascript
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  components: {
  },
  name: 'my-page',
})

export default class MyPagePage extends Vue {
  
}
```

**store/my-page.actions.ts**
```javascript
import { Commit } from 'vuex';
import { myPageMutations } from './my-page.mutations';
import { myPageStore } from './my-page.store';

export const namespace = 'myPageStore';

export const myPageActions = {

} 

export const myPageActionsMap = {

} 
```

**store/my-page.mutations.ts**
```javascript
import { myPageState } from './my-page.store';

export const namespace = 'myPageStore';

export const myPageMutations = {

} 

export const myPageMutationsMap = {

} 
```

**store/my-page.getters.ts**
```javascript
import { MyPageState } from  './my-page.store.ts';

export const myPageGetters = {

};
```

**store/my-page.store.ts**
```javascript
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
```

**\_\_tests\_\_/my-page.test.ts**
```javascript
import Vue from 'vue';
import { mount } from '@vue/test-utils'
import MyPage from './my-page.ts';

describe('MyPage', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(MyPage)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
```

### Advanced Usage
This template serves a specific approach when building vue app, specifically when using vuex actions, mutations, getters, and store.
<br>
The reason for creating maps for actions and mutations is to enable auto complete when you import them anywhere.
<br>

#### Example:

**actions.ts**
```javascript
export const namespace = 'myNameSpace';

export const myActions = {
  DO_SOME_ACTION: `${namespace}/DO_SOME_ACTION`,
};


export const myActionsMap = {
   [myActions.DO_SOME_ACTION]({ commit }: { commit: Commit }) {

     // you can commit mutations here to change state
     console.log('Action Was Called')

  }
}
```

**mutations.ts**
```javascript
export const myMutations = {
  mutateMyState: 'mutateMyState',
}

export const myMutationsMap = {
  [myMutations.mutateMyState](state: MyPageState, payload: Payload) {
    state.someKey = payload;
  },
}
```

**page.ts**
```javascript
import {myActions} from 'actions';

/* Once you import actions or mutations you will be able to use them directly inside your componet 
Also the auto complete will work as expected (should be very useful in large applications)
i.e
myActions. ++++ should open suggestion menu ++++
*/

export default class MyPage extends Vue {
  created(){
    /* store here can be page store or global app store that combines all modules:
       https://vuex.vuejs.org/guide/modules.html
    */
        store.dispatch(myActions.DO_SOME_ACTION);
  }
}
```

Made with ❤️ by Mohamed Taher <<mt@prollygeek.com>>
