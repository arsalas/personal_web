interface Props {
  children?: any;
}

export default function Section({ children }: Props) {
  return <section className="min-h-svh bg-sky-950">{children}</section>;
}
