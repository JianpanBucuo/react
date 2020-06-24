import { } from './actionTypes.js'
import { fromJS } from 'immutable'
import girlPic from '../../static/image/girl.jpg'
import recommonedImg from '../../static/image/recommoned.png'

const defaultState = fromJS({
    topicList: [
        {
            id: '1',
            title: '社会热点',
            imgSrc: 'https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
        },
        {
            id: '2',
            title: 'react',
            imgSrc: 'https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
        }
    ],
    articleList:[
        {
            id: '1',
            title:'金星问许晴：50岁了还单身，你想要怎样的男人？许晴的回答很露骨',
            desc:'一次采访中，金星问许晴：“50岁了还不结婚，你想要什么样的男人？”许晴一脸笑意，温柔地说道：“其实，我要的男人就是要深情，我要的爱情就是神韵，”...',
            imgSrc:girlPic
        },
        {
            id: '2',
            title:'金星问许晴：50岁了还单身，你想要怎样的男人？许晴的回答很露骨',
            desc:'一次采访中，金星问许晴：“50岁了还不结婚，你想要什么样的男人？”许晴一脸笑意，温柔地说道：“其实，我要的男人就是要深情，我要的爱情就是神韵，”...',
            imgSrc:girlPic
        }
    ],
    recommendList:[
        {
            id: '1',
            imgSrc:recommonedImg
        },
        {
            id: '2',
            imgSrc:recommonedImg
        }
    ]
})
export default (state = defaultState, action) => {
    return state

}