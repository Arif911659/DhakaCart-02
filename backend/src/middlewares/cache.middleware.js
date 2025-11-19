const redis = require('redis');
const client = redis.createClient({ url: process.env.REDIS_URL });
client.connect().catch(()=>{});

module.exports = (ttl = 30) => async (req,res,next) => {
  const key = req.originalUrl;
  try {
    const cached = await client.get(key);
    if(cached) return res.json(JSON.parse(cached));
    const send = res.json.bind(res);
    res.json = (body) => {
      client.setEx(key, ttl, JSON.stringify(body));
      send(body);
    };
    next();
  } catch(err) { next(); }
};
