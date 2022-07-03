import { B, be_ } from '@ctx-core/object'
import type { ro_http_Ctx } from './ro_http_Ctx.js'
import type { RoRequestQuery_I } from './RoRequestQuery_I.js'
import type { API_MENUS_menuoption_add_payload_T } from './types.js'
import { API_MENUS_path } from './paths.js'
import { ro_fetch_b } from './ro_fetch_b.js'
const key = 'API_MENUS_menuoption_add'
export const API_MENUS_menuoption_add_b:B<ro_http_Ctx, typeof key> = be_(key, (ctx)=>{
	const ro_fetch = ro_fetch_b(ctx)
	return async function API_MENUS_menuoption_add(requestData:Partial<RoRequestQuery_I>) {
		requestData.qt = 'menuoption'
		requestData.act = 'add'
		return ro_fetch({
			apiURL: API_MENUS_path,
			requestData,
		}) as Promise<API_MENUS_menuoption_add_payload_T>
	}
})
export type API_MENUS_menuoption_add_T = (requestData:Partial<RoRequestQuery_I>)=>
	Promise<API_MENUS_menuoption_add_payload_T>
