const { Product } = require('../models');

const list = async (req,res) => {
  const products = await Product.findAll({ limit: 50 });
  res.json(products);
};

const getOne = async (req,res) => {
  const p = await Product.findByPk(req.params.id);
  if(!p) return res.status(404).json({message:'not found'});
  res.json(p);
};

const create = async (req,res) => {
  const p = await Product.create(req.body);
  res.json(p);
};

const update = async (req,res) => {
  const p = await Product.findByPk(req.params.id);
  if(!p) return res.status(404).json();
  await p.update(req.body);
  res.json(p);
};

const remove = async (req,res) => {
  const p = await Product.findByPk(req.params.id);
  if(!p) return res.status(404).json();
  await p.destroy();
  res.json({ message: 'deleted' });
};

module.exports = { list, getOne, create, update, remove };
