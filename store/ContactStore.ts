import { create } from "zustand";

interface ContactStore {
  emailAddress: string;
  userMessage: string;
  agreeCheckbox: boolean;
  setEmailAddress: (email: string) => void;
  setUserMessage: (message: string) => void;
  setAgreeCheckbox: (value: boolean) => void;
}

function getLocalStorageValue<T>(key: string, fallbackValue: T): [T, (value: T) => void] {
  const storedValue = typeof window !== "undefined" ? localStorage.getItem(key) : null;
  const parsedValue = storedValue ? JSON.parse(storedValue) : fallbackValue;
  let value = parsedValue;

  const setValue = (newValue: T) => {
    value = newValue;
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(newValue));
    }
  };

  return [value, setValue];
}

export const useContactStore = create<ContactStore>((set) => {
  const [emailAddress, setEmailAddress] = getLocalStorageValue<string>("contactFormEmail", "");
  const [userMessage, setUserMessage] = getLocalStorageValue<string>("contactFormUserMessage", "");
  const [agreeCheckbox, setAgreeCheckbox] = getLocalStorageValue<boolean>("contactFormAgreeCheckbox", false);

  return {
    emailAddress,
    userMessage,
    agreeCheckbox,
    setEmailAddress: (email: string) => {
      setEmailAddress(email);
      set(() => ({
        emailAddress: email,
      }));
    },
    setUserMessage: (message: string) => {
      setUserMessage(message);
      set(() => ({
        userMessage: message,
      }));
    },
    setAgreeCheckbox: (value: boolean) => {
      setAgreeCheckbox(value);
      set(() => ({
        agreeCheckbox: value,
      }));
    },
  };
});
