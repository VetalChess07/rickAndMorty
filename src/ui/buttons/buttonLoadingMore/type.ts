import { ReactNode } from "react"

export type ButtonLoadingMoreProps = {
   children : ReactNode,
   isDisabled: boolean
   onClick: ()=> void,
}