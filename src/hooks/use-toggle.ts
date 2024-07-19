import { useState } from 'react'

export const useToggle = () => {
  const [isOpen, setModal] = useState(false)

  const toggleModal = () => {
    setModal((state) => !state)
  }

  const openModal = () => setModal(true)
  const closeModal = () => setModal(false)
  const openModalProps = (state: boolean) => setModal(state)

  return {
    isOpen,
    openModal,
    closeModal,
    toggleModal,
    openModalProps,
  }
}
