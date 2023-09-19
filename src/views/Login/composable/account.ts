import utils from '@/utils/utils'
import type { AccountFormType } from '../types/login-type'
export function useHandleSaveUserOrPass(accountForm: AccountFormType) {
  const useSaveLocalUserOrPass = () => {
    if (accountForm.saveUserName) {
      utils.saveData('username', accountForm.username)
      utils.saveData('saveUserName', accountForm.saveUserName)
    } else {
      utils.removeData('username')
      utils.removeData('saveUserName')
    }

    if (accountForm.saveUserPass) {
      utils.saveData('password', accountForm.password)
      utils.saveData('saveUserPass', accountForm.saveUserPass)
    } else {
      utils.removeData('password')
      utils.removeData('saveUserPass')
    }
  }

  const useGetLocalUserOrPass = () => {
    const saveUserName = utils.getData('saveUserName')
    if (saveUserName) {
      accountForm.username = utils.getData('username')
    }
    const saveUserPass = utils.getData('saveUserPass')
    if (saveUserPass) {
      accountForm.password = utils.getData('password')
    }
  }
  return { useSaveLocalUserOrPass, useGetLocalUserOrPass }
}
