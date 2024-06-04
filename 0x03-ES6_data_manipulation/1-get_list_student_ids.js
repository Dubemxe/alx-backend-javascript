export default function getListStudentIds(myArr) {
  if (myArr instanceof Array) {
    return myArr.map((studentId) => studentId.id);
  }
  return [];
}
