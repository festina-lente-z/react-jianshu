import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListItem, ListInfo, LoadMore } from '../style';
import { actionCreators } from '../store';

class List extends Component {
  render() {
    const { list, getMoreList, page } = this.props
    return (
      <div>
        {
          list.map((item, index) => {
            return (
              <ListItem key={index}>
                <img 
                  className="list-img"
                  src={item.get("imgUrl")}
                  alt=""
                />
                <ListInfo>
                  <h3 className="title">{item.get("title")}</h3>
                  <p className="desc">{item.get("desc")}</p>
                </ListInfo>
              </ListItem>
            )
          })
        }
        <LoadMore onClick={() => getMoreList(page)}>阅读更多</LoadMore>
      </div>
      
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(["home", "articleList"]),
    page: state.getIn(["home", "articlePage"])
  }
}

const mapDsipatchToProps = (dispatch) => ({
  getMoreList(page) {
    const action = actionCreators.getList(page);
    dispatch(action);
  }
  // 点击“阅读更多”重新获取ajax请求
})

export default connect(mapStateToProps, mapDsipatchToProps)(List);