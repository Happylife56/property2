<template>
  <view class="contain">
    <view class="status_bar">
      <view class="top_view"></view>
    </view>
    <view class="contenter">
      <APPHeader>
        <template #title>
          <view class="bg-white">房屋认证</view>
        </template>
      </APPHeader>
      <!-- 导航条 -->
      <scroll-view
        scroll-x
        class="nav bg-white"
      >
        <view class="flex text-center">
          <view
            class="cu-item flex-sub"
            :class="index==TabCur?'text-green cur':''"
            v-for="(item,index) in tabList"
            :key="index"
            @tap="tabSelect"
            :data-id="index"
          >
            {{item.name}}
          </view>
        </view>
      </scroll-view>
      <scroll-view
        scroll-y="true"
        class="contenter-scroll"
      >
        <!-- 家人授权 -->
        <familyAuth v-if="TabCur == 1"></familyAuth>
        <!-- 添加房屋 -->
        <addHouse v-else></addHouse>
      </scroll-view>
    </view>
  </view>
</template>

<script>
import APPHeader from '@/components/APPHeader'
import addHouse from './addHouse/addHouse.vue'
import familyAuth from './familyAuth/familyAuth.vue'
export default {
  components: { APPHeader, addHouse, familyAuth },
  data() {
    return {
      tabList: [{
        name: '添加房屋',
        id: 1
      },
      {
        name: '家人授权',
        id: 2
      },
      ],
      TabCur: 0
    }
  },
  methods: {
    tabSelect(e) {
      this.TabCur = e.currentTarget.dataset.id;
    },
  }
}
</script>


