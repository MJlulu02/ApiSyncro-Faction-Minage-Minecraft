const router = require('express').Router();

const InventoryUser = require('./../model/InventoryUser');

router.get('/test', (req, res) => {
    console.log('Bonjour')
})

router.post('/get', async(req, res) => {
    if(Object.keys(req.body).length === 0) return res.status(201).json({result:"BadRequest"})
    PlInv = await InventoryUser.findOne({UUID:req.body.uuid})
    try{
        res.status(201).json({inv:PlInv.inventory})
    }catch{
        res.status(201).json({inv:[]})
    }
    
})

router.post('/delete', async(req, res)=>{
    console.log('Bonjour')
    if(Object.keys(req.body).length === 0) return res.status(201).json({result:"BadRequest"})
    const pl = await InventoryUser.findOne({UUID:req.body.uuid})
    if(pl){
        await InventoryUser.deleteOne({UUID:req.body.uuid})
    }
    res.status(201).json(true)
})

router.post('/set', async(req, res) => {
    if(Object.keys(req.body).length === 0) return res.status(201).json({result:"BadRequest"})
    let info = {
        pseudo: req.body.pseudo,
        UUID: req.body.uuid,
        inventory: req.body.inventory
    }

    const pl = await InventoryUser.findOne({UUID:req.body.uuid})
    if(pl){
        await InventoryUser.deleteOne({UUID:req.body.uuid})
        const PlInv = new InventoryUser(info);
        PlInv.save();
    }else{
        const PlInv = new InventoryUser(info);
        PlInv.save();
    }

    res.status(201).json(true);
})

module.exports = router;