import pickBy from 'lodash/pickBy';
import values from 'lodash/values';

// for 01.20.10 returns [01.20, 01];
export const getAncestors = (state, code) => {
  let child = state[code];
  const result = [];
  while (child && child.parentCode) {
    result.push(child.parentCode);
    child = state[child.parentCode];
  }
  return result;
};

// for 01.20 returns [01.20.10, 01.20.11, 01.20.20];
export const getChildren = (state, code) =>
  values(pickBy(state, (v) => v.parentCode === code)).map((v) => v.code);

/*
  for 01.20.10 traverses up with fun(01.20, 01.20.10) -> fun(01, 01.20) and returns 01
  for 01 will not traverse and return 01
  top levels are ignored (A,B,C...)
*/
export const traverseUp = (state, code, fun) => {
  let child = state[code];
  if (!child) {
    return code;
  }

  let parent = state[child.parentCode];
  while (parent && parent.parentCode && fun(parent.code, child.code)) {
    child = parent;
    parent = state[child.parentCode];
  }

  return child.code;
};
