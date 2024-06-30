export const ContainerDescription = ({ children, className, ...rest }) => (
  <p className={className} {...rest}>{children}</p>
);