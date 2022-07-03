/*
 * This file was generated by `npm run generate_ctx_I_file` in @ctx-core/dev-tools
*/
import type { api_apigateway_T } from './api/api_apigateway_b.js'
import type { api_ec2_security_group_T } from './api/api_ec2_security_group_b.js'
import type { api_host_T } from './api/api_host_b.js'
import type { api_root_distribution_T } from './api/api_root_distribution_b.js'
import type { api_user_T } from './api/api_user_b.js'
import type { dishzilla_host_T } from './api/dishzilla_host_b.js'
import type { images_assets_bucket_T } from './api/images_assets_bucket_b.js'
import type { images_certificate_T } from './api/images_certificate_b.js'
import type { images_distribution_T } from './api/images_distribution_b.js'
import type { bastion_T } from './bastion/bastion_b.js'
import type { bastion_security_group_T } from './bastion/bastion_security_group_b.js'
import type { NODE_ENV_T } from './common/NODE_ENV_b.js'
import type { aws_certificate_T } from './common/aws_certificate_b.js'
import type { certificate_T } from './common/certificate_b.js'
import type { distribution__T } from './common/distribution__b.js'
import type { images_host_T } from './common/images_host_b.js'
import type { local_az_api_certificate_T } from './common/local_az_api_certificate_b.js'
import type { local_az_certificate_T } from './common/local_az_certificate_b.js'
import type { menusappbuilder_Instance$_T } from './common/menusappbuilder_Instance$_b.js'
import type { pay_apigateway_T } from './pay/pay_apigateway_b.js'
import type { pay_bucket_T } from './pay/pay_bucket_b.js'
import type { pay_distribution_T } from './pay/pay_distribution_b.js'
import type { pay_host_T } from './pay/pay_host_b.js'
import type { pay_user_T } from './pay/pay_user_b.js'
import type { has_redis_T } from './redis/has_redis_b.js'
import type { redis_cluster_T } from './redis/redis_cluster_b.js'
import type { redis_security_group_T } from './redis/redis_security_group_b.js'
import type { redis_subnet_group_T } from './redis/redis_subnet_group_b.js'
import type { api_vpc_T } from './vpc/api_vpc_b.js'
import type { stack_vpc_T } from './vpc/stack_vpc_b.js'
import type { transit_gateway_T } from './vpc/transit_gateway_b.js'
import type { web_apigateway_T } from './web/web_apigateway_b.js'
import type { web_host_T } from './web/web_host_b.js'
import type { web_lambda_function_T } from './web/web_lambda_function_b.js'
import type { web_lambda_version_T } from './web/web_lambda_version_b.js'
import type { web_root_distribution_T } from './web/web_root_distribution_b.js'
import type { web_star_distribution_T } from './web/web_star_distribution_b.js'
export interface aws_ctx_I {
	api_apigateway?:api_apigateway_T
	api_ec2_security_group?:api_ec2_security_group_T
	api_host?:api_host_T
	api_root_distribution?:api_root_distribution_T
	api_user?:api_user_T
	dishzilla_host?:dishzilla_host_T
	images_assets_bucket?:images_assets_bucket_T
	images_certificate?:images_certificate_T
	images_distribution?:images_distribution_T
	bastion?:bastion_T
	bastion_security_group?:bastion_security_group_T
	NODE_ENV?:NODE_ENV_T
	aws_certificate?:aws_certificate_T
	certificate?:certificate_T
	distribution_?:distribution__T
	images_host?:images_host_T
	local_az_api_certificate?:local_az_api_certificate_T
	local_az_certificate?:local_az_certificate_T
	menusappbuilder_Instance$?:menusappbuilder_Instance$_T
	pay_apigateway?:pay_apigateway_T
	pay_bucket?:pay_bucket_T
	pay_distribution?:pay_distribution_T
	pay_host?:pay_host_T
	pay_user?:pay_user_T
	has_redis?:has_redis_T
	redis_cluster?:redis_cluster_T
	redis_security_group?:redis_security_group_T
	redis_subnet_group?:redis_subnet_group_T
	api_vpc?:api_vpc_T
	stack_vpc?:stack_vpc_T
	transit_gateway?:transit_gateway_T
	web_apigateway?:web_apigateway_T
	web_host?:web_host_T
	web_lambda_function?:web_lambda_function_T
	web_lambda_version?:web_lambda_version_T
	web_root_distribution?:web_root_distribution_T
	web_star_distribution?:web_star_distribution_T
}