// ['length'] 获取数组长度
// never 类型
// T[0] 获取类型

type Length<T extends readonly any[]> = T['length'];

type tesla = ['tesla', 'model 3', 'model X', 'model Y'];
type spaceX = [
  'FALCON 9',
  'FALCON HEAVY',
  'DRAGON',
  'STARSHIP',
  'HUMAN SPACEFLIGHT'
];
type ss = spaceX['length'];

type teslaLength = Length<tesla>; // expected 4
type spaceXLength = Length<spaceX>;
