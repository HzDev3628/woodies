import { Earn, Gamble, Raid } from '../sections/assets'
import { WhitepaperURL } from './links'

export const TOOLS = {
  title: 'Earn, gamble & trade',
  buttonText: 'Read whitepaper',
  buttonURL: WhitepaperURL,
  card: [
    {
      text: 'Your Woodie will accumulate $LEAF (our SPL token) rewards over time. So get passive income by just holding & staking your NFT',
      image: Earn,
    },
    {
      text: 'Try your luck by spinning the wheel. Win bluechip NFTs & SOL, get free spin, use holder benefits, make partnerships and a lot of more',
      image: Gamble,
    },
    {
      text: '$LEAF is the main utility-based token for the Woodies ecosystem. Trade it using birdeye, jupiter, raydium and other exchanges.',
      image: Raid,
    },
  ],
}
