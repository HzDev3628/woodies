import Image from 'next/image'
import { StakingIMG, Raid2EarnIMG, WheelspinIMG } from './assets'

export default function MoksPages({
  params: { pagename },
}: {
  params: { pagename: string }
}) {
  const pageName =
    pagename.charAt(0).toUpperCase() + pagename.slice(1).toLowerCase()

  const src =
    (pagename === 'staking' && StakingIMG as unknown as string) ||
    (pagename === 'raid2earn' && Raid2EarnIMG as unknown as string) ||
    (pagename === 'wheelspins' && WheelspinIMG as unknown as string)
  return (
    <main className="h-screen w-full flex justify-center items-center">
      <div className="w-max relative z-30 flex flex-col items-center">
        <Image src={src as string} alt="" />
        <span>{pageName} is coming soon</span>
      </div>
    </main>
  )
}
