interface Props {
  icon: JSX.Element;
  href: string;
}

export default function LinkIcon({ icon, href }: Props) {
  return (
    <a
      className="inline-flex text-3xl items-baselin leading-tight text-slate-200 hover:text-cyan-300 focus-visible:text-cyan-300  group/link "
      href={href}
      target="_blank"
      rel="noreferrer noopener"
    >
      {icon}
    </a>
  );
}
