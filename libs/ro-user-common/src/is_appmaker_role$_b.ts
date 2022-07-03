import { B, be_ } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { ro_login_user$_b } from './ro_login_user$_b.js'
import { is_appmaker_role_ } from './is_appmaker_role_.js'
import type { ro_user_common_Ctx } from './ro_user_common_Ctx.js'
const key = 'is_appmaker_role$'
export const is_appmaker_role$_b:B<ro_user_common_Ctx, typeof key> = be_(key, ctx=>{
	const ro_login_user = ro_login_user$_b(ctx)
	const is_appmaker_role = derived$(
		ro_login_user, is_appmaker_role_
	)
	return is_appmaker_role as is_appmaker_role$_T
})
export type is_appmaker_role$_T = Readable$<boolean>
