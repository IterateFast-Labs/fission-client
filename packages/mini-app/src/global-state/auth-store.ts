import { jwtDecode } from 'jwt-decode';
import { getCookie, removeCookie, setCookie } from 'typescript-cookie';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface AuthStore {
  accessToken: string | null;
  setAccessToken(accessToken: string | null): void;
  resetAccessToken(): void;
}

interface ParsedStoredValue<T> {
  state: T;
  version: number;
}

export const authStoreKey = '@fission/token-store';

export const useAuthStore = create(
  persist<AuthStore>(
    (set) => ({
      accessToken: null,
      setAccessToken(accessToken: string | null) {
        return set({ accessToken });
      },
      resetAccessToken() {
        return set({ accessToken: null });
      },
    }),
    {
      name: authStoreKey,
      storage: createJSONStorage(() => ({
        getItem(name) {
          return getCookie(name) ?? null;
        },
        setItem(name, value) {
          const parsedValue = JSON.parse(value) as ParsedStoredValue<AuthStore>;

          const savedAccessToken = parsedValue.state.accessToken;

          if (!savedAccessToken) {
            return;
          }

          try {
            const decoded = jwtDecode(savedAccessToken);

            if (!decoded.exp) {
              return;
            }

            const expiratedDate = new Date(decoded.exp * 1000);

            const a = setCookie(name, value, {
              expires: expiratedDate, // cookie will expire at the same time as the token
              path: '/', // cookie will be accessible on all pages of the site
              secure: true, // cookie will only be sent over HTTPS
              sameSite: 'strict', // cookie will only be sent on the same site
            });

            console.log('SET', a);
          } catch (error) {
            console.error('SET ERROR', error);

            removeCookie(name);
          }
        },
        removeItem(name) {
          removeCookie(name);
        },
      })),
    },
  ),
);

export function safeParseStoreValue(value?: string | null) {
  if (!value) {
    return null;
  }

  try {
    const parsedValue = JSON.parse(value) as ParsedStoredValue<AuthStore>;

    const accessToken = parsedValue.state.accessToken;

    if (!accessToken) {
      return null;
    }

    const decoded = jwtDecode(accessToken);

    if (!decoded.exp) {
      return null;
    }

    const expiratedDate = new Date(decoded.exp * 1000);

    if (expiratedDate < new Date()) {
      return null;
    }

    return accessToken;
  } catch (error) {
    console.error('PARSED ERROR', error);
    return null;
  }
}
