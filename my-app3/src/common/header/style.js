import styled from 'styled-components'
import logoPic from '../../static/image/common-logo.png'
export const HeaderWrapper = styled.div`
    height:58px;
    border-bottom: #f0f0f0 solid 1px;
    position:relative;
`

export const Logo = styled.a`
    width:176px;
    height:50px;
    position: absolute;
    top:0;
    left:0;
    background:url(${logoPic});
    background-size:contain;
`

export const Nav = styled.div`
    width:960px;
    margin:0 auto;
    height:100%;
    padding-right:70px;
    box-sizing:border-box;
 `
export const NavItem = styled.div`
    line-height:56px;
    padding:0px 15px;
    font-size: 17px;
    color:#333;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.active {
        color:#ea6f5a;
    }
`
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width:160px;
    height:38px;
    border:none;
    border-radius:19px;
    outline:none;
    background:#eee;
    margin-top:9px;
    box-sizing:border-box;
    padding-left:20px;
    padding-right: 30px;
    font-size:14px;
    margin-left:10px;
    transition:all .5s;
    &::placeholder {
        color:#999;
    }
    &.focused {
        width:220px;
        
        background:#eee;
    }
`

export const Addition = styled.div`
    position: absolute;
    right:0;
    top:0;
    height:56px;
`

export const Button = styled.div`
    float: right;
    line-height:38px;
    border-radius:19px;
    margin-top:9px;
    border:1px solid #ec1649;
    margin-right:20px;
    padding:0 20px;
    font-size:14px;
    &.reg{
        color: #ec1649;
    }
    &.writting {
        color:#fff;
        background: #ec1649;
    }
`

export const SearchInfo = styled.div`
    position: absolute;
    top:65px;
    left:180px;
    min-height:56px;
    width:240px;
    padding:0 20px;
    box-sizing: border-box;
    border-bottom:1px solid #f0f0f0;
    box-shadow:0 0 8px rgba(0,0,0,.2);
    background:#fff;
`
export const SearchInfoTitle = styled.div`
    margin-top:20px;
    margin-bottom:15px;
    line-height:20px;
    font-size:14px;
    color:#969696;
`
export const SearchInfoSwitch = styled.span`
    float:right;
    font-size:12px;
    cursor:pointer;
    .spin {
        display:inline-block;
        font-size: 12px;
        margin-right:2px;
        transition: all .5s ease-in;
        transform: rotate(0deg);
        transform-origin:center center;
    }
`
export const SearchInfoItem = styled.a`
    font-size:12px;
    padding:0 5px;
    line-height:20px;
    border: 1px solid #ddd;
    color:#787878;
    border-radius:4px;
    margin-right:10px;
    margin-bottom:15px;
    float: left;
`