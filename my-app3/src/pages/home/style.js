import styled from 'styled-components'

export const HomeWrapper = styled.div`
    width:960px;
    margin: 0 auto;
    height: 300px;
    display:flex;
    flex-direction:row;
`

export const HomeLeft = styled.div`
    margin-left:15px;
    width:625px;
    padding-top:30px;
    .banner-img{
        width: 625px;
        height:270px;
    }
`
export const HomeRight = styled.div`
width:240px;
`
export const BackTop = styled.div`
    position:fixed;
    width:100px;
    height:60px;
    line-height:60px;
    text-align:center;
    border:1px solid #ccc;
    right:30px;
    bottom:30px;
    font-size:16px;
`