import { Button } from "./button";
import { ErrorMessage } from "./errorMessage";
import { InputField } from "./InputField";

export function LoginForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <InputField label="email" name="email" type="text" />
      <InputField label="Password" name="password" type="password" />
      <Button type="submit">Login</Button>
      <ErrorMessage />
      {/* 추가 링크 (예: 회원가입, 비밀번호 재설정) */}
    </form>
  );
}
