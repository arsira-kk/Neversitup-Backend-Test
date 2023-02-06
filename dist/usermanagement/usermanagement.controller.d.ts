import { UsermanagementService } from './usermanagement.service';
export declare class UsermanagementController {
    private UsermanagementService;
    constructor(UsermanagementService: UsermanagementService);
    getProfile(username: string): Promise<import("../authentication/authentication.entity").Users>;
    getOrder(user_id: number): Promise<import("../ordermanagement/ordermanagement.entity").Order[]>;
}
