import { B, be_ } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { brand_danger } from '@menus/css'
import { platform_settings$_b } from '@menus/http'
import type { platform_settings_Ctx } from './platform_settings_Ctx.js'
const key = 'Color_Assertive$'
export const Color_Assertive$_b:B<platform_settings_Ctx, typeof key> = be_(key, ctx=>
	derived$(platform_settings$_b(ctx), platform_settings=>
		platform_settings?.Color_Assertive || brand_danger
	) as Color_Assertive$_T
)
export type Color_Assertive$_T = Readable$<string>
