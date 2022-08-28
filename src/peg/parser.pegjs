Document
  = Addition
  / Subtraction

Addition
  = WS? n1:Number WS? '+' WS? n2:Number WS? { return n1+n2; }

Subtraction
  = WS? n1:Number WS? '-' WS? n2:Number WS? { return n1-n2; }

Number
  = m:'-'? n:BaseNumber f:FracPart? { return (n + (f || 0)) * ((m === '-')? -1 : 1); }

BaseNumber
  = n:[0-9]+ { return Number(n.join('')); }

FracPart
  = '_' numer:BaseNumber '/' denom:BaseNumber { return numer/denom; }

WS
  = [ \r\n\t\v]+