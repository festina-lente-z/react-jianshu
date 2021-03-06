import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button,
} from './style';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../page/login/store';

class Header extends Component {
  getListArea () {
    const { 
      focused, 
      mouseIn, 
      list, 
      page, 
      totalPage,
      handleMouseEnter, 
      handleMouseLeave, 
      handleChangePage 
    } = this.props;
    const newList = list.toJS();
    const pageList = [];
    // ajax请求结束后再执行，之前报错是因为请求没结束，输出的都是undefined导致的key重复
    if(newList.length){
      for(let i=(page-1)*10; i < Math.min(page*10,newList.length); i++){
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => handleChangePage(page,totalPage, this.spinIcon)}>
              <span 
                ref={(icon) => {this.spinIcon = icon}}
                className="iconfont spin"
              >
                &#xe851;
              </span>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

  render() {
    const { focused, handleInputFocus, handleInputBlur, list, login, logout } = this.props;
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link> 
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          {
            login
            ? <NavItem onClick={logout} className="right">退出</NavItem>
            : <Link to='/login'><NavItem className="right">登录</NavItem></Link>
          }
          <NavItem className="right">
          <span className="iconfont">&#xe636;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={300}
              classNames="slide"
            >
              <NavSearch
                className={focused ? "focused" : ""}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              ></NavSearch>
              
            </CSSTransition>
            <span 
              className={focused ? "focused iconfont zoom" : "iconfont zoom"}
            >
              &#xe637;
            </span>
            {this.getListArea()}
          </SearchWrapper>
          
        </Nav>
        <Addition>
          <Link to='/write'>
            <Button className="writing">
              <span className="iconfont">&#xe659;</span>
              写文章
            </Button>
          </Link>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // focused: state.get("header").get("focused")
    focused: state.getIn(['header', 'focused']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    login: state.getIn(['login', 'login']),
  }
};

const mapDispatchToProps = (dispatch) => {
  const { searchFocus, searchBlur, getList, mouseEnter, mouseLeave, changePageList } = actionCreators;
  return {
    handleInputFocus(list){
      (list.size === 0) && dispatch(getList());
      dispatch(searchFocus());
    },
    handleInputBlur(){
      dispatch(searchBlur());
    },
    handleMouseEnter(){
      dispatch(mouseEnter());
    },
    handleMouseLeave(){
      dispatch(mouseLeave());
    },
    handleChangePage(page, totalPage, spin){
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
      if (page < totalPage) {
        dispatch(changePageList(page + 1));
      } else {
        dispatch(changePageList(1));
      }
    },
    logout() {
      dispatch(loginActionCreators.logout())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);