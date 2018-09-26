var express = require('express');
var data = require('../../data/products');
var router = express.Router();

router.get('/list', function (req, res) {
  res.json(data);
});

router.get('/:id', function (req, res) {
	// const { id } = req.params;
	// var id = parseInt(req.params.id);
	// var item = data.list.find(item => item.id === id);
	
	// if (item) {
	// 	res.json(item);
	// } else {
	// 	res
	// 		.status(404)
	// 		.send('Item no encontrado');
	// }

	const { id } = req.params;
	const item = data.list.find(item => item.id === parseInt(id));

	return item ?
		res.json(item) :
		res
			.status(404)
			.send('Item no encontrado');
});

module.exports = router;
