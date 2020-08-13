<template>
  <div class="item-comment">
    <a class="comment-desc" href="javascript:;">
      <div class="comment-desc-info">
        <div>
          买家评价
          <span>{{itemComments.cRate}}</span>
        </div>
        <div class="line"></div>
        <div>
          销量
          <span>{{itemComments.sales}}</span>
        </div>
      </div>
      <div class="comment-more"></div>
    </a>
    <div class="comment-content">
      <div class="user-content" v-for="item in itemComments.list" :key="item.rateId">
        <div class="user-info">
          <img :src="item.user.avatar" alt />
          <span>{{item.user.uname}}</span>
        </div>
        <div class="user-comment">{{item.content}}</div>
        <div class="comment-date">{{item.created | timeTrans}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {dateFormat} from '@/common/utils'

export default {
  name: "DetailsItemComments",
  props: {
    itemComments: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    timeTrans(time) {
        return dateFormat(new Date(time * 1000), 'yyyy-MM-dd');
    },
  },
};
</script>

<style lang="less" scoped>
.item-comment {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 1rem;
  border-top: 0.4rem solid #cccccc;
  border-bottom: 0.4rem solid #cccccc;

  .comment-desc {
    flex: 1;
    display: block;
    height: 4rem;
    line-height: 4rem;

    .comment-desc-info {
      display: flex;
      float: left;

      .line {
        height: 1rem;
        width: 0.1rem;
        background-color: #cccccc;
        margin: 1.5rem 0.2rem 0;
      }

      span {
        margin-left: 0.2rem;
      }
    }
    .comment-more {
      float: right;
      width: 2rem;
      height: 2rem;
      margin-top: 1rem;
      background-image: url("~@/assets/img/common/arrow-left.svg");
      background-size: 1.5rem 1.5rem;
      background-repeat: no-repeat;
    }
  }

  .comment-content {
    flex: 4;

    .user-content {
      padding-bottom: 0.2rem;
      border-bottom: 0.1rem solid #ccc;

      .user-info {
        height: 2rem;
        margin: 1rem 0;

        img {
          height: 100%;
          border-radius: 1rem;
          margin-right: 1rem;
        }
      }

      .comment-date {
        margin: 1rem 0;
      }
    }
  }
}
</style>