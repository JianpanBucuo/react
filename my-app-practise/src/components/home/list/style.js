import styled from 'styled-components'

export const ListItem = styled.div`
    padding:20px 0;
    border-bottom: 1px solid #dcdcdc;
    display: flex;
    flex-wrap:no-wrap;
    align-items:center;
    img {
        width: 150px;
        height: 100px;
        margin-right:10px;
    }
`
export const ListInfo = styled.div`
    padding: 10px 0;
    box-sizing:border-box;
    h3 {
        color:#000;
    }
    p {
        color:#999;
        margin-top:20px;
    }
`
export const LoadMore = styled.div`
    width:100%;
    height:40px;
    line-height:40px;
    text-align:center;
    background:#a5a5a5;
    border-radius:20px;
    color:#fff;
    margin: 30px 0;
`