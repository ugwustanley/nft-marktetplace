import { nfts } from "./media.mock";
type Iitem = {
  name: string;
  image: string;
};

const items: Iitem[] = [
  {
    name: "Julia",
    image: nfts.sampleFive,
  },
  {
    name: "Jim",
    image: nfts.sampleSix,
  },
  {
    name: "Janet",
    image: nfts.sampleSeven,
  },
];

export default items;
