const router = require('express').Router();
const exampleService = require('../service/example.service');

router.get('/idle/current', async (req, res, err) => {
  const dirInfo = await exampleService.readContent();
  console.log(dirInfo);
  res.status(200).json(dirInfo);
});

router.get('/idle/win', async (req, res, err) => {
  
});

router.post('/idle/start', async (req, res, err) => {
  const x = 0;
  const y = 0;
  const jumping = false;
  const attacking = 0;
  const data = `{ "x" : ${x}, "y" : ${y}, "jumping" : ${jumping}, "attacking" : ${attacking} }`;
  await exampleService.generateFile(x, y, jumping, attacking, data);
  res.status(201).json({
    status: 'File created',
  });
});

router.put('/movement/right', async (req, res, err) => {
  const x= 10;
  const y= 0;
  const jumping= false;
  const attacking= 0;
  const data= `{ "x" : ${x}, "y" : ${y}, "jumping" : ${jumping}, "attacking" : ${attacking} }`;
  const fileStatus = await exampleService.writeContent(
   x,
   y,
   jumping,
   attacking,
   data
  );
  if (fileStatus) {
    res.status(202).json({
      status: 'File updated',
    });
  } else {
    res.status(404).json({
      status: 'File not found',
    });
  }
});

router.put('/movement/left', async (req, res, err) => {
  const x= -10;
  const y= 0;
  const jumping= false;
  const attacking= 0;
  const data= `{ "x" : ${x}, "y" : ${y}, "jumping" : ${jumping}, "attacking" : ${attacking} }`;
  const fileStatus = await exampleService.writeContent(
   x,
   y,
   jumping,
   attacking,
   data
  );
  if (fileStatus) {
    res.status(202).json({
      status: 'File updated',
    });
  } else {
    res.status(404).json({
      status: 'File not found',
    });
  }
});



router.put('/movement/down', async (req, res, err) => {
  const x= 0;
  const y= -10;
  const jumping= false;
  const attacking= 0;
  const data= `{ "x" : ${x}, "y" : ${y}, "jumping" : ${jumping}, "attacking" : ${attacking} }`;
  const fileStatus = await exampleService.writeContent(
   x,
   y,
   jumping,
   attacking,
   data
  );
  if (fileStatus) {
    res.status(202).json({
      status: 'File updated',
    });
  } else {
    res.status(404).json({
      status: 'File not found',
    });
  }
});

router.put('/movement/up', async (req, res, err) => {
  const x= 0;
  const y= 10;
  const jumping= false;
  const attacking= 0;
  const data= `{ "x" : ${x}, "y" : ${y}, "jumping" : ${jumping}, "attacking" : ${attacking} }`;
  const fileStatus = await exampleService.writeContent(
   x,
   y,
   jumping,
   attacking,
   data
  );
  if (fileStatus) {
    res.status(202).json({
      status: 'File updated',
    });
  } else {
    res.status(404).json({
      status: 'File not found',
    });
  }
});

router.put('/jump/right', async (req, res, err) => {
  const x= 10;
  const y= 10;
  const jumping= true;
  const attacking= 0;
  const data= `{ "x" : ${x}, "y" : ${y}, "jumping" : ${jumping}, "attacking" : ${attacking} }`;
  const fileStatus = await exampleService.writeContent(
   x,
   y,
   jumping,
   attacking,
   data
  );
  if (fileStatus) {
    res.status(202).json({
      status: 'File updated',
    });
  } else {
    res.status(404).json({
      status: 'File not found',
    });
  }
});

router.put('/jump/left', async (req, res, err) => {
  const x= -10;
  const y= 10;
  const jumping= true;
  const attacking= 0;
  const data= `{ "x" : ${x}, "y" : ${y}, "jumping" : ${jumping}, "attacking" : ${attacking} }`;
  const fileStatus = await exampleService.writeContent(
   x,
   y,
   jumping,
   attacking,
   data
  );
  if (fileStatus) {
    res.status(202).json({
      status: 'File updated',
    });
  } else {
    res.status(404).json({
      status: 'File not found',
    });
  }
});

router.put('/attack/right', async (req, res, err) => {
  const x= 10;
  const y= 10;
  const jumping= false;
  const attacking= 10;
  const data= `{ "x" : ${x}, "y" : ${y}, "jumping" : ${jumping}, "attacking" : ${attacking} }`;
  const fileStatus = await exampleService.writeContent(
   x,
   y,
   jumping,
   attacking,
   data
  );
  if (fileStatus) {
    res.status(202).json({
      status: 'File updated',
    });
  } else {
    res.status(404).json({
      status: 'File not found',
    });
  }
});

router.put('/attack/left', async (req, res, err) => {
  const x= -10;
  const y= 0;
  const jumping= false;
  const attacking= -10;
  const data= `{ "x" : ${x}, "y" : ${y}, "jumping" : ${jumping}, "attacking" : ${attacking} }`;
  const fileStatus = await exampleService.writeContent(
   x,
   y,
   jumping,
   attacking,
   data
  );
  if (fileStatus) {
    res.status(202).json({
      status: 'File updated',
    });
  } else {
    res.status(404).json({
      status: 'File not found',
    });
  }
});


router.delete('/die', (req, res, err) => {
  const x= 0;
  const y= 0;
  const jumping= false;
  const attacking= 0;
  const data= `{ "x" : ${x}, "y" : ${y}, "jumping" : ${jumping}, "attacking" : ${attacking} }`;
  const fileStatus = exampleService.deleteFile(x, y, jumping, attacking,data);
  res.status(200).json(fileStatus);
});

module.exports = router;
