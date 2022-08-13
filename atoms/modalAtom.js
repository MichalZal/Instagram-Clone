import { atom } from 'recoil'
import { v1 } from 'uuid';

export const modalState = atom({
  key: `modalState-${v1()}`,
  default: '', 
})