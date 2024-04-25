interface Props {
  countryCode: string;
}
export default function FlagIcon({ countryCode }: Props) {
  if (countryCode === "en") {
    countryCode = "au";
  }

  return (
    <>
      <span className={`fi fis fi-${countryCode} fiCircle`} />
    </>
  );
}
