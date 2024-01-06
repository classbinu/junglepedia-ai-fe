import { JwtPayload as OriginalJwtPayload } from "jwt-decode";
import { jwtDecode } from "jwt-decode";

interface JwtPayload extends OriginalJwtPayload {
  email?: string;
}

export const decodeJWT = (): JwtPayload | null => {
  const accessToken = sessionStorage.getItem("accessToken");
  if (accessToken) {
    const decoded = jwtDecode(accessToken);
    return decoded;
  }
};
