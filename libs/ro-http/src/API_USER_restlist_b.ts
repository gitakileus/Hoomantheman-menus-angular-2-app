import { B, be_ } from '@ctx-core/object'
import type { ro_http_Ctx } from './ro_http_Ctx.js'
import { API_USER_path } from './paths.js'
import type { API_USER_restlist_payload_T } from './types.js'
import { ro_fetch_b } from './ro_fetch_b.js'
import type { RoRequestQuery_I } from './RoRequestQuery_I.js'
const key = 'API_USER_restlist'
export const API_USER_restlist_b:B<ro_http_Ctx, typeof key> = be_(key, (ctx)=>{
	const ro_fetch = ro_fetch_b(ctx)
	return API_USER_restlist as API_USER_restlist_T
	async function API_USER_restlist(requestData:Partial<RoRequestQuery_I>) {
		requestData.qt = 'restlist'
		return await ro_fetch({
			apiURL: API_USER_path,
			requestData,
		}) as Promise<API_USER_restlist_payload_T>
	}
})
export type API_USER_restlist_T = (requestData:Partial<RoRequestQuery_I>)=>Promise<API_USER_restlist_payload_T>
