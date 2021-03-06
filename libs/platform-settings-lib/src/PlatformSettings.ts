import { COLOR_POPULARRESTMAPICON } from '@menus/web-config'
import type { PlatformSettingsIntroPage } from './PlatformSettingsIntroPage.js'
export class PlatformSettings {
	About_Text:string
	App_Android_Store_Link:string
	App_Icon:string
	App_ID:string
	App_IOS_Store_Link:string
	App_Flyer:string
	App_Flyer_Mobile:string
	App_Logo:string
	App_Name:string
	App_Splash:string
	App_Version:string
	BackOffice_App_Android_Store_Link:string
	BackOffice_App_IOS_Store_Link:string
	BackOfficeMinAppVersion:string
	BackOfficeMinForcedAppVersion:string
	Color_Assertive:string
	Color_Balanced:string
	Color_Calm:string
	Color_Dark:string
	Color_Energized:string
	Color_Gray1:string
	Color_Gray2:string
	Color_Gray3:string
	Color_Gray4:string
	Color_Gray:string
	Color_GrayDark:string
	Color_GrayLight:string
	Color_GrayLighter:string
	Color_Light:string
	Color_PopularRestMapIcon:string = COLOR_POPULARRESTMAPICON
	Color_Positive:string
	Color_RestMapIcon:string
	Color_Royal:string
	Color_SelectedMapIcon:string
	Color_Silver:string
	Color_Stable:string
	Color_Text1:string
	Color_Text2:string
	Color_Text3:string
	Color_UserMapIcon:string
	ColorUserLocationText:string
	Contact_Email:string
	CustomDomain:string
	Default_ServiceType:number
	Default_View:number
	Enable_About_Text:boolean
	Enable_AndroidPay:boolean
	Enable_App:boolean
	Enable_ApplePay:boolean
	Enable_Catering:boolean
	Enable_Coupons:boolean
	Enable_Cuisine_Filter:boolean
	Enable_Delivery:boolean
	Enable_DiningIn:boolean
	Enable_Dish_Filter:boolean
	Enable_Facebook_Login:boolean
	Enable_Filters:boolean
	Enable_Google_Login:boolean
	Enable_HiWaiter:boolean
	Enable_Intro_Pages:boolean
	Enable_List_View:boolean
	Enable_Map_Icon:boolean
	Enable_Map_View:boolean
	Enable_Pickup:boolean
	Enable_Points:boolean
	Enable_Popular_Ribbon:boolean
	Enable_Yelp_Count:boolean
	Enable_Yelp_Rating:boolean
	EnableGuestSupportChat:boolean
	EnableLoggedInSupportChat:boolean
	FB_CLIENT_ID:string
	Flyer_Focus_Image:string = ''
	Flyer_SubTitle:string = ''
	Flyer_Title:string = ''
	Footer_Description:string
	Google_Analytics_ID:string
	Google_ClientSecret:string
	Google_Maps_Key:string
	GOOGLE_PLUS_REVERSE_CLIENT_ID:string
	GOOGLE_PLUS_WEB_CLIENT_ID:string
	Group_SimilarDishes:boolean
	Image_Points:string
	Intro_Action_Button_BGColor:string
	Intro_Action_Button_Color:string
	Intro_Action_Button_Text:string
	IntroPages:PlatformSettingsIntroPage[] = []
	IsMarketPlace: boolean;
	IsMultiRestaurant: boolean;
	MapStyles:any
	MinAppVersion:string
	MinForcedAppVersion:string
	Order_Points:string
	Points_Name:string
	PrivacyPolicy:string
	Promo_ActiveTabTextColor:string
	Promo_ActiveTabUnderlineColor:string
	Promo_BGColor:string
	Promo_TabTextColor:string
	PublicKey:string
	ReturnPolicy:string
	Review_Points:string
	SocialLink_Facebook:string
	SocialLink_Instagram:string
	SocialLink_Twitter:string
	SocialLink_Youtube:string
	SocialLinks:any
	Subdomain:string
	TermsOfUse:string
	YourPoints:string
}
