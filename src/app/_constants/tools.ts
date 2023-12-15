import { Earn, Gamble, Raid } from '../sections/assets'
import { WhitepaperURL } from './links'

export const TOOLS = {
  title: 'Earn, gamble & raid',
  buttonText: 'Read whitepaper',
  buttonURL: WhitepaperURL,
  card: [
    {
      text: 'Your Woodie will accumulate $LEAF (our SPL token) rewards over time. So get passive income by just holding & staking your NFT',
      image: Earn
    },
    {
      text: 'Try your luck by spinning the wheel. Win bluechip NFTs & SOL, get free spin, use holder benefits, make partnerships and a lot of more',
      image: Gamble
    },
    {
      text: 'Raid socials using our platform. Just interact, reply, retweet to get rewards in SOL/tokens. Promote your social media by creating your raid as well',
      image: Raid
    }
  ]
}
