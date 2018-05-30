module.exports = {
  shelfID: (req,res)=>{
    const db = req.app.get('db');
    db.get_bins([req.params.id[0]])
    .then((binData)=>{
      const bins = Array(5).fill(null);
      binData.forEach(bin => {
        bins[bin.bin - 1] = bin;
      });
      res.send(bins);
    });
  },
  getBinID: (req,res)=>{
    const db = req.app.get('db');
    let shelf = req.params.id[0];
    let bin = req.params.id[1];
    let image
    db.get_bin([shelf,bin])
    .then((user)=>{
      res.send(user);
    })
    .catch(err =>{
      console.log(err)
    })
  },
  putBinID:(req,res)=>{
    const db = req.app.get('db');
    let price = req.body.price;
    let name = req.body.name;
    let shelf = req.params.id[0];
    let bin = req.params.id[1];
    db.update_data([name,price,shelf,bin])
    .then(()=>{
      return db.get_data([shelf,bin])
    })
    .then((data)=>{
      res.send(data)
    })
    .catch(err =>{console.log(err)
    })
  },
  deleteBinID: (req, res) => {
    const db = req.app.get('db');
    let shelf = req.params.id[0];
    let bin = req.params.id[1];
    db.delete_data([shelf,bin])
    .then(()=>{
      return db.get_data([shelf,bin])
    })
    .then((data)=>{
      res.send(data)
    })
    .catch(err =>{console.log(err)
    })
  },
  postBinID: (req,res)=>{
    const db = req.app.get('db');
    let price = req.body.price;
    let name = req.body.name;
    let shelf = req.params.id[0];
    let bin = req.params.id[1];
    let image = req.body.image;
    db.add_data([name,price,shelf,bin,image])
    .then(()=>{
      return db.get_data([shelf,bin])
    })
    .then((data)=>{
      res.send(data)
    })
    .catch(err =>{console.log(err)
    })
  }
}