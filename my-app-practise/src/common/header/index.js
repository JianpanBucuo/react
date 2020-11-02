import React, { PureComponent, Fragment } from 'react'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  // Button
  SearchInfo,
  SearchInfoSwitch,
  SearchInfoTitle,
  SearchInfoItem
} from './style'
import { connect } from 'react-redux'
import {
  changeSearchFocusedAction,
  getList,
  mouseEnterAction,
  mouseLeaveAction,
  changePageAction
} from '../../store/header/actionCreator'
import { Link } from 'react-router-dom'
class Header extends PureComponent {
  getListArea() {
    const {
      focused,
      mouseIn,
      list,
      totalPage,
      page,
      handleMouseEnter,
      handleMouseLeave,
      hanleChangePage
    } = this.props
    const pageList = []
    const newList = list.toJS()
    for (let i = (page - 1) * 10; i < page * 10; i++) {
      if (newList[i]) {
        pageList.push(
          <SearchInfoItem key={newList[i]}> {newList[i]} </SearchInfoItem>
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
            <SearchInfoSwitch
              onClick={() => hanleChangePage(page, totalPage, this.spinIcon)}
            >
              <i
                ref={(icon) => {
                  this.spinIcon = icon
                }}
                className="iconfont spin"
              >
                &#xe851;
              </i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <div>{pageList}</div>
        </SearchInfo>
      )
    }
    return null
  }
  render() {
    const {
      focused,
      handleSearchValueTrue,
      handleSearchValueFalse,
      list
    } = this.props
    return (
      <Fragment>
        <HeaderWrapper>
          <Link to="/">
            <Logo />
          </Link>
          <Nav>
            {/* <NavItem className='left active'>首页</NavItem> */}
            {/* <NavItem className='left'>下载App</NavItem> */}
            {/* <NavItem className='right'>登录</NavItem>
                        <NavItem className='right'>Aa</NavItem> */}
            <div className="nav-container" style={{ position: 'relative' }}>
              {/* <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => handleSearchValueTrue(list)}
                                onBlur={handleSearchValueFalse}
                            >
                            </NavSearch> */}
              {this.getListArea()}
            </div>
            <Addition>
              {/* <Button className='writting'>写文章</Button>
                            <Button className='reg'>注册</Button> */}
            </Addition>
          </Nav>
        </HeaderWrapper>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.get('header').get('focused'),
    list: state.get('header').get('list'),
    page: state.get('header').get('page'),
    totalPage: state.get('header').get('totalPage'),
    mouseIn: state.get('header').get('mouseIn')
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchValueTrue(list) {
      list.size === 0 && dispatch(getList())

      dispatch(changeSearchFocusedAction(true))
    },
    handleSearchValueFalse() {
      dispatch(changeSearchFocusedAction(false))
    },
    handleMouseEnter() {
      dispatch(mouseEnterAction())
    },
    handleMouseLeave() {
      dispatch(mouseLeaveAction())
    },
    hanleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/g, '')
      if (originAngle) {
        originAngle = parseInt(originAngle)
      } else {
        originAngle = 0
      }
      spin.style.transform = 'rotate(' + (360 + originAngle) + 'deg)'
      if (page < totalPage) {
        dispatch(changePageAction(page + 1))
      } else {
        dispatch(changePageAction(1))
      }
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
