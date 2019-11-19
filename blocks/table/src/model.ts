import request from 'umi-request'
import { AnyAction, Reducer } from 'redux'
import { EffectsCommandMap } from 'dva'

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

const Model: ModelType = {
  namespace: 'BLOCK_NAME_CAMEL_CASE',
  state: {
    name: 'name',
    age: 18,
    users: [],
    pagination: {
      hideOnSinglePage: false,
      current: 1,
      pageSize: 10,
      total: 0
      },
      
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
      console.log(users)
      yield put({ type: 'update', payload: { users } })
    },
  },
}

export default Model
