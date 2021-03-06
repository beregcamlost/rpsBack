import models from '../models';

export default {
    add: async (req, res, next) => {
        try {
            await models.Game.create(req.body, (err, reg) => {
                if (err) res.send(err.errmsg || err.message);
                res.status(200).json(reg);
            });
        } catch (e) {
            res.status(500).send({
                message: 'we have a problem =('
            });
            next(e);
        }
    },
    query: async (req, res, next) => {
        try {
            await models.Game.findOne({ _id: req.query.id }, (err, reg) => {
                if (err) res.send(err.errmsg || err.message);
                if (!reg){
                    res.status(404).send({
                        message: 'Registry not found'
                    });
                } else res.status(200).json(reg);
            });
        } catch (e) {
            res.status(500).send({
                message: 'we have a problem =('
            });
            next(e);
        }        
    },
    list: async (req, res, next) => {
        try {
            await models.Game.find({}, (err, reg) => {
                    if (err) res.send(err.errmsg || err.message);
                    if (!reg){
                        res.status(404).send({
                            message: 'Registry not found'
                        });
                    } else if (reg.length === 0) {
                        res.status(404).send({
                            message: 'Not data available =('
                        });
                    } else res.status(200).json(reg);
                }).sort({ createdAt: -1 });
        } catch (e) {
            res.status(500).send({
                message: 'we have a problem =('
            });
            next(e);
        }
    },
    remove: async (req, res, next) => {
        try {
            await models.Game.findByIdAndDelete({ _id: req.body._id }, (err, reg) => {
                if (err) res.send(err.errmsg || err.message);
                if (!reg){
                    res.status(404).send({
                        message: 'Registry not found'
                    });
                } else res.status(200).json(reg);
            });
        } catch (e) {
            res.status(500).send({
                message: 'we have a problem =('
            });
            next(e);
        }
    },
}