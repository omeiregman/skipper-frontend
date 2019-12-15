import { Observable } from 'rxjs'
import { ofType } from 'redux-observable'
import { EXAMPLE_ACTION_TYPE, exampleActionDone } from './actions'
import { map } from 'rxjs/operators'
import { AnyAction } from 'redux'

export const exampleEpic = (action$: Observable<AnyAction>): Observable<any> =>
  action$.pipe(
    ofType(EXAMPLE_ACTION_TYPE),
    map(action => {
      return exampleActionDone(`${action.payload}_DONE`)
    })
  )
