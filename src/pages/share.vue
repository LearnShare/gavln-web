<template>
  <main-frame>
    <div
        class="page-upload page-share"
        v-loading="loading">
      <ui-empty
          v-if="!data
              || !data.length"
          icon="share">
        <p>{{ $t('empty-message.share') }}</p>
      </ui-empty>
      <share-list
          v-else
          :data="data"
          @refresh="getList" />
    </div>
  </main-frame>
</template>

<script>
import MainFrame from '../components/main-frame/index.vue';
import UiEmpty from '../components/ui-empty/index.vue';
import ShareList from '../components/share-list/index.vue';

import ShareAPI from '../api/share';

export default {
  name: 'share',
  components: {
    MainFrame,
    UiEmpty,
    ShareList,
  },
  data() {
    return {
      loading: false,
      data: [],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      if (this.loading) {
        return;
      }

      this.loading = true;

      ShareAPI.getList()
        .then((res) => {
          this.data = res.data;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
