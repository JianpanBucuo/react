import styled from 'styled-components'
export const RecommonedWrapper = styled.div`
    margin: 30px 0;
    width:280px;
`
export const RecommonedItem = styled.div`
    width:100%;
    height:50px;
    background:url(${(props) => props.imgUrl});
    background-size: contain;
`