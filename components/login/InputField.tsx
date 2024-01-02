export function InputField({
  label,
  name,
  type,
}: {
  label: string;
  name: string;
  type: string;
}) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} />
      {/* 여기에 필드 유효성 검사 메시지 추가 */}
    </div>
  );
}
