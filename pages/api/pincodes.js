const pincodes = [173236, 165456, 876456]

export default function handler(req,res){
    res.status(200).json(pincodes)
}