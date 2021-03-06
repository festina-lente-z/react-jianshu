import { actionTypes } from './';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})
// 因为在reducer中list是immutable类型的，但是从接口获取的数据却是普通类型的，因此需要把从捷空运获取的数据也要用fromJS转换成immutable类型

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
});

export const mouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER
});

export const mouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE
});

export const changePageList = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  page: fromJS(page),
})

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      const data = res.data;
      dispatch(changeList(data.data));
    }).catch(() => {
      console.log('error');
    })
  }
}