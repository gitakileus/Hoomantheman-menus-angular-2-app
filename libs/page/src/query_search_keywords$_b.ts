import { B, be_ } from '@ctx-core/object'
import { page_query$_b } from '@ctx-core/sapper'
import { derived$, Readable$ } from '@ctx-core/store'
import type { page_Ctx } from './page_Ctx.js'
const key = 'query_search_keywords$'
export const query_search_keywords$_b:B<page_Ctx, typeof key> = be_(key, ctx=>{
	const page_query$ = page_query$_b(ctx)
	return derived$(page_query$, page_query=>{
		const search_keywords = page_query?.search_keywords as string
		return search_keywords ? search_keywords.split('|') : null
	}) as query_search_keywords$_T
})
export type query_search_keywords$_T = Readable$<string[]|null>
