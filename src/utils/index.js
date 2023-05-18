export function getTimeData() {
  let today = new Date();
  //日期
  let DD = String(today.getDate()).padStart(2, "0"); // 获取日
  let MM = String(today.getMonth() + 1).padStart(2, "0"); //获取月份，1 月为 0
  let yyyy = today.getFullYear(); // 获取年
  // 时间
  let hh = String(today.getHours()).padStart(2, "0"); //获取当前小时数(0-23)
  let mm = String(today.getMinutes()).padStart(2, "0"); //获取当前分钟数(0-59)
  let ss = String(today.getSeconds()).padStart(2, "0"); //获取当前秒数(0-59)
  const weekList = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
  let weekDay = today.getDay();
  let week = weekList[weekDay - 1];
  return {
    DD,
    MM,
    yyyy,
    hh,
    mm,
    ss,
    week,
  };
}

export function localGet(key) {
  const value = window.localStorage.getItem(key);
  try {
    return JSON.parse(window.localStorage.getItem(key));
  } catch (error) {
    return value;
  }
}

export function localSet(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function localRemove(key) {
  window.localStorage.removeItem(key);
}
