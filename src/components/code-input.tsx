import { TextField } from "@radix-ui/themes";
import { useEffect } from "react";
import { useInputValue } from "~/store/input-value";

type GenerateFn = (value: string) => void;

export function CodeInput({
  placeholder,
  generateFn,
}: {
  placeholder: string;
  generateFn: GenerateFn;
}) {
  const { value, setValue } = useInputValue();

  useEffect(() => {
    if (value) generateFn(value);
  }, [value, generateFn]);

  return (
    <TextField.Root
      placeholder={placeholder}
      defaultValue={value}
      size="3"
      onInput={(e) => {
        setValue((e.target as HTMLInputElement).value);
      }}
      className="w-full"
    />
  );
}
