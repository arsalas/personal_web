interface Props {
  name: string;
}
export default function Tag({ name }: Props) {
  return (
    <div className="rounded-full bg-cyan-400/10 px-5 py-2 text-md font-medium leading-5 text-cyan-300 ">
      {name}
    </div>
  );
}
