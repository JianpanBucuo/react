// 状态提升
export function BollingVerdict(props) {
  if (props.celsius > 100) {
    return <p>The water would boil.</p>
  }
  return <p>The water would not boil.</p>
}
