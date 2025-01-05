
type Props = {
    children:React.ReactNode,
    className:string
}

export const TagPDescription = ({children, className}: Props) => {
  return (
    <p className={className}>
        {children}
    </p>
  )
}

