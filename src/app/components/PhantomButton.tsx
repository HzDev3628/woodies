'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '@radix-ui/react-dropdown-menu'
import { useWalletMultiButton } from '@solana/wallet-adapter-base-ui'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import { ChevronDown, LogOut, User2 } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

import { Button } from '@/components/ui/button'

import UserImage from '../../../public/logo.png'

export const PhantomWallet = () => {
  const { setVisible: setModalVisible } = useWalletModal()
  const [isActiveMenu, setIsActiveMenu] = useState(false)

  const { buttonState, onConnect, onDisconnect, publicKey } =
    useWalletMultiButton({
      onSelectWallet() {
        setModalVisible(true)
      }
    })

  console.log(publicKey)
  const addressUser = publicKey?.toBase58()

  return (
    <>
      {buttonState === 'no-wallet' && (
        <Button
          variant="outline"
          className="flex h-[44px] w-[198px] items-center justify-center leading-3"
          size="active"
          onClick={() => {
            setModalVisible(true)
            if (onConnect) onConnect()
          }}
        >
          <User2 size={20} className="mr-[4px]" />
          <span className="mt-[3px] text-xl leading-3">Connect Wallet</span>
        </Button>
      )}
      {publicKey && (
        <DropdownMenu onOpenChange={() => setIsActiveMenu((prev) => !prev)}>
          <DropdownMenuTrigger className="outline-none">
            <Button
              variant="outline"
              className={`flex h-[44px] items-center justify-between gap-2 border px-6 text-xl leading-3 ${
                isActiveMenu ? 'bg-light-green text-text-button-green' : ''
              } `}
              size="active"
            >
              <span className="mt-[3px] leading-3">
                {addressUser?.slice(0, 4) + '...' + addressUser?.slice(-4)}
              </span>
              <ChevronDown
                size={29}
                fontWeight={800}
                className={`${
                  isActiveMenu
                    ? 'rotate-180 animate-chevron-active'
                    : 'rotate-0 animate-chevron-disabled'
                }`}
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-[14px] h-[170px] w-[206px] rounded-none rounded-b-2xl border-lines bg-background shadow-lg">
            <div className="flex flex-col text-main-text">
              <div className="ml-4 mt-[15px] flex items-center text-lg hover:text-hover-text">
                <Image
                  src={UserImage}
                  width={42}
                  height={42}
                  alt="user image"
                  className="border-e-full mr-[10px] rounded-full"
                />
                {addressUser?.slice(0, 4) + '...' + addressUser?.slice(-4)}
              </div>
              <div className="h-full w-full pl-[20px] pt-[16px]">
                <Button
                  variant="ghost"
                  className="mb-[12px] text-lg "
                  size="ghost"
                >
                  <User2 size={14} className="mr-[12px]" />
                  Profile
                </Button>
                <Button
                  variant="ghost"
                  className="text-lg"
                  size="ghost"
                  onClick={() => {
                    if (onDisconnect) onDisconnect()
                  }}
                >
                  <LogOut size={14} className="mr-[12px]" />
                  Disconnect
                </Button>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  )
}
