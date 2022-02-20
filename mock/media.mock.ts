interface Iuser{
    profile: string,
    signature: string
}
interface Infts{
    sampleOne: string,
    sampleTwo: string,
    sampleThree: string,
}
const user: Iuser = {
    profile: 'https://res.cloudinary.com/dqzhuopqp/image/upload/v1645365081/samples/jpg_foewhj_afpxrr.avif',
    signature: 'https://res.cloudinary.com/dqzhuopqp/image/upload/v1645365081/samples/Screenshot_2022-02-06_at_16.08.52_izungm_wmho2r.jpg',
}

const nfts: Infts = {
    sampleOne: 'https://res.cloudinary.com/dqzhuopqp/image/upload/v1645365083/samples/JuliaMain_scelkx.webp',
    sampleTwo: 'https://res.cloudinary.com/dqzhuopqp/image/upload/v1645365082/samples/nft-1_aihzzu.jpg',
    sampleThree: 'https://res.cloudinary.com/dqzhuopqp/image/upload/v1645365081/samples/Jim_placeholder_erelhf.avif',
}

export { user , nfts}