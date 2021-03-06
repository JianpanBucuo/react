import { createGlobalStyle } from 'styled-components'
export const GlobalFontStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1592960867454'); /* IE9 */
  src: url('./iconfont.eot?t=1592960867454#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAKsAAsAAAAABmQAAAJeAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcApwgQoBNgIkAwgLBgAEIAWEbQcuG64FyC6wbdiTIhXawOIWMdt3C7+zG4B46H+N352381WTiCaTLJhkEo1QlsQhQQt0SsJDsdB073+tzYmXMq+fx0uISFydv+KzgyUSj5IJyeuSvV09QiMk6AhB3nqZNfQAG3CiiUUcsG+4AdfUT6AHie2A5tZJkYGRgKMBD7QDRyMKxg1jF7iExwQ6TegqXa5sHUFTslYF4rnnGNDMhaVkuXahteZgirdatJfX5Qt4E/4+fhlHk6KlYjXcPFu2Ye57dkFVN7WnPiFCQMdbUGENSOJubfpKRTCuovN01QyQUvC9psEusVe7YH+dVd0NxqDinpSu6larC8g4OwPsYzZvLANcHBUfYLqjuHtc+vTp9OXHk/vZkvrD/oPXj3K7v5iZz5dfvXu5Lc9dWx/NFfn/LJ5898fcaNNLs6cDgs3e6W+tw9s7C099480KlzR1QlWjfcee4Acpew6lrracJVVlrbeYGbWyoFMnGtg/6GesZeRu8qHdyD1524ynqLSbI5NdQ4sue2jV7gSdVq0e7zKEVUR2YMUNQOh3j6LXe1T6fZPJztBi1C9a9UcFne7H0IVdFsJrXzAZQjaaV+hZSawct7Sj2gNyzkKDs+qQPyHOvRiO+sNibpVi4jm25OfOWESh4iTCFfAchWGCKSc+WdJ3RdLJYKDq3tS3kgjaLjBiEMSGTFeQx5KIKX+yaJe+f4A4zoQM3NJWkz1BWM6bHY30DXuQq4a4V9u9vJI75xgTQkEKS0TQCphHQqEESuvn+YhF9LkjkqmJgT1O9TX01zdFH1DOurCsJezWSr5IvRgAAAAA') format('woff2'),
  url('./iconfont.woff?t=1592960867454') format('woff'),
  url('./iconfont.ttf?t=1592960867454') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1592960867454#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconspin:before {
  content: "\e851";
}

`