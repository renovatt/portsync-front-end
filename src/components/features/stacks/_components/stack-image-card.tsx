/* eslint-disable @next/next/no-img-element */
'use client'
import { StackDto } from '@entities/stack.dto'
import { useToggle } from '@hooks/use-toggle'
import { deleteStack } from '../actions/delete-stack-action.service'
import DeleteModal from '@globals/_components/delete-modal'

export default function StackImageCard({ id, iconUrl }: StackDto) {
  const { isOpen, closeModal, openModal } = useToggle()
  return (
    <>
      {isOpen && (
        <DeleteModal
          closeModal={closeModal}
          actionDelete={deleteStack}
          id={id}
        />
      )}

      <img
        onClick={openModal}
        src={iconUrl}
        alt={'icon-image'}
        className="size-14 cursor-pointer rounded-xl"
      />
    </>
  )
}
