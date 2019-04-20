const Box = require("../models/Box");

class BoxController {
    async store (req, res) {
        const box = await Box.findOne({title : req.body.title});

        if (box.length > 0){
            return res.json(box);
        }else{
            const aux = await Box.create(req.body);
            return res.json(aux);
        };
    }

    async show (req, res) {
        const box = await Box.find({title:req.params.title}).populate({
            path: 'files',
            options: {sort: {createdAt: -1 } }
        });

        return res.json(box);
    }
}

module.exports = new BoxController();