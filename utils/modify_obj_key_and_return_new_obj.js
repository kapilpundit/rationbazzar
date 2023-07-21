export default function modify_obj_key_and_return_new_obj(obj) {
  const prevObj = obj;
  const keys = Object.keys(prevObj).map((item) => item.split(" ").join("_"));
  const values = Object.values(prevObj);
  const generateNewArr = values.map((item, i) => {
    let newObj = {};
    newObj[keys[i]] = item;
    return newObj;
  });
  return Object.assign.apply(Object, generateNewArr);
}
