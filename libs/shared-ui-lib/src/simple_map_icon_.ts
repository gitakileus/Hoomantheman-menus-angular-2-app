export function simpleMapIcon_(color:string):string {
	const template = '<?xml version="1.0" encoding="UTF-8"?> <svg width="40px" height="40px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <defs> <circle id="path-1" cx="20" cy="20" r="8"></circle> <filter x="-68.8%" y="-56.2%" width="237.5%" height="237.5%" filterUnits="objectBoundingBox" id="filter-2"> <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology> <feOffset dx="0" dy="2" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset> <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur> <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite> <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix> </filter> </defs> <g id="UI" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="customer-map"> <g id="Oval-2"> <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use> <use fill="' + color + '" fill-rule="evenodd" xlink:href="#path-1"></use> <circle stroke="#FFFFFF" stroke-width="4" cx="20" cy="20" r="10"></circle> </g> </g> </g> </svg>'
	return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(template)}`
}
