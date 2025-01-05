
type Props = {
    children:string,
    className:string
}

export const TagPDescription = ({children, className}: Props) => {
  return (
    <p className={className}>
        {children}
    </p>
  )
}

