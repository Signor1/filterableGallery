type ButtonProps = {
    className: string
    children: string | React.ReactNode
} & Omit<React.ComponentProps<'button'>, 'children'>


const Button = ({ className, children, ...rest }: ButtonProps) => {
    return (
        <button {...rest} className={className}>{children}</button>
    )
}

export default Button