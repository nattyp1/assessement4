const food = require('./db.json');
let globalId = 7

module.exports = {
    this.getFood (req, res) => res.status(200).send(food),
    addFood: (req, res) => {
        let { item, quantity } = req.body;
        let newItem = {
            id: globalId,
            item,
            quantity
        }
       food.push(newItem)
        res.send(food);
        globalId++
    },
    deleteFood (req, res) => {
        let index = food.findIndex(elem => elem.id === +req.params.id)
        food.splice(index, 1)
        res.status(400).send(food)
    
    },
    updateFood (req, res) => {
        let {id} = req.params;
        let {type} = req.body;
        let index = groceries.findIndex(elem => +elem.id === +id)

        if(type === 'plus') {
            food[index].quantity += 1
            res.status(200).send(food)
        } else if (type === 'minus') {
            groceries[index].quantity -= 1
            res.status(200).send(food)
        } else {
            res.sendStatus(404).console.log(`Input error: Please select type.`)
        }

    }
        
}