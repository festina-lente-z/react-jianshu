import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: "社会热点",
    imgUrl: "https://img.zcool.cn/community/0153476171120111013e8943dadf86.jpg@260w_195h_1c_1e_1o_100sh.jpg",
  },{
    id: 2,
    title: "手绘",
    imgUrl: "https://img.zcool.cn/community/0153476171120111013e8943dadf86.jpg@260w_195h_1c_1e_1o_100sh.jpg"
  }],
  articleList: [{
    id: 1,
    title: "掘力星计划开启，赢取创作大礼包，挑战创作激励金",
    desc: "稀土掘金为鼓励所有能创作优质内容的掘友，用心分享，持续输出，推出首期掘力星计划！不限掘力值、不限等级、不限入驻时长，只要你有优秀的输出能力，就有机会加入首批掘力星计划，拿大礼包，赢创作激励金，解锁超多扶持权益！",
    imgUrl: "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/879c3f1889374a3a9d138874e4a03f3a~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?"
  },{
    id: 2,
    title: "掘力星计划开启，赢取创作大礼包，挑战创作激励金",
    desc: "稀土掘金为鼓励所有能创作优质内容的掘友，用心分享，持续输出，推出首期掘力星计划！不限掘力值、不限等级、不限入驻时长，只要你有优秀的输出能力，就有机会加入首批掘力星计划，拿大礼包，赢创作激励金，解锁超多扶持权益！",
    imgUrl: "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/879c3f1889374a3a9d138874e4a03f3a~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?"
  },{
    id: 3,
    title: "掘力星计划开启，赢取创作大礼包，挑战创作激励金",
    desc: "稀土掘金为鼓励所有能创作优质内容的掘友，用心分享，持续输出，推出首期掘力星计划！不限掘力值、不限等级、不限入驻时长，只要你有优秀的输出能力，就有机会加入首批掘力星计划，拿大礼包，赢创作激励金，解锁超多扶持权益！",
    imgUrl: "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/879c3f1889374a3a9d138874e4a03f3a~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?"
  }]
});

const reducer =  (state = defaultState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}
export default reducer;