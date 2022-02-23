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
    name: "Janet",
    image: nfts.sampleSix,
  },
  {
    name: "Jim",
    image: nfts.sampleSeven,
  },
];

export default items;
