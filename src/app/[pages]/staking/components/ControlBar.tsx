import { Button } from '@/components/ui/button'

export const ControlBar = () => {
  return (
    <div className="block w-full">
      <div className="mb-2 flex h-min w-full items-center justify-between text-lg font-normal leading-none">
        <p>Stake your Woodies</p>
        <p>Unclaimed $LEAF: 0</p>
      </div>
      <p className="h-[2px] w-full bg-lines" />
      <div className="mt-3 flex w-full items-center justify-between">
        <div>
          <Button variant="outline" className="mr-3 rounded-[10px] text-xl">
            Unstaked
          </Button>
          <Button variant="outline" className="rounded-[10px] text-xl">
            Staked
          </Button>
        </div>
        <div>
          <Button variant="outline" className="mr-3 rounded-[10px] text-xl">
            Select all
          </Button>
          <Button variant="outline" className="rounded-[10px] text-xl">
            Stake
          </Button>
        </div>
      </div>
    </div>
  )
}
