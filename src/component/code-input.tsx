import { TextField } from "@radix-ui/themes";
import { useEffect } from "react";
import { useInput } from "~/store/input";

export function CodeInput({
   placeholder,
   generateFn,
}: {
   placeholder: string;
   generateFn: (value: string) => void;
}) {
   const { value, setValue } = useInput();

   useEffect(() => {
      if (value) generateFn(value);
   }, [value, generateFn]);

   return (
      <TextField.Root
         placeholder={placeholder}
         defaultValue={value}
         size="3"
         onInput={(e) => setValue(e.currentTarget.value)}
         className="w-full"
      />
   );
}
