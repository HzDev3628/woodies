import { AlertCircle } from 'lucide-react'

// import { Button } from '@/components/ui/button'
// import { onConnect } from '@/lib/Authentication/Authentication'
import { PhantomWallet } from '@/app/components/PhantomButton'

export const WalletNotConnected = () => {
  return (
    <div className="m-auto flex w-max flex-col items-center">
      <div className="mb-6 flex w-max items-center rounded-xl bg-card py-8 pl-5 pr-7 shadow-lg">
        <AlertCircle size={42} className="text-warning" />
        <div className="ml-[18px] block leading-4">
          <h3 className="text-xl font-semibold">Wallet isn't connected</h3>
          <span className="text-base font-normal">
            Pls connect wallet with Woodies on it
          </span>
        </div>
      </div>
      {/* <Button
        onClick={() => onConnect()}
        variant="active"
        size="active"
        className="m-auto text-xl leading-none text-text-button-green transition-colors duration-200 hover:bg-main-green"
      >
        Connect Wallet
      </Button> */}
      <PhantomWallet />
    </div>
  )
}
