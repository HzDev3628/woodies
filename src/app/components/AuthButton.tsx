'use client'
import { ChevronDown, LogOut, User2 } from 'lucide-react'
import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { onConnect } from '@/lib/Authentication/Authentication'

import UserImage from '../../../public/logo.png'

export const AuthButton = () => {
  const { data: session } = useSession()
  const [isActiveMenu, setIsActiveMenu] = useState(false)
  const user = session?.user
  const ViewAddress = `${user?.name?.slice(0, 4)}...${user?.name?.slice(
    user.name.length - 4,
    user.name.length
  )}`
  return (
    <>
      {!session && (
        <Button
          onClick={() => onConnect()}
          variant="outline"
          className="flex h-[44px] w-[198px] items-center justify-center leading-3"
          size="active"
        >
          <User2 size={20} className="mr-[4px]" />
          <span className="mt-[3px] text-xl leading-3">Connect Wallet</span>
        </Button>
      )}
      {session?.user && (
        <DropdownMenu onOpenChange={() => setIsActiveMenu((prev) => !prev)}>
          <DropdownMenuTrigger className="outline-none">
            <Button
              variant="outline"
              className={`flex h-[44px] items-center justify-between gap-2 border px-6 text-xl leading-3 ${
                isActiveMenu ? 'bg-light-green text-text-button-green' : ''
              } `}
              size="active"
            >
              <span className="mt-[3px] leading-3">{ViewAddress}</span>
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
          <DropdownMenuContent className="border-lines mt-[14px] h-[170px] w-[206px] rounded-none rounded-b-2xl bg-background shadow-lg">
            <div className="text-main-text flex flex-col">
              <div className="hover:text-hover-text ml-4 mt-[15px] flex items-center text-lg">
                <Image
                  src={UserImage}
                  width={42}
                  height={42}
                  alt="user image"
                  className="border-e-full mr-[10px] rounded-full"
                />
                {ViewAddress}
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
                  onClick={() => signOut()}
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
