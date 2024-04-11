import { ReactNode } from "react"
import { FormEvent } from "react";

export type FormPostsFilterProps = {
   children:ReactNode,
   onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}