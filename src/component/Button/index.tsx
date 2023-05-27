type Props = {
  onClick?: () => void;
  children: React.ReactNode;
};

export const Button = (props: Props) => {
  const { children, onClick } = props;

  return <button onClick={onClick}>{children}</button>;
};
