interface Props {
  children?: JSX.Element;
}

export default function Section({ children }: Props) {
  return <section className="bg-gradient-to-r from-blue-950 to-blue-900">{children}</section>;
}
