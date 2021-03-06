import request from 'umi-request'
import { AnyAction, Reducer } from 'redux'
import { EffectsCommandMap } from 'dva'
import { number } from 'prop-types'

export interface ModalState {
  users: string[]
  [propName: string]: any
}

export type Effect = (
  action: AnyAction,
  effects: EffectsCommandMap & { select: <T>(func: (state: ModalState) => T) => T },
) => void

export interface ModelType {
  namespace: string
  state: ModalState
  effects: {
    [propName: string]: Effect
  }
  reducers: {
    update: Reducer<ModalState>
    [propName: string]: Reducer<ModalState>
  }
}
async function fetch() {
  return request('/api/users')
}
const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout))

const Model: ModelType = {
  namespace: 'BLOCK_NAME_CAMEL_CASE',
  state: {
    name: 'name',
    count: 0,
    users: [],
  },
  reducers: {
    update(state, { payload }) {
      //   const _payload = JSON.parse(JSON.stringify(payload));
      //   return { ...state, ..._payload };
      return { ...state, ...payload }
    },
  },
  effects: {
    *fetch({ payload }, { select, all, call, put }) {
      const { users } = yield call(fetch)
      yield call(delay, 1000)
      console.log(users)
      yield put({ type: 'update', payload: { users } })
    },
  },
}

export default Model
