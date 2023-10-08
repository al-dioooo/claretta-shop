import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { X } from '@/components/icons/outline'

export default function Modal({ onClose, isOpen, title, content, size = 'xl', closable = true }: { onClose: any, isOpen: boolean, title: string | boolean, content: React.ReactElement, size: string, closable: boolean }) {
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={onClose}>
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center">
                            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 sm:translate-y-0 translate-y-8 sm:scale-95" enterTo="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 sm:translate-y-0 translate-y-8 sm:scale-100" leaveTo="opacity-0 sm:translate-y-0 translate-y-8 sm:scale-95">
                                <Dialog.Panel className={`max-w-${size} w-full p-6 text-left align-middle transition-all transform bg-white shadow-xl rounded-3xl`}>
                                    {title && (
                                        <div className="flex items-center justify-between">
                                            <Dialog.Title as="h3" className="text-xl font-medium leading-6 text-neutral-900">
                                                {title}
                                            </Dialog.Title>
                                            {closable && (
                                                <button onClick={onClose} className="inline-flex items-center p-2 transition rounded-full bg-neutral-100 active:hover:scale-90">
                                                    <X className="w-4 h-4" strokeWidth={1.5} />
                                                </button>
                                            )}
                                        </div>
                                    )}
                                    {content}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}