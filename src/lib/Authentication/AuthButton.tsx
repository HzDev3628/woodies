import { ChevronDown, LogOut, User2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import type { Session } from 'next-auth'
import { signOut } from 'next-auth/react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import UserImage from '../../../public/logo.svg'

export const AuthButton = ({
  session,
  onConnect
}: {
  session: Session | null
  onConnect: () => Promise<void>
}) => {
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
          onClick={onConnect}
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
              className={`flex h-[44px] w-[198px] items-center justify-between border-2 text-xl leading-3 ${
                isActiveMenu
                  ? 'border-green-border bg-green-light text-text-button'
                  : ''
              } `}
              size="active"
            >
              <span className="mt-[3px] leading-3">{ViewAddress}</span>
              <ChevronDown
                size={28}
                fontWeight={800}
                className={isActiveMenu ? 'rotate-180' : ''}
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-[14px] h-[170px] w-[198px] rounded-none rounded-b-2xl bg-background shadow-lg">
            <div className="flex flex-col text-text-main">
              <div className="ml-4 mt-[15px] flex items-center text-lg hover:text-text-hover">
                <Image
                  src={UserImage}
                  width={42}
                  height={42}
                  alt="user image"
                  className="border-e-full mr-[10px]"
                />
                {ViewAddress}
              </div>
              <div className="h-full w-full pl-[20px] pt-[16px]">
                <Button
                  variant="ghost"
                  className="mb-[12px] text-lg hover:text-text-hover"
                  size="ghost"
                >
                  <User2 size={14} className="mr-[12px]" />
                  Profile
                </Button>

                <Button
                  variant="ghost"
                  className="text-lg hover:text-text-hover"
                  size="ghost"
                  onClick={() => {
                    signOut()
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
