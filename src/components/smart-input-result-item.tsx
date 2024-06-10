export default function SmartInputResultItem({
  result,
  isHighlighed,
}: {
  result: string;
  isHighlighed: boolean;
}) {
  return (
    <li key={result}>
      <div>{result}</div>
      <div>{isHighlighed ? "*" : undefined}</div>
    </li>
  );
}
