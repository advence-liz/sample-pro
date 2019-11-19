import request from 'umi-request'
import { AnyAction, Reducer } from 'redux'
import { EffectsCommandMap } from 'dva'

export interface ModalState {
  list: string[]
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
async function fetch(params:any) {
  return request.get('/api/list', {
    params
  })
}

const Model: ModelType = {
  namespace: 'BLOCK_NAME_CAMEL_CASE',
  state: {
    name: 'name',
    age: 18,
    list: [],
    pagination: {
      hideOnSinglePage: false,
      current: 1,
      pageSize: 10,
      total: 20,
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
    *fetchList({ payload }, { select, all, call, put }) {
      const { pagination } = payload
      const { current, pageSize } = pagination

      const { code, data, message } = yield call(fetch,{current,pageSize})
      const { list, total } = data

      yield put({ type: 'update', payload: { list, pagination: { ...pagination, total } } })
    },
  },
}

export default Model
