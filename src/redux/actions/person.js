import { ADD_PERSON } from "../constant"

// 创建增加一个人的action功能对象
export const addPerson = person => ({ type: ADD_PERSON, data: person })