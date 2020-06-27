import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { DetailWrapper, Header, Content } from './style'
import { withRouter } from 'react-router-dom'
import { getDetail } from '../../store/detail/actionCreator'
class Detail extends PureComponent {
    componentDidMount () {
        const { getDetailAction } = this.props
        getDetailAction(this.props.match.params.id)
    }
    render () {
        console.log()

        const { title, content } = this.props
        return (
            <DetailWrapper>
                <Header>
                    {title}
                </Header>
                <Content dangerouslySetInnerHTML={{ __html: content }} />
            </DetailWrapper >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        title: state.get('detail').get('title'),
        content: state.get('detail').get('content'),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getDetailAction (id) {
            dispatch(getDetail(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail))